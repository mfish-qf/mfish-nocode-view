<template>
  <span :class="$attrs.class">
    <Icon :icon="icon" />
  </span>
</template>
<script lang="ts" setup>
  import { Icon } from "@mfish/core/src/components/Icon";

  defineProps({
    icon: String
  });
</script>
