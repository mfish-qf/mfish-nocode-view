<!--
 @description: 公式信息查看
 @author: mfish
 @date: 2025-02-11
 @version: V2.1.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="公式信息信息">
    <Description @register="registerDesc" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { Description, useDescription } from "@mfish/core/components/Description";
  import { ref } from "vue";
  import { FormulaInfoDesc } from "./formulaInfo.data";

  defineOptions({ name: "FormulaInfoViewModal" });
  const formulaInfoData = ref();
  const formulaInfoDesc = new FormulaInfoDesc();
  const [registerModal, { setModalProps }] = useModalInner(async (data) => {
    setModalProps({
      confirmLoading: false,
      width: "800px",
      cancelText: "关闭",
      showOkBtn: false
    });
    formulaInfoData.value = data.record;
  });
  const [registerDesc] = useDescription({
    data: formulaInfoData,
    schema: formulaInfoDesc.viewSchema,
    column: 2
  });
</script>
