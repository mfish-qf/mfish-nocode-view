<!--
 @description: 大屏预览
 @author: mfish
 @date: 2024/12/25
-->
<template>
  <ScreenPreview />
</template>
<script setup lang="ts">
  import { onBeforeMount } from "vue";
  import { ScreenPreview, useScreenEditStore } from "@mfish/nocode";
  import { useRoute } from "vue-router";

  const { params, query } = useRoute();
  const screenEditStore = useScreenEditStore();

  onBeforeMount(() => {
    screenEditStore.setId(params?.id as string);
    screenEditStore.setIsResource(query.isResource === "true");
    screenEditStore.setShareToken(query?.shareToken as string);
  });
</script>
<style scoped lang="less"></style>
