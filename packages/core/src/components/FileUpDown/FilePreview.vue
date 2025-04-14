<!--
 @description: 文件预览组件
 @author: mfish
 @date: 2024/9/6
-->
<template>
  <AImage
    :width="200"
    :style="{ display: 'none' }"
    :preview="{
      visible: previewVisible,
      onVisibleChange: setPreviewVisible
    }"
    :src="fileUrl"
  />
</template>
<script setup lang="ts">
  import { ref } from "vue";
  import { imageUrl } from "@core/utils/file/FileUtils";
  import { getLocalFileUrl } from "@core/utils/file/FileUtils";
  import { Image as AImage } from "ant-design-vue";

  const fileUrl = ref("");
  const previewVisible = ref(false);
  const setPreviewVisible = (value): void => {
    previewVisible.value = value;
  };

  const show = async (file: { fileKey: string; fileType?: string }) => {
    fileUrl.value = imageUrl(getLocalFileUrl(file.fileKey));
    if (file.fileType === "image/jpeg" || file.fileType === "image/png") {
      setPreviewVisible(true);
    } else {
      window.open(fileUrl.value, "_blank");
    }
  };
  defineExpose({ show });
</script>
<style scoped lang="less"></style>
