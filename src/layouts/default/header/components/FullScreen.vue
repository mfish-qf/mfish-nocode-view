<template>
  <Tooltip :title="getTitle" placement="bottom" :mouse-enter-delay="0.5">
    <span @click="toggle">
      <FullscreenOutlined :class="prefixCls" v-if="!isFullscreen" />
      <FullscreenExitOutlined :class="prefixCls" v-else />
    </span>
  </Tooltip>
</template>
<script lang="ts" setup>
  import { computed, unref } from "vue";
  import { Tooltip } from "ant-design-vue";
  import { useI18n } from "@mfish/core/src/hooks/web/UseI18n";
  import { useFullscreen } from "@vueuse/core";
  import { FullscreenExitOutlined, FullscreenOutlined } from "@ant-design/icons-vue";
  import { useDesign } from "@mfish/core";

  const { t } = useI18n();
  const { toggle, isFullscreen } = useFullscreen();
  // 重新检查全屏状态
  // @ts-ignore
  isFullscreen.value = !!(
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  );
  const getTitle = computed(() => {
    return unref(isFullscreen) ? t("layout.header.tooltipExitFull") : t("layout.header.tooltipEntryFull");
  });
  const { prefixCls } = useDesign("full-screen");
</script>
<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-full-screen";

  .@{prefix-cls} {
    transition: all 0.2s ease-in;
    &:hover {
      transform: scale(1.2);
    }
  }
</style>
