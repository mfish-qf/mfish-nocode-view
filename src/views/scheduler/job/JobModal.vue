<!--
 @description: 定时调度任务
 @author: mfish
 @date: 2023-02-20
 @version: V2.2.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit" @cancel="clearJob">
    <div class="step-form-form">
      <ASteps :current="currentStep">
        <AStep title="任务基础配置" @click="stepChange(0)" />
        <AStep title="触发策略配置" @click="stepChange(1)" />
      </ASteps>
    </div>
    <JobConfig ref="jobConfigRef" v-show="currentStep === 0" :job-info="jobInfo" />
    <JobSubscribeManagement ref="triggerConfigRef" v-show="currentStep === 1" :job-id="jobId" />
    <template #centerFooter>
      <a-button v-show="currentStep === 0" @click="stepChange(1)" type="primary" danger>下一步</a-button>
      <a-button v-show="currentStep === 1" @click="stepChange(0)" type="primary" danger>上一步</a-button>
    </template>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { computed, ref, unref } from "vue";
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { insertJob, updateJob } from "@/api/scheduler/Job";
  import { Steps as ASteps } from "ant-design-vue";
  import JobConfig from "@/views/scheduler/job/JobConfig.vue";
  import JobSubscribeManagement from "@/views/scheduler/job-subscribe/index.vue";

  defineOptions({ name: "JobModal" });
  const emit = defineEmits(["success", "register"]);
  const AStep = ASteps.Step;
  const isUpdate = ref(true);
  const currentStep = ref(0);
  const jobConfigRef = ref();
  const triggerConfigRef = ref();
  const getJobValue = () => {
    return jobConfigRef.value?.getValue();
  };
  const getTriggerValue = () => {
    return triggerConfigRef.value?.getValue();
  };
  const jobInfo = ref<any>(null);
  const jobId = ref("");
  const [registerModal, { setModalProps, closeModal }] = useModalInner((data) => {
    currentStep.value = 0;
    setModalProps({ confirmLoading: false, width: "800px" });
    isUpdate.value = !!data?.isUpdate;
    if (unref(isUpdate)) {
      jobInfo.value = { ...data.record };
      jobId.value = data.record.id;
    }
  });
  const getTitle = computed(() => (unref(isUpdate) ? "编辑调度任务" : "新增调度任务"));

  function stepChange(value) {
    currentStep.value = value;
  }

  function clearJob() {
    jobInfo.value = null;
    jobId.value = "";
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
</script>
<style lang="less" scoped>
  .step-form-form {
    width: 60%;
    margin: 0 auto 15px auto;
  }
</style>
