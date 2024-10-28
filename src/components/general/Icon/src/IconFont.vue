<!--
 @description: iconfont
 @author: mfish
 @date: 2023/8/10
-->
<template>
  <svg :class="prefixCls" :style="getStyle" aria-hidden="true">
    <use :xlink:href="`#${icon}`" />
  </svg>
</template>
<script setup lang="ts">
  import { useDesign } from "@/hooks/web/UseDesign";
  import { computed } from "vue";

  const props = defineProps({
    icon: { type: String },
    color: { type: String },
    size: {
      type: [Number, String],
      default: 16
    }
  });
  const { prefixCls } = useDesign("icon-font");
  const getStyle = computed(() => {
    const { size, color } = props;
    let s = `${size}`;
    s = `${s.replace("px", "")}px`;
    return {
      color,
      width: s,
      height: s
    };
  });
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
