<!--
 @description:数据源
 @author: mfish
 @date: 2023/3/31 20:17
-->
<template>
  <PageWrapper content-full-height fixed-height content-class="flex" class="mt-3 ml-3 mr-3">
    <DataBaseManagement />
  </PageWrapper>
</template>

<script lang="ts" setup>
  import DataBaseManagement from "@/views/sys/database/DataBaseManagement.vue";
  import PageWrapper from "@/components/general/Page/src/PageWrapper.vue";

  defineOptions({ name: "DataBaseManagement" });
</script>
