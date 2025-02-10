<!--
 @description: 系统日志
 @author: mfish
 @date: 2023-01-08
 @version: V1.3.2
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="查看任务日志" :show-ok-btn="false" cancel-text="关闭">
    <Description @register="registerDesc" :content-style="{ wordBreak: 'normal' }" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  import { BasicModal, useModalInner } from "@/components/general/Modal";
  import { Description, useDescription } from "@/components/general/Description";
  import { jobLogSchema } from "@/views/scheduler/job-log/jobLog.data";
  defineOptions({ name: "JobLogModal" });

  defineEmits(["success", "register"]);
  const jobLogData = ref();
  const [registerModal, { setModalProps }] = useModalInner(async (data) => {
    setModalProps({ confirmLoading: false, width: "800px" });
    jobLogData.value = { ...data };
  });
  const [registerDesc] = useDescription({
    data: jobLogData,
    schema: jobLogSchema,
    column: 2
  });
</script>
