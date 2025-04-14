<!--
 @description: 精简头部
 @author: mfish
 @date: 2023/9/1
-->
<template>
  <AHeader :class="getHeaderClass">
    <!-- left start -->
    <div :class="`${prefixCls}-left`">
      <!-- logo -->
      <AppLogo :class="`${prefixCls}-logo`" :theme="getHeaderTheme" :allow-go-home="false" :title-slot="true">
        <template #title v-if="!getIsMobile"> {{ title }}</template>
      </AppLogo>
      <div :class="`${prefixCls}-left-button`">
        <slot name="leftButton"></slot>
      </div>
      <HeaderActions :actions="leftActions" />
      <slot name="leftActions"></slot>
    </div>
    <!-- left end -->

    <div :class="`${prefixCls}-center`"> </div>

    <!-- action  -->
    <div :class="`${prefixCls}-action`">
      <HeaderActions :actions="rightActions" />
      <AppDarkModeToggle />
      <SettingDrawer :class="`${prefixCls}-action__item`" />
    </div>
  </AHeader>
</template>
<script lang="ts" setup>
  import { unref, computed, PropType } from "vue";
  import { propTypes } from "@mfish/core/src/utils/PropTypes";
  import { Layout } from "ant-design-vue";
  import { AppLogo } from "@/components/general/Application";
  import { useHeaderSetting } from "@mfish/core/src/hooks/setting/UseHeaderSetting";
  import { useAppInject } from "@/hooks/UseAppInject";
  import { useDesign } from "@mfish/core";
  import { HeaderBarAction } from "@/components/nocode/common/HeaderBar/HeaderBarUtils";
  import AppDarkModeToggle from "@/components/general/Application/src/AppDarkModeToggle.vue";
  import { createAsyncComponent } from "@mfish/core/src/utils/factory/CreateAsyncComponent";
  import HeaderActions from "@/components/nocode/common/HeaderBar/HeaderActions.vue";
  defineOptions({ name: "HeaderBar" });
  const props = defineProps({
    fixed: propTypes.bool,
    title: propTypes.string,
    leftActions: { type: Object as PropType<HeaderBarAction[]> },
    rightActions: { type: Object as PropType<HeaderBarAction[]> }
  });

  const AHeader = Layout.Header;

  const { prefixCls } = useDesign("header-bar");
  const { getHeaderTheme } = useHeaderSetting();
  const { getIsMobile } = useAppInject();
  const SettingDrawer = createAsyncComponent(() => import("@/layouts/default/setting/index.vue"), {
    loading: true
  });
  const getHeaderClass = computed(() => {
    const theme = unref(getHeaderTheme);
    return [
      prefixCls,
      {
        [`${prefixCls}--fixed`]: props.fixed,
        [`${prefixCls}--mobile`]: unref(getIsMobile),
        [`${prefixCls}--${theme}`]: theme
      }
    ];
  });
</script>
<style lang="less">
  @header-prefix-cls: ~"@{namespace}-header-bar";
  span.anticon:not(.app-iconify) {
    vertical-align: 0 !important;
  }
  .@{header-prefix-cls} {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: @white !important;
    background-color: @header-bg-color !important;
    z-index: 1;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
    user-select: none;

    &--mobile {
      .error-action,
      .notify-item,
      .fullscreen-item {
        display: none;
      }

      .@{header-prefix-cls}-action {
        padding-right: 2px;

        &__item {
          margin: 1px;
          padding: 6px;
        }
      }
    }

    &--fixed {
      position: fixed;
      top: 0;
      left: 0;
      z-index: @layout-header-fixed-z-index;
      width: 100%;
    }

    &-logo {
      height: @header-height;
      padding: 0 10px;
      font-size: 14px;
      border-radius: 8px;

      img {
        width: @logo-width;
        height: @logo-width;
        margin-right: 2px;
      }

      &:hover {
        background-color: @header-bg-hover-color;
      }
    }

    &-left {
      display: flex;
      height: 100%;
      align-items: center;
      &-button {
        margin: 0 10px 0 10px;
      }
    }

    &-center {
      height: 100%;
      min-width: 0;
      align-items: center;
    }

    &-action {
      display: flex;
      min-width: 120px;
      align-items: center;

      &__item {
        display: flex !important;
        justify-content: center;
        align-items: center;
        transition: background 0.5s ease;
        height: 28px;
        border-radius: 14px;
        margin: 2px;
        padding: 6px;
        font-size: 14px;
        color: @header-color;
        cursor: pointer;

        &:hover {
          background-color: @header-bg-hover-color;
        }
      }
    }

    &--dark {
      box-shadow: 0 0 6px 0 @trigger-dark-bg-color;
    }
  }
</style>
