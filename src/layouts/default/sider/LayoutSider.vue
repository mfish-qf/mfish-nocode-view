<template>
  <div v-if="getMenuFixed && !getIsMobile" :style="getHiddenDomStyle" v-show="showClassSideBarRef"></div>
  <Layout.Sider
    v-show="showClassSideBarRef"
    ref="sideRef"
    :breakpoint="getTrigger === TriggerEnum.FOOTER ? 'md' : 'lg'"
    collapsible
    :class="getSiderClass"
    :width="getMenuWidth"
    :collapsed="getCollapsed"
    :collapsed-width="getCollapsedWidth"
    :theme="getMenuTheme"
    v-bind="getTriggerAttr"
    :trigger="null"
    @breakpoint="onBreakpointChange"
  >
    <LayoutMenu :theme="getMenuTheme" :menu-mode="getMode" :split-type="getSplitType" />
    <DragBar ref="dragBarRef" />
  </Layout.Sider>
</template>
<script lang="ts" setup>
  import { computed, CSSProperties, ref, unref } from "vue";
  import { Layout } from "ant-design-vue";
  import LayoutMenu from "../menu/index.vue";
  import { MenuModeEnum, MenuSplitTyeEnum, TriggerEnum } from "@mfish/core/enums";
  import { useDesign, useMenuSetting } from "@mfish/core/hooks";
  import { useDragLine, useSiderEvent, useTrigger } from "./UseLayoutSider";
  import { useAppInject } from "@/hooks/UseAppInject";
  import DragBar from "./DragBar.vue";

  defineOptions({ name: "LayoutSideBar" });

  const dragBarRef = ref(null);
  const sideRef = ref(null);

  const {
    getCollapsed,
    getMenuWidth,
    getSplit,
    getMenuTheme,
    getRealWidth,
    getMenuHidden,
    getMenuFixed,
    getIsMixMode,
    getTrigger
  } = useMenuSetting();

  const { prefixCls } = useDesign("layout-sideBar");

  const { getIsMobile } = useAppInject();

  const { getTriggerAttr } = useTrigger(getIsMobile);

  useDragLine(sideRef, dragBarRef);

  const { getCollapsedWidth, onBreakpointChange } = useSiderEvent();

  const getMode = computed(() => {
    return unref(getSplit) ? MenuModeEnum.INLINE : null;
  });

  const getSplitType = computed(() => {
    return unref(getSplit) ? MenuSplitTyeEnum.LEFT : MenuSplitTyeEnum.NONE;
  });

  const showClassSideBarRef = computed(() => {
    return unref(getSplit) ? !unref(getMenuHidden) : true;
  });

  const getSiderClass = computed(() => {
    return [
      prefixCls,
      {
        [`${prefixCls}--fixed`]: unref(getMenuFixed),
        [`${prefixCls}--mix`]: unref(getIsMixMode) && !unref(getIsMobile)
      }
    ];
  });

  const getHiddenDomStyle = computed((): CSSProperties => {
    const width = `${unref(getRealWidth)}px`;
    return {
      width,
      overflow: "hidden",
      flex: `0 0 ${width}`,
      maxWidth: width,
      minWidth: width,
      transition: "all 0.3s"
    };
  });
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-layout-sideBar";

  .@{prefix-cls} {
    z-index: @layout-sider-fixed-z-index;

    &--fixed {
      position: fixed !important;
      top: 0;
      left: 0;
      height: 100%;
    }

    &--mix {
      top: @header-height;
      height: calc(100% - @header-height);
    }

    &.ant-layout-sider {
      background: @sider-bg-color;

      .ant-layout-sider-zero-width-trigger {
        background: @sider-bg-color;
        color: @main-color;
      }
    }

    .ant-layout-sider-zero-width-trigger {
      top: 40%;
      z-index: 10;
    }
  }
</style>
