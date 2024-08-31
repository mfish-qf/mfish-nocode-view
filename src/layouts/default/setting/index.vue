<template>
  <div :class="prefixCls" @click="openDrawer(true)">
    <Icon icon="ion:settings-outline" />
    <SettingDrawer @register="register" />
  </div>
</template>
<script lang="ts" setup>
  import SettingDrawer from "./SettingDrawer";
  import { Icon } from "@/components/general/Icon";
  import { useDrawer } from "@/components/general/Drawer";
  import { useDesign } from "@/hooks/web/UseDesign";
  defineOptions({ name: "SettingButton" });
  const [register, { openDrawer }] = useDrawer();
  const { prefixCls } = useDesign("theme-setting");
</script>
<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-theme-setting";

  .@{prefix-cls} {
    &:hover {
      animation: spin 1s linear forwards;
    }
    @keyframes spin {
      0%,
      100% {
        transform: rotate(0deg);
      }
      30% {
        transform: rotate(30deg);
      }
      60% {
        transform: rotate(-30deg);
      }
    }
  }
</style>
