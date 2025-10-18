<!--
 @description: 流程图预览
 @author: mfish
 @date: 2025/10/17
-->
<template>
  <AImage
    :style="{ display: 'none' }"
    :preview="{
      visible: previewVisible,
      onVisibleChange: setPreviewVisible
    }"
    :src="fileImage"
  />
</template>
<script setup lang="ts">
  import { ref } from "vue";
  import { Image as AImage } from "ant-design-vue";

  import { queryImage } from "@/api/workflow/FlowProcess";

  const previewVisible = ref(false);
  const fileImage = ref("");
  const setPreviewVisible = (value: boolean): void => {
    previewVisible.value = value;
  };

  function showPreview(processInstanceId: string) {
    queryImage(processInstanceId).then((res) => {
      fileImage.value = res;
      previewVisible.value = true;
    });
  }

  defineExpose({ showPreview });
</script>
<style scoped lang="less"></style>
