<!--
 @description: 系统日志
 @author: mfish
 @date: 2023-01-08
 @version: V1.0.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="查看任务日志" :showOkBtn="false" cancelText="关闭">
    <Description @register="registerDesc" />
  </BasicModal>
</template>
<script lang="ts">
import { ref } from "vue";
import { BasicModal, useModalInner } from "/@/components/general/Modal";
import { Description, useDescription } from "/@/components/general/Description";
import { jobLogSchema } from "/@/views/scheduler/jobLog/jobLog.data";

export default {
  name: "JobLogModal",
  components: { BasicModal, Description },
  emits: ["success", "register"],
  setup() {
    let jobLogData = ref();
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      setModalProps({ confirmLoading: false, width: "800px" });
      jobLogData.value = { ...data };
    });
    const [registerDesc] = useDescription({
      data: jobLogData,
      schema: jobLogSchema,
      column: 2
    });

    return {
      registerDesc,
      registerModal,
      closeModal,
      jobLogSchema,
      jobLogData
    };
  }
};
</script>
