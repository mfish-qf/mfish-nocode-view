<!--
 @description: demo_data_scope查看
 @author: mfish
 @date: 2024-09-04
 @version: V2.1.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="demo_data_scope信息">
    <Description @register="registerDesc" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { Description, useDescription } from "@mfish/core/components/Description";
  import { ref } from "vue";
  import { DemoDataScopeDesc } from "./demoDataScope.data";

  defineOptions({ name: "DemoDataScopeViewModal" });
  const demoDataScopeData = ref();
  const demoDataScopeDesc = new DemoDataScopeDesc();
  const [registerModal, { setModalProps }] = useModalInner(async (data) => {
    setModalProps({
      confirmLoading: false,
      width: "800px",
      cancelText: "关闭",
      showOkBtn: false
    });
    demoDataScopeData.value = data.record;
  });
  const [registerDesc] = useDescription({
    data: demoDataScopeData,
    schema: demoDataScopeDesc.viewSchema,
    column: 2
  });
</script>
