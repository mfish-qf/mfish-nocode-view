<!--
 @description: 文件超链接列表
 @author: mfish
 @date: 2024/9/6
-->
<template>
  <div :class="prefixCls">
    <a target="_blank" v-for="(item, index) in files.keys()" :key="index" @click="clickFile(item)">
      {{ files.get(item)?.fileName }}
    </a>
    <FilePreview ref="filePreviewRef" />
  </div>
</template>
<script setup lang="ts">
  import { ref, unref, watch } from "vue";
  import { getSysFileByKey } from "@/api/storage/SysFile";
  import { useDesign } from "@/hooks/web/UseDesign";
  import FilePreview from "@/components/general/FileUpDown/FilePreview.vue";

  export interface FileHrefModel {
    fileKey: string;
    fileName: string;
    fileType?: string;
  }
  const props = defineProps({
    keys: { type: Array<String>, default: [] }
  });
  const files = ref<Map<string, FileHrefModel>>(new Map());
  const { prefixCls } = useDesign("file-href");
  const filePreviewRef = ref();
  watch(
    () => props.keys,
    (newKeys) => {
      files.value.clear();
      if (newKeys) {
        newKeys?.forEach(async (key) => {
          const res = await getSysFileByKey(key);
          files.value.set(key, { fileKey: res.fileKey, fileName: res.fileName, fileType: res.fileType });
        });
      }
    },
    {
      immediate: true
    }
  );

  function clickFile(key) {
    filePreviewRef.value?.show(unref(files).get(key));
  }
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-file-href";
  .@{prefix-cls} {
    display: flex;
    flex-direction: column;
  }
</style>
