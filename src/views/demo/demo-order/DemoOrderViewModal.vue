<!--
 @description: 销售订单查看
 @author: mfish
 @date: 2024-09-13
 @version: V1.3.2
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="销售订单信息">
    <Description @register="registerDesc" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicModal, useModalInner } from "@/components/general/Modal";
  import { Description, useDescription } from "@/components/general/Description";
  import { ref } from "vue";
  import { DemoOrderDesc } from "./demoOrder.data";

  defineOptions({ name: "DemoOrderViewModal" });
  const demoOrderData = ref();
  const demoOrderDesc = new DemoOrderDesc();
  const [registerModal, { setModalProps }] = useModalInner(async (data) => {
    setModalProps({
      confirmLoading: false,
      width: "800px",
      cancelText: "关闭",
      showOkBtn: false
    });
    demoOrderData.value = data.record;
  });
  const [registerDesc] = useDescription({
    data: demoOrderData,
    schema: demoOrderDesc.viewSchema,
    column: 2
  });
</script>
