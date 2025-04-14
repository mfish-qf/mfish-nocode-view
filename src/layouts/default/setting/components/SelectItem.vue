<template>
  <div :class="prefixCls">
    <span> {{ title }}</span>
    <ASelect
      v-bind="getBindValue"
      :class="`${prefixCls}-select`"
      @change="handleChange"
      :disabled="disabled"
      size="small"
      :options="options"
    />
  </div>
</template>
<script lang="ts" setup>
  import { PropType, computed } from "vue";
  import { Select as ASelect } from "ant-design-vue";
  import { useDesign } from "@mfish/core";
  import { baseHandler } from "../Handler";
  import { HandlerEnum } from "../Enum";

  const props = defineProps({
    event: {
      type: Number as PropType<HandlerEnum>
    },
    disabled: {
      type: Boolean
    },
    title: {
      type: String
    },
    def: {
      type: [String, Number] as PropType<string | number>
    },
    initValue: {
      type: [String, Number] as PropType<string | number>
    },
    options: {
      type: Array as PropType<any>,
      default: () => []
    }
  });
  const { prefixCls } = useDesign("setting-select-item");
  const getBindValue = computed(() => {
    return props.def ? { value: props.def, defaultValue: props.initValue || props.def } : {};
  });

  function handleChange(e: any) {
    props.event && baseHandler(props.event, e);
  }
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-setting-select-item";

  .@{prefix-cls} {
    display: flex;
    justify-content: space-between;
    margin: 16px 0;

    &-select {
      width: 126px;
    }
  }
</style>
