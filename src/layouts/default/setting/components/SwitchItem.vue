<template>
  <div :class="prefixCls">
    <span> {{ title }}</span>
    <ASwitch
      v-bind="getBindValue"
      @change="handleChange"
      :disabled="disabled"
      :checked-children="t('layout.setting.on')"
      :un-checked-children="t('layout.setting.off')"
    />
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent, PropType } from "vue";

  import { Switch } from "ant-design-vue";
  import { useDesign, useI18n } from "@mfish/core/hooks";
  import { baseHandler } from "../Handler";
  import { HandlerEnum } from "../Enum";

  export default defineComponent({
    name: "SwitchItem",
    components: { ASwitch: Switch },
    props: {
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
        type: Boolean
      }
    },
    setup(props) {
      const { prefixCls } = useDesign("setting-switch-item");
      const { t } = useI18n();

      const getBindValue = computed(() => {
        return props.def ? { checked: props.def } : {};
      });

      function handleChange(e: any) {
        props.event && baseHandler(props.event, e);
      }

      return {
        prefixCls,
        t,
        handleChange,
        getBindValue
      };
    }
  });
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-setting-switch-item";

  .@{prefix-cls} {
    display: flex;
    justify-content: space-between;
    margin: 16px 0;
  }
</style>
