<script lang="ts">
  import { defineComponent, computed, unref } from "vue";
  import { FloatButton } from "ant-design-vue";
  import { useRootSetting } from "/@/hooks/setting/UseRootSetting";
  import { useHeaderSetting } from "/@/hooks/setting/UseHeaderSetting";
  import { useDesign } from "/@/hooks/web/UseDesign";
  import { SettingButtonPositionEnum } from "/@/enums/AppEnum";
  import { createAsyncComponent } from "/@/utils/factory/CreateAsyncComponent";

  export default defineComponent({
    name: "LayoutFeatures",
    components: {
      BackTop: FloatButton.BackTop,
      LayoutLockPage: createAsyncComponent(() => import("/@/views/sys/lock/index.vue")),
      SettingDrawer: createAsyncComponent(() => import("/@/layouts/default/setting/index.vue"))
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

<template>
  <LayoutLockPage />
  <BackTop v-if="getUseOpenBackTop" :target="getTarget" />
  <SettingDrawer v-if="getIsFixedSettingDrawer" :class="prefixCls" />
</template>

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
