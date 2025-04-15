<!--
 @description: 大屏资源API查看
 @author: mfish
 @date: 2025-03-21
 @version: V2.0.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="大屏资源API信息">
    <Description @register="registerDesc" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { Description, useDescription } from "@mfish/core/components/Description";
  import { ref } from "vue";
  import { ScreenResourceApiDesc } from "./screenResourceApi.data";

  defineOptions({ name: "ScreenResourceApiViewModal" });
  const screenResourceApiData = ref();
  const screenResourceApiDesc = new ScreenResourceApiDesc();
  const [registerModal, { setModalProps }] = useModalInner(async (data) => {
    setModalProps({
      confirmLoading: false,
      width: "800px",
      cancelText: "关闭",
      showOkBtn: false
    });
    screenResourceApiData.value = data.record;
  });
  const [registerDesc] = useDescription({
    data: screenResourceApiData,
    schema: screenResourceApiDesc.viewSchema,
    column: 2
  });
</script>
