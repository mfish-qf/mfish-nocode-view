<!--
 @description: 销售订单明细查看
 @author: mfish
 @date: 2024-09-02
 @version: V2.1.1
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="销售订单明细信息">
    <Description @register="registerDesc" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { Description, useDescription } from "@mfish/core/components/Description";
  import { ref } from "vue";
  import { DemoOrderDetailDesc } from "./demoOrderDetail.data";

  defineOptions({ name: "DemoOrderDetailViewModal" });
  const demoOrderDetailData = ref();
  const demoOrderDetailDesc = new DemoOrderDetailDesc();
  const [registerModal, { setModalProps }] = useModalInner(async (data) => {
    setModalProps({
      confirmLoading: false,
      width: "800px",
      cancelText: "关闭",
      showOkBtn: false
    });
    demoOrderDetailData.value = data.record;
  });
  const [registerDesc] = useDescription({
    data: demoOrderDetailData,
    schema: demoOrderDetailDesc.viewSchema,
    column: 2
  });
</script>
