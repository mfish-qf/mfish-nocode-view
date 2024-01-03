<!--
 @description: 面板分割
 @author: mfish
 @date: 2024/1/2
-->
<template>
  <NSplit :class="prefixCls" :resize-trigger-size="resizeTriggerSize" :direction="direction">
    <template #[item]="data" v-for="item in Object.keys($slots)">
      <slot :name="item" v-bind="data || {}"></slot>
    </template>
    <template #resize-trigger>
      <div class="resize-trigger">
        <div :class="direction === 'horizontal' ? 'vertical' : 'horizontal'">
          <div v-for="item in [1, 2, 3, 4, 5, 6, 7, 8]" :key="item" class="split-trigger-bar"></div>
        </div>
      </div>
    </template>
  </NSplit>
</template>
<script setup lang="ts">
  import { NSplit } from "naive-ui";
  import { useDesign } from "/@/hooks/web/UseDesign";

  const { prefixCls } = useDesign("split");
  defineProps({
    resizeTriggerSize: { type: Number, default: 6 },
    direction: { type: String as PropType<"horizontal" | "vertical">, default: "horizontal" }
  });
</script>
<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-split";
  [data-theme="dark"] {
    .@{prefix-cls} {
      .resize-trigger {
        background-color: #303030;
        border: 1px solid #303030;
        &:hover {
          box-shadow: 0 0 2px 0 rgb(255 255 255 / 15%);
        }
      }

      .vertical {
        .split-trigger-bar {
          background: #dcdee2;
        }
      }

      .horizontal {
        .split-trigger-bar {
          background: #dcdee2;
        }
      }
    }
  }

  .@{prefix-cls} {
    .resize-trigger {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f8f8f9;
      border: 1px solid #dcdee2;
      &:hover {
        box-shadow: 0 0 2px 0 rgb(28 36 56 / 15%);
      }
    }

    .vertical {
      left: 1px;
      top: 50%;
      height: 32px;
      transform: translateY(-50%);

      .split-trigger-bar {
        width: 4px;
        height: 1px;
        background: #17233d40;
        float: left;
        margin-top: 3px;
      }
    }

    .horizontal {
      left: 50%;
      top: 1px;
      width: 32px;
      transform: translate(-50%);

      .split-trigger-bar {
        height: 4px;
        width: 1px;
        background: #17233d40;
        float: left;
        margin-right: 3px;
      }
    }
  }
</style>
