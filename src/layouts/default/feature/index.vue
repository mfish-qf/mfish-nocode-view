<template>
  <LayoutLockPage />
  <BackTop v-if="getUseOpenBackTop" :target="getTarget" />
  <SettingDrawer v-if="getIsFixedSettingDrawer" :class="prefixCls" />
</template>

<script lang="ts">
  import { computed, defineComponent, unref } from "vue";
  import { FloatButton } from "ant-design-vue";
  import { useDesign, useHeaderSetting, useRootSetting } from "@mfish/core/hooks";
  import { SettingButtonPositionEnum } from "@mfish/core/enums";
  import { createAsyncComponent } from "@mfish/core/utils/factory/CreateAsyncComponent";

  export default defineComponent({
    name: "LayoutFeatures",
    components: {
      BackTop: FloatButton.BackTop,
      LayoutLockPage: createAsyncComponent(() => import("@/views/sys/lock/index.vue")),
      SettingDrawer: createAsyncComponent(() => import("@/layouts/default/setting/index.vue"))
    },
    setup() {
      const { getUseOpenBackTop, getShowSettingButton, getSettingButtonPosition, getFullContent } = useRootSetting();
      const { prefixCls } = useDesign("setting-drawer-feature");
      const { getShowHeader } = useHeaderSetting();

      const getIsFixedSettingDrawer = computed(() => {
        if (!unref(getShowSettingButton)) {
          return false;
        }
        const settingButtonPosition = unref(getSettingButtonPosition);

        if (settingButtonPosition === SettingButtonPositionEnum.AUTO) {
          return !unref(getShowHeader) || unref(getFullContent);
        }
        return settingButtonPosition === SettingButtonPositionEnum.FIXED;
      });

      return {
        getTarget: () => document.body,
        getUseOpenBackTop,
        getIsFixedSettingDrawer,
        prefixCls
      };
    }
  });
</script>

<style lang="less">
  @prefix-cls: ~"@{namespace}-setting-drawer-feature";

  .@{prefix-cls} {
    position: absolute;
    top: 45%;
    right: 0;
    z-index: 10;
    display: flex;
    padding: 10px;
    color: @white;
    cursor: pointer;
    background-color: @button-primary-color;
    border-radius: 6px 0 0 6px;
    justify-content: center;
    align-items: center;

    svg {
      width: 1em;
      height: 1em;
    }
  }
</style>
