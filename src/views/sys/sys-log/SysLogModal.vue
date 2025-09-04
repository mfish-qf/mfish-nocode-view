<!--
 @description: 系统日志
 @author: mfish
 @date: 2023-01-08
 @version: V2.1.1
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="查看系统日志" :show-ok-btn="false" cancel-text="关闭">
    <Description @register="registerDesc" :content-style="{ wordBreak: 'normal' }" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { ref } from "vue";
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { Description, useDescription } from "@mfish/core/components/Description";
  import { sysLogSchema } from "@/views/sys/sys-log/sysLog.data";

  const sysLogData = ref();
  const [registerModal, { setModalProps }] = useModalInner(async (data) => {
    setModalProps({ confirmLoading: false, width: "800px" });
    sysLogData.value = { ...data };
  });
  const [registerDesc] = useDescription({
    data: sysLogData,
    schema: sysLogSchema,
    column: 2
  });
</script>
