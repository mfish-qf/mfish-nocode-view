<!--
 @description: 头部动作按钮
 @author: mfish
 @date: 2024/10/9
-->
<template>
  <div :class="prefixCls">
    <template v-for="item in actions" :key="item.label">
      <Divider type="vertical" v-if="item.showDivider" />
      <ATooltip :title="item.tooltip" v-if="item.label || item.icon">
        <div :class="`${prefixCls}-action`" @click="(e) => (item.disabled ? '' : item.click && item.click(e))">
          <LoadingOutlined v-if="item.isLoading" :style="{ color: item.color }" />
          <Icon v-if="!item.isLoading && item.icon" :icon="item.icon" :color="item.disabled ? '#999' : item.color" />
          <span
            :class="`${prefixCls}-action-label`"
            v-if="!item.hideLabel"
            :style="`color:${item.disabled ? '#999' : item.color};`"
          >
            {{ item.label }}
          </span>
        </div>
      </ATooltip>
    </template>
  </div>
</template>
<script setup lang="ts">
  import { Icon } from "@mfish/core/components/Icon";
  import { Divider, Tooltip as ATooltip } from "ant-design-vue";
  import { LoadingOutlined } from "@ant-design/icons-vue";
  import { PropType } from "vue";
  import { HeaderBarAction } from "@/components/nocode/common/HeaderBar/HeaderBarUtils";
  import { useDesign } from "@mfish/core/hooks";

  defineProps({
    actions: { type: Object as PropType<HeaderBarAction[]> }
  });
  const { prefixCls } = useDesign("header-actions");
</script>
<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-header-actions";
  [data-theme="dark"] {
    .@{prefix-cls} {
      .ant-divider {
        background-color: @trigger-dark-bg-color;
      }
    }
  }

  .@{prefix-cls} {
    display: flex;
    align-items: center;

    &-action {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 28px;
      border-radius: 14px;
      margin: 1px;
      padding: 6px;
      font-size: 14px;
      color: @header-color;
      cursor: pointer;

      &:hover {
        background-color: @header-bg-hover-color;
      }

      &-label {
        margin-left: 2px;
      }
    }

    .ant-divider {
      height: 16px;
      background-color: @border-color-base;
    }
  }
</style>
