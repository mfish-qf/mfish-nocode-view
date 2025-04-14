<!--
 @description: 文件超链接列表
 @author: mfish
 @date: 2024/9/6
-->
<template>
  <div :class="prefixCls">
    <a target="_blank" v-for="(item, index) in files" :key="index" @click="clickFile(item)">
      {{ item?.fileName }}
    </a>
    <FilePreview ref="filePreviewRef" />
  </div>
</template>
<script setup lang="ts">
  import { ref, watch } from "vue";
  import { getSysFileByKey } from "@core/api/storage/SysFile";
  import { useDesign } from "@core/index";
  import { FilePreview } from "@core/components/FileUpDown";
  import { SysFile } from "@core/api/storage/model/SysFileModel";

  export interface FileHrefModel {
    fileKey: string;
    fileName: string;
    fileType?: string;
  }
  const props = defineProps({
    keys: { type: Array<string>, default: [] }
  });
  const files = ref<FileHrefModel[]>([]);
  const { prefixCls } = useDesign("file-href");
  const filePreviewRef = ref();
  watch(
    () => props.keys,
    (newKeys) => {
      if (newKeys) {
        const newFiles: Promise<SysFile>[] = [];
        newKeys.forEach((key) => {
          newFiles.push(getSysFileByKey(key));
        });
        Promise.all(newFiles).then((res) => {
          files.value = [];
          res.forEach((item) => {
            files.value.push({ fileKey: item.fileKey, fileName: item.fileName, fileType: item.fileType });
          });
        });
      } else {
        files.value = [];
      }
    },
    {
      immediate: true
    }
  );

  function clickFile(file) {
    filePreviewRef.value?.show(file);
  }
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-file-href";
  .@{prefix-cls} {
    display: flex;
    flex-direction: column;
  }
</style>
