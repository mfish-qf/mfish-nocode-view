<!--
 @description: 大屏资源信息查看
 @author: mfish
 @date: 2025-03-19
 @version: V2.1.1
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="大屏资源信息信息">
    <Description @register="registerDesc" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { Description, useDescription } from "@mfish/core/components/Description";
  import { ref } from "vue";
  import { ScreenResourceDesc } from "./screenResource.data";

  defineOptions({ name: "ScreenResourceViewModal" });
  const screenResourceData = ref();
  const screenResourceDesc = new ScreenResourceDesc();
  const [registerModal, { setModalProps }] = useModalInner(async (data) => {
    setModalProps({
      confirmLoading: false,
      width: "800px",
      cancelText: "关闭",
      showOkBtn: false
    });
    screenResourceData.value = data.record;
  });
  const [registerDesc] = useDescription({
    data: screenResourceData,
    schema: screenResourceDesc.viewSchema,
    column: 2
  });
</script>
