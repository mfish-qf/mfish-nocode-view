<template>
  <div :class="getClass" :style="getDragBarStyle"></div>
</template>
<script lang="ts" setup>
  import { computed, unref } from "vue";

  import { useDesign } from "@/hooks/web/UseDesign";
  import { useMenuSetting } from "@/hooks/setting/UseMenuSetting";

  const props = defineProps({
    mobile: Boolean
  });
  const { getMiniWidthNumber, getCollapsed, getCanDrag } = useMenuSetting();

  const { prefixCls } = useDesign("drag-bar");
  const getDragBarStyle = computed(() => {
    if (unref(getCollapsed)) {
      return { left: `${unref(getMiniWidthNumber)}px` };
    }
    return {};
  });

  const getClass = computed(() => {
    return [
      prefixCls,
      {
        [`${prefixCls}--hide`]: !unref(getCanDrag) || props.mobile
      }
    ];
  });
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-drag-bar";

  .@{prefix-cls} {
    position: absolute;
    top: 0;
    right: -2px;
    z-index: @side-drag-z-index;
    width: 2px;
    height: 100%;
    cursor: col-resize;
    border-top: none;
    border-bottom: none;

    &--hide {
      display: none;
    }

    &:hover {
      background-color: @button-primary-color;
      box-shadow: 0 0 4px 0 rgb(28 36 56 / 15%);
    }
  }
</style>
