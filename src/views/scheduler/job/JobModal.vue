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
        <a-step title="触发策略配置" @click="callJobSubmit" />
      </a-steps>
    </div>
    <JobConfig ref="jobConfig" v-show="currentStep === 0" @next="jobSubmit" :jobInfo="jobInfo" />
    <JobSubscribeManagement v-show="currentStep === 1"></JobSubscribeManagement>
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
    const callJobSubmit = () => {
      jobConfig.value.customSubmitFunc();
    };
    const jobInfo = ref(null);
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      jobInfo.value = null;
      currentStep.value = 0;
      setModalProps({ confirmLoading: false, width: "40%", showCancelBtn: false });
      isUpdate.value = !!data?.isUpdate;
      if (unref(isUpdate)) {
        jobInfo.value = { ...data.record };
      }
    });
    const getTitle = computed(() => (!unref(isUpdate) ? "新增定时调度任务" : "编辑定时调度任务"));

    function stepChange(value) {
      currentStep.value = value;
    }

    function jobSubmit(value: any) {
      stepChange(1);
      jobInfo.value = value;
    }

    async function handleSubmit() {
      setModalProps({ confirmLoading: true });
      if (unref(isUpdate)) {
        saveJob(updateJob, jobInfo.value);
      } else {
        saveJob(insertJob, jobInfo.value);
      }
    }

    function saveJob(save, values) {
      save(values).then(() => {
        emit("success");
        closeModal();
      }).finally(() => {
        setModalProps({ confirmLoading: false });
      });
    }

    return {
      registerModal,
      getTitle,
      handleSubmit,
      currentStep,
      stepChange,
      jobInfo,
      jobSubmit,
      jobConfig,
      callJobSubmit
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