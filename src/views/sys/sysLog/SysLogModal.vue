<!--
 @description: 系统日志
 @author: mfish
 @date: 2023-01-08
 @version: V1.0.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="查看系统日志" :showOkBtn="false" cancelText="关闭">
    <Description @register="registerDesc" />
  </BasicModal>
</template>
<script lang="ts">
import { ref } from "vue";
import { BasicModal, useModalInner } from "/@/components/general/Modal";
import { Description, useDescription } from "/@/components/general/Description";
import { sysLogSchema } from "/@/views/sys/sysLog/sysLog.data";

export default {
  name: "SysLogModal",
  components: { BasicModal, Description },
  emits: ["success", "register"],
  setup() {
    let sysLogData = ref();
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      setModalProps({ confirmLoading: false, width: "40%" });
      sysLogData.value = { ...data };
    });
    const [registerDesc] = useDescription({
      data: sysLogData,
      schema: sysLogSchema,
      column: 2
    });

    return {
      registerDesc,
      registerModal,
      closeModal,
      sysLogSchema,
      sysLogData
    };
  }
};
</script>
