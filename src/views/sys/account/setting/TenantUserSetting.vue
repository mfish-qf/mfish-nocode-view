<!--
 @description: 租户人员管理
 @author: mfish
 @date: 2023/6/28
-->
<template>
  <CollapseContainer title="租户人员" :canExpan="false">
    <AccountManagement :source="1" />
  </CollapseContainer>
</template>
<script setup lang="ts">
  import { CollapseContainer } from "/@/components/general/Container";
  import AccountManagement from "/@/views/sys/account/index.vue";
</script>
<style scoped lang="less"></style>
