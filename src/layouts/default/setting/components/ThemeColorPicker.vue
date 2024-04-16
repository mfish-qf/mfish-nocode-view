<template>
  <div :class="prefixCls">
    <template v-for="color in colorList || []" :key="color">
      <span
        @click="handleClick(color)"
        :class="[
          `${prefixCls}__item`,
          {
            [`${prefixCls}__item--active`]: def === color
          }
        ]"
        :style="{ background: color }"
      >
        <CheckOutlined />
      </span>
    </template>
  </div>
</template>
<script lang="ts" setup>
  import { PropType } from "vue";
  import { CheckOutlined } from "@ant-design/icons-vue";
  import { useDesign } from "/@/hooks/web/UseDesign";
  import { baseHandler } from "../Handler";
  import { HandlerEnum } from "../Enum";

  const { prefixCls } = useDesign("setting-theme-picker");

  const props = defineProps({
    colorList: {
      type: Array as PropType<string[]>,
      default: () => []
    },
    event: {
      type: Number as PropType<HandlerEnum>
    },
    def: {
      type: String
    }
  });
  function handleClick(color: string) {
    props.event && baseHandler(props.event, color);
  }
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-setting-theme-picker";

  .@{prefix-cls} {
    display: flex;
    flex-wrap: wrap;
    margin: 16px 0;
    justify-content: space-around;

    &__item {
      width: 20px;
      height: 20px;
      cursor: pointer;
      border: 1px solid #ddd;
      border-radius: 2px;

      svg {
        display: none;
      }

      &--active {
        border: 1px solid @button-primary-hover-color;

        svg {
          display: inline-block;
          margin: 3px 3px 3px 3px;
          font-size: 12px;
          fill: @white !important;
        }
      }
    }
  }
</style>
