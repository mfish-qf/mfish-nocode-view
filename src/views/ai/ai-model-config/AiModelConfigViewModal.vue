<!--
 @description: AI模型配置信息查看
 @author: mfish
 @date: 2026-07-03
 @version: V2.4.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="AI模型配置信息信息">
    <Description @register="registerDesc" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { Description, useDescription } from "@mfish/core/components/Description";
  import { ref } from "vue";
  import { AiModelConfigDesc } from "./aiModelConfig.data";

  defineOptions({ name: "AiModelConfigViewModal" });
  const aiModelConfigData = ref();
  const aiModelConfigDesc = new AiModelConfigDesc();
  const [registerModal, { setModalProps }] = useModalInner(async (data) => {
    setModalProps({
      confirmLoading: false,
      width: "800px",
      cancelText: "关闭",
      showOkBtn: false
    });
    aiModelConfigData.value = data.record;
  });
  const [registerDesc] = useDescription({
    labelWidth: 120,
    data: aiModelConfigData,
    schema: aiModelConfigDesc.viewSchema,
    column: 2
  });
</script>
