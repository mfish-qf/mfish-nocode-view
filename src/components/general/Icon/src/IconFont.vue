<!--
 @description: iconfont
 @author: mfish
 @date: 2023/8/10
-->
<template>
  <svg :class="prefixCls" :style="{ color }" aria-hidden="true">
    <use :xlink:href="`#${icon}`" />
  </svg>
</template>
<script setup lang="ts">
  import { useDesign } from "@/hooks/web/UseDesign";

  defineProps({
    icon: { type: String },
    color: { type: String }
  });
  const { prefixCls } = useDesign("icon-font");
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-icon-font";
  .@{prefix-cls} {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
