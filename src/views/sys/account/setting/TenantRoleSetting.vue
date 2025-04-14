<!--
 @description: 租户组织
 @author: mfish
 @date: 2023/6/21
-->
<template>
  <CollapseContainer title="租户角色" :can-expan="false">
    <RoleManagement :source="1" />
  </CollapseContainer>
</template>
<script lang="ts" setup>
  import { CollapseContainer } from "@mfish/core/src/components/Container";
  import RoleManagement from "../../role/index.vue";
</script>
