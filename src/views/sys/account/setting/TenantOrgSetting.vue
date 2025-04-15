<!--
 @description: 租户组织
 @author: mfish
 @date: 2023/6/21
-->
<template>
  <CollapseContainer title="租户组织" :can-expan="false">
    <OrgManagement :source="1" />
  </CollapseContainer>
</template>
<script lang="ts" setup>
  import { CollapseContainer } from "@mfish/core/components/Container";
  import OrgManagement from "../../org/index.vue";
</script>
