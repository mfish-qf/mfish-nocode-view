<!--
 @description: 文件超链接列表
 @author: mfish
 @date: 2024/9/6
-->
<template>
  <div :class="prefixCls">
    <a target="_blank" v-for="(item, index) in files" :key="index" @click="clickFile(item)">
      {{ files[index]?.fileName }}
    </a>
    <FilePreview ref="filePreviewRef" />
  </div>
</template>
<script setup lang="ts">
  import { onMounted, ref, Ref } from "vue";
  import { getSysFileByKey } from "@/api/storage/SysFile";
  import { useDesign } from "@/hooks/web/UseDesign";
  import FilePreview from "@/components/general/FileUpDown/FilePreview.vue";

  export interface FileHrefModel {
    fileKey: string;
    fileName: Ref<string>;
    fileType?: string;
  }
  const props = defineProps({
    files: { type: Array<FileHrefModel>, default: [] }
  });
  const { files } = props;
  const { prefixCls } = useDesign("file-href");
  const filePreviewRef = ref();
  onMounted(() => {
    props.files.forEach((file) => {
      getSysFileByKey(file.fileKey).then((res) => {
        file.fileName.value = res.fileName;
        file.fileType = res.fileType;
      });
    });
  });

  function clickFile(file) {
    filePreviewRef.value?.show({ ...file, type: file.fileType });
  }
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-file-href";
  .@{prefix-cls} {
    display: flex;
    flex-direction: column;
  }
</style>
