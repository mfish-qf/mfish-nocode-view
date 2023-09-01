<!--
 @description: iconfont
 @author: mfish
 @date: 2023/8/10
-->
<template>
  <svg class="icon" :style="{ color }" aria-hidden="true">
    <use :xlink:href="`#${icon}`" />
  </svg>
</template>
<script setup lang="ts">
  defineProps({
    icon: { type: String },
    color: { type: String }
  });
</script>
