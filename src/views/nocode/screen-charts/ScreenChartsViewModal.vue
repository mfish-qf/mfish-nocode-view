<!--
 @description: 组件基础信息查看
 @author: mfish
 @date: 2024-11-19
 @version: V2.0.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="组件基础信息信息">
    <Description @register="registerDesc" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicModal, useModalInner } from "@mfish/core/src/components/Modal";
  import { Description, useDescription } from "@mfish/core/src/components/Description";
  import { ref } from "vue";
  import { ScreenChartsDesc } from "./screenCharts.data";

  defineOptions({ name: "ScreenChartsViewModal" });
  const screenChartsData = ref();
  const screenChartsDesc = new ScreenChartsDesc();
  const [registerModal, { setModalProps }] = useModalInner(async (data) => {
    setModalProps({
      confirmLoading: false,
      width: "600px",
      cancelText: "关闭",
      showOkBtn: false
    });
    screenChartsData.value = data.record;
  });
  const [registerDesc] = useDescription({
    data: screenChartsData,
    schema: screenChartsDesc.viewSchema,
    column: 1
  });
</script>
