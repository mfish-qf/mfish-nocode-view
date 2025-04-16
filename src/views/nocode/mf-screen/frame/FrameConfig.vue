<!--
 @description: 框架配置
 @author: mfish
 @date: 2025/4/14
-->
<template>
  <FrameConfig ref="frameConfigRef">
    <template #data-select>
      <ApiList :allow-check="true" @row-select="rowSelectHandle" />
    </template>
  </FrameConfig>
</template>
<script setup lang="ts">
  import { FrameConfig } from "@mfish/nocode";
  import ApiList from "@/views/nocode/api-folder/ApiList.vue";
  import { useTemplateRef } from "vue";

  const frameConfigRef = useTemplateRef("frameConfigRef");

  function rowSelectHandle(e: any) {
    frameConfigRef.value?.rowSelect(e);
  }
</script>
<style scoped lang="less"></style>
