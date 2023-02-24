<!--
 @description: 定时调度任务
 @author: mfish
 @date: 2023-02-20
 @version: V1.0.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <div class="step-form-form">
      <a-steps :current="currentStep">
        <a-step title="任务基础配置" @click="stepChange(0)" />
        <a-step title="触发策略配置" @click="stepChange(1)" />
      </a-steps>
    </div>
    <JobConfig ref="jobConfig" v-show="currentStep === 0" :jobInfo="jobInfo" />
    <JobSubscribeManagement ref="triggerConfig" v-show="currentStep === 1" :jobId="jobId" />
    <template #centerFooter>
      <a-button v-show="currentStep === 0" @click="stepChange(1)">下一步</a-button>
      <a-button v-show="currentStep === 1" @click="stepChange(0)">上一步</a-button>
    </template>
  </BasicModal>
</template>
<script lang="ts">
import { ref, computed, unref } from "vue";
import { BasicForm } from "/@/components/general/Form/index";
import { BasicModal, useModalInner } from "/@/components/general/Modal";
import { insertJob, updateJob } from "/@/api/scheduler/Job";
import { CodeEditor } from "/@/components/general/CodeEditor";
import { CollapseContainer } from "/@/components/general/Container";
import { Steps } from "ant-design-vue";
import JobConfig from "/@/views/scheduler/job/JobConfig.vue";
import JobSubscribeManagement from "/@/views/scheduler/jobSubscribe/index.vue";


export default {
  name: "JobModal",
  components: {
    JobSubscribeManagement,
    JobConfig,
    BasicModal, BasicForm, CodeEditor, CollapseContainer, [Steps.name]: Steps,
    [Steps.Step.name]: Steps.Step
  },
  emits: ["success", "register"],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const currentStep = ref(0);
    const jobConfig = ref();
    const triggerConfig = ref();
    const getJobValue = () => {
      return jobConfig.value.getValue();
    };
    const getTriggerValue = () => {
      return triggerConfig.value.getValue();
    };
    const jobInfo = ref(null);
    const jobId = ref("");
    const [registerModal, { setModalProps, closeModal }] = useModalInner((data) => {
      currentStep.value = 0;
      setModalProps({ confirmLoading: false, width: "40%" });
      isUpdate.value = !!data?.isUpdate;
      jobInfo.value = null;
      jobId.value = "";
      if (unref(isUpdate)) {
        jobInfo.value = { ...data.record };
        jobId.value = data.record.id;
      }
    });
    const getTitle = computed(() => (!unref(isUpdate) ? "新增定时调度任务" : "编辑定时调度任务"));

    function stepChange(value) {
      currentStep.value = value;
    }

    async function handleSubmit() {
      getJobValue().then((value) => {
        value.subscribes = getTriggerValue();
        if (unref(isUpdate)) {
          saveJob(updateJob, value);
        } else {
          saveJob(insertJob, value);
        }
      });
    }

    function saveJob(save, values) {
      save(values).then(() => {
        emit("success");
        closeModal();
      });
    }

    return {
      registerModal,
      getTitle,
      handleSubmit,
      currentStep,
      stepChange,
      jobInfo,
      jobId,
      jobConfig,
      triggerConfig
    };
  }
};
</script>
<style lang="less" scoped>
.step-form-form {
  width: 60%;
  margin: 0 auto 15px auto;
}
</style>