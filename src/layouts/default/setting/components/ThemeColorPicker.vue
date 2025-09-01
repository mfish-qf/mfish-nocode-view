<template>
  <div :class="prefixCls">
    <div style="width: 100%; margin-bottom: 10px">
      <MfishColorPicker
        :hide-cancel="true"
        :type="pickerType"
        :value="background"
        @input-change="changeColor"
        @confirm-change="confirmColor"
      />
    </div>
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
  import { PropType, ref } from "vue";
  import { CheckOutlined } from "@ant-design/icons-vue";
  import { useDesign } from "@mfish/core/hooks";
  import { baseHandler } from "../Handler";
  import { HandlerEnum } from "../Enum";
  import { MfishColorPicker } from "@mfish/nocode";

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
    },
    pickerType: {
      type: Number,
      default: 3
    }
  });
  const { prefixCls } = useDesign("setting-theme-picker");
  const background = ref<string>(props.def || "");

  function handleClick(color: string) {
    background.value = color;
    confirmColor(undefined, color);
  }

  function changeColor(rgba?: string, hex?: string) {
    props.event && baseHandler(props.event, hex || rgba || "", true);
  }

  function confirmColor(rgba?: string, hex?: string) {
    background.value = hex || rgba || "";
    props.event && baseHandler(props.event, hex || rgba || "");
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
      margin-bottom: 1px;
      cursor: pointer;
      border: 1px solid @border-color-base;
      border-radius: 6px;
      transition: all 0.2s ease-in;

      svg {
        display: none;
      }

      &:hover {
        transform: scale(1.05);
        border: 1px solid @button-primary-hover-color;
      }

      &--active {
        border: 1px solid @button-primary-hover-color;

        svg {
          display: inline-block;
          margin: 3px 3px 3px 3px;
          font-size: 12px;
          fill: darken(@white, 25%) !important;
        }
      }
    }
  }
</style>
