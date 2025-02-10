<!--
 @description: 导入导出Demo查看
 @author: mfish
 @date: 2024-09-02
 @version: V1.3.2
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="导入导出Demo信息">
    <Description @register="registerDesc" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicModal, useModalInner } from "@/components/general/Modal";
  import { Description, useDescription } from "@/components/general/Description";
  import { ref } from "vue";
  import { DemoImportExportDesc } from "./demoImportExport.data";

  defineOptions({ name: "DemoImportExportViewModal" });
  const demoImportExportData = ref();
  const demoImportExportDesc = new DemoImportExportDesc();
  const [registerModal, { setModalProps }] = useModalInner(async (data) => {
    setModalProps({
      confirmLoading: false,
      width: "800px",
      cancelText: "关闭",
      showOkBtn: false
    });
    demoImportExportData.value = data.record;
  });
  const [registerDesc] = useDescription({
    data: demoImportExportData,
    schema: demoImportExportDesc.viewSchema,
    column: 2
  });
</script>
