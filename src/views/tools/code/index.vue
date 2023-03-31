<!--
 @description:代码生成
 @author: mfish
 @date: 2023/3/31 20:17
-->
<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <DBTree class="w-1/4 xl:w-1/5" :showIcon="true"/>
  </PageWrapper>
</template>

<script>
import { PageWrapper } from "/@/components/general/Page";
import DBTree from "./DBTree.vue";

export default {
  name: "codeBuild",
  components: { DBTree, PageWrapper }

};
</script>

<style scoped>

</style>