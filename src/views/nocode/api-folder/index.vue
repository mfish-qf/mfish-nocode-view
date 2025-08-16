<!--
 @description: API目录
 @author: mfish
 @date: 2023-07-18
 @version: V2.1.0
-->
<template>
  <PageWrapper content-full-height fixed-height class="mt-3 ml-3 mr-3">
    <ApiList />
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { PageWrapper } from "@/components/general/Page";
  import ApiList from "./ApiList.vue";

  defineOptions({ name: "ApiFolderManagement" });
</script>
<style lang="less" scoped></style>
