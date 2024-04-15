<template>
  <div :class="[prefixCls, getLayoutContentMode]" :loading="getOpenPageLoading && getPageLoading">
    <PageLayout />
  </div>
</template>
<script lang="ts" setup>
  import PageLayout from "/@/layouts/page/index.vue";
  import { useDesign } from "/@/hooks/web/UseDesign";
  import { useRootSetting } from "/@/hooks/setting/UseRootSetting";
  import { useTransitionSetting } from "/@/hooks/setting/UseTransitionSetting";
  import { useContentViewHeight } from "./UseContentViewHeight";
  defineOptions({ name: "LayoutContent" });
  const { prefixCls } = useDesign("layout-content");
  const { getOpenPageLoading } = useTransitionSetting();
  const { getLayoutContentMode, getPageLoading } = useRootSetting();

  useContentViewHeight();
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-layout-content";

  .@{prefix-cls} {
    position: relative;
    flex: 1 1 auto;
    min-height: 0;

    &.fixed {
      width: 1200px;
      margin: 0 auto;
    }

    &-loading {
      position: absolute;
      top: 200px;
      z-index: @page-loading-z-index;
    }
  }
</style>
