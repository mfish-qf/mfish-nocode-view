<!--
 @description: 租户组织
 @author: mfish
 @date: 2023/6/21
-->
<template>
  <CollapseContainer title="租户组织" :canExpan="false">
    <OrgManagement :source="props.source" />
  </CollapseContainer>
</template>
<script lang="ts" setup>
  import { CollapseContainer } from "/@/components/general/Container";
  import OrgManagement from "../../org/index.vue";
  const props = defineProps({
    source: { type: Number, default: null }
  });
</script>
