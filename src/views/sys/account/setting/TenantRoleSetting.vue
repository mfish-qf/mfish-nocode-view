<!--
 @description: 租户组织
 @author: mfish
 @date: 2023/6/21
-->
<template>
  <CollapseContainer title="租户角色" :canExpan="false">
    <RoleManagement :source="props.source" />
  </CollapseContainer>
</template>
<script lang="ts" setup>
  import { CollapseContainer } from "/@/components/general/Container";
  import RoleManagement from "../../role/index.vue";
  const props = defineProps({
    source: { type: Number, default: null }
  });
</script>
