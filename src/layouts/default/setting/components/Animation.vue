<!--
 @description: 过渡动画设置
 @author: mfish
 @date: 2024/8/20
-->
<template>
  <SwitchItem
    :title="t('layout.setting.switchAnimation')"
    :event="HandlerEnum.OPEN_ROUTE_TRANSITION"
    :def="getEnableTransition"
  />
  <div v-if="getEnableTransition" :class="prefixCls" class="flex flex-wrap justify-between gap-2">
    <div
      v-for="item in RouterTransitionEnum"
      :key="item"
      :class="{
        'card-box-active': item === getBasicTransition
      }"
      class="card-box p-2"
      @click="handleClick(item)"
    >
      <div :class="`${item}-slow`" class="box-content h-10 w-12"></div>
    </div>
  </div>
  <SwitchItem :title="t('layout.setting.progress')" :event="HandlerEnum.OPEN_PROGRESS" :def="getOpenNProgress" />
  <SwitchItem
    :title="t('layout.setting.switchLoading')"
    :event="HandlerEnum.OPEN_PAGE_LOADING"
    :def="getOpenPageLoading"
  />
</template>
<script setup lang="ts">
  import SwitchItem from "./SwitchItem.vue";
  import { useDesign, useI18n, useTransitionSetting } from "@mfish/core/hooks";
  import { HandlerEnum } from "@/layouts/default/setting/Enum";
  import { baseHandler } from "@/layouts/default/setting/Handler";
  import { RouterTransitionEnum } from "@mfish/core/enums";

  defineOptions({
    name: "PreferenceAnimation"
  });
  const { getOpenPageLoading, getBasicTransition, getEnableTransition, getOpenNProgress } = useTransitionSetting();
  const { t } = useI18n();

  function handleClick(value: string) {
    baseHandler(HandlerEnum.ROUTER_TRANSITION, value);
  }

  const { prefixCls } = useDesign("animation");
</script>
<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-animation";

  .@{prefix-cls} {
    .card-box {
      cursor: pointer;
      border: 1px solid @border-color-base;
      box-shadow: 0 1px 2.5px 0 rgb(0 0 0 / 18%);
      border-radius: 8px;

      .box-content {
        background: @header-bg-hover-color;
      }

      transition: all 0.2s ease-in;

      &:hover,
      &-active {
        transform: scale(1.05);
        border: 1px solid @button-primary-color;
      }
    }
  }
</style>
