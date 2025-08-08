<!--
 @description: HTTP请求数据源表查看
 @author: mfish
 @date: 2025-07-22
 @version: V2.0.1
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="HTTP请求数据源表信息">
    <Description @register="registerDesc" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { Description, useDescription } from "@mfish/core/components/Description";
  import { ref } from "vue";
  import { MfHttpDesc } from "./mfHttp.data";

  defineOptions({ name: "MfHttpViewModal" });
  const mfHttpData = ref();
  const mfHttpDesc = new MfHttpDesc();
  const [registerModal, { setModalProps }] = useModalInner(async (data) => {
    setModalProps({
      confirmLoading: false,
      width: "800px",
      cancelText: "关闭",
      showOkBtn: false
    });
    mfHttpData.value = data.record;
  });
  const [registerDesc] = useDescription({
    data: mfHttpData,
    schema: mfHttpDesc.viewSchema,
    column: 2
  });
</script>
