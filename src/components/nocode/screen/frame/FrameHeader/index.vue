<!--
 @description: 大屏头
 @author: mfish
 @date: 2024/10/8
-->
<template>
  <HeaderBar :class="prefixCls" :title="title" :left-actions="leftBarActions" :right-actions="rightBarActions">
    <template #leftButton>
      <span>
        <ATooltip
          placement="bottom"
          v-for="item in Object.keys(buttonChecked)"
          :key="item"
          :title="`${buttonChecked[item].value ? '关闭' : '打开'}${buttonChecked[item].name}`"
        >
          <ARadioButton
            :class="`${prefixCls}-radio-button`"
            :checked="buttonChecked[item].value"
            @mousedown="handleMouseDown(item)"
          >
            <IconFont :icon="`icon-mfish-${item}`" />
          </ARadioButton>
        </ATooltip>
      </span>
    </template>
    <template #leftActions>
      <slot name="leftActions"></slot>
    </template>
  </HeaderBar>
</template>
<script setup lang="ts">
  import { RadioButton as ARadioButton, Tooltip as ATooltip } from "ant-design-vue";
  import HeaderBar from "@/components/nocode/common/HeaderBar/HeaderBar.vue";
  import { computed, onMounted, reactive, ref, watch } from "vue";
  import { HeaderBarAction } from "@/components/nocode/common/HeaderBar/HeaderBarUtils";
  import { useDesign } from "@mfish/core";
  import { IconFont } from "@mfish/core/src/components/Icon";
  import { FrameShow, ScreenEventEnum } from "@mfish/nocode";
  import { useRootSetting } from "@mfish/core";
  import { screenEvent, useScreenLayoutStore, useScreenEditStore } from "@mfish/nocode";

  defineOptions({ name: "FrameHeader" });
  const emit = defineEmits(["saveScreen", "previewScreen", "shareScreen", "releaseScreen"]);
  const { prefixCls } = useDesign("frame-header");
  const color = useRootSetting().getThemeColor;
  const buttonChecked = reactive({
    [FrameShow.All]: { name: "全部", value: true },
    [FrameShow.Chart]: { name: "组件", value: true },
    [FrameShow.Layer]: { name: "图层", value: true },
    [FrameShow.Config]: { name: "配置", value: true }
  });
  const screenLayoutStore = useScreenLayoutStore();
  const screenEditStore = useScreenEditStore();
  const title = ref<string>("大屏配置");
  const setTitle = (t: string) => {
    title.value = `大屏配置${t ? `-${t}` : ""}`;
    document.title = title.value;
  };
  const screenId = computed(() => screenEditStore.getId);

  onMounted(() => {
    screenEvent.on(ScreenEventEnum.SCREEN_SAVE, screenSave);
    screenEvent.on(ScreenEventEnum.SCREEN_PREVIEW, screenPreview);
  });
  watch(
    () => screenEditStore.getCanvasConfig?.screenName,
    (val) => {
      if (val) {
        setTitle(val);
      } else {
        setTitle("");
      }
    },
    { immediate: true }
  );
  watch(
    () => screenLayoutStore.getConfigCollapsed,
    (val) => {
      buttonChecked[FrameShow.Config].value = !val;
      changeAll();
    }
  );
  watch(
    () => screenLayoutStore.getChartCollapsed,
    (val) => {
      buttonChecked[FrameShow.Chart].value = !val;
      changeAll();
    }
  );
  watch(
    () => screenLayoutStore.getLayerCollapsed,
    (val) => {
      buttonChecked[FrameShow.Layer].value = !val;
      changeAll();
    }
  );
  const changeAll = () => {
    if (
      buttonChecked[FrameShow.Chart].value &&
      buttonChecked[FrameShow.Layer].value &&
      buttonChecked[FrameShow.Config].value
    ) {
      buttonChecked[FrameShow.All].value = true;
      return;
    }
    if (
      !buttonChecked[FrameShow.Chart].value &&
      !buttonChecked[FrameShow.Layer].value &&
      !buttonChecked[FrameShow.Config].value
    ) {
      buttonChecked[FrameShow.All].value = false;
    }
  };
  const leftBarActions = ref<HeaderBarAction[]>([
    {
      showDivider: true,
      hideLabel: true,
      color,
      icon: "ant-design:undo-outlined",
      label: "撤回",
      tooltip: "撤回 (CTRL+Z)",
      click: () => {
        screenEditStore.undo();
      }
    },
    {
      icon: "ant-design:redo-outlined",
      hideLabel: true,
      label: "重做",
      color,
      tooltip: "重做 (CTRL+SHIFT+Z)",
      click: () => {
        screenEditStore.redo();
      }
    },
    {
      showDivider: true
    }
  ]);
  const isLoading = ref(false);
  const rightBarActions = ref<HeaderBarAction[]>([
    {
      color,
      icon: "ant-design:cloud-upload-outlined",
      label: "发布",
      tooltip: "发布",
      disabled: computed(() => !screenId.value),
      click: () => {
        screenRelease();
      }
    },
    {
      color,
      icon: "ant-design:share-alt-outlined",
      label: "分享",
      tooltip: "分享",
      disabled: computed(() => !screenId.value),
      click: () => {
        screenShare();
      }
    },

    {
      showDivider: true,
      color,
      icon: "ant-design:eye-outlined",
      label: "预览",
      tooltip: "预览（CTRL+P）",
      click: () => {
        screenPreview();
      }
    },
    {
      color,
      icon: "ant-design:save-outlined",
      label: "保存",
      tooltip: "保存 (CTRL+S)",
      isLoading,
      click: () => {
        screenSave();
      }
    }
  ]);

  function screenSave() {
    if (isLoading.value) return;
    isLoading.value = true;
    emit("saveScreen", (loading: boolean) => {
      isLoading.value = loading;
    });
  }
  function screenPreview() {
    screenEditStore.saveCache();
    emit("previewScreen");
  }
  function screenShare() {
    emit("shareScreen");
  }
  async function screenRelease() {
    emit("releaseScreen");
  }

  function handleMouseDown(e) {
    if (e) {
      buttonChecked[e].value = !buttonChecked[e].value;
      if (e === FrameShow.All) {
        frameChange(FrameShow.Chart, buttonChecked[e].value);
        frameChange(FrameShow.Layer, buttonChecked[e].value);
        frameChange(FrameShow.Config, buttonChecked[e].value);
      } else {
        frameChange(e, buttonChecked[e].value);
      }
    }
  }
  function frameChange(e: string, checked: boolean) {
    switch (e) {
      case FrameShow.Chart: {
        screenLayoutStore.setChartCollapsed(!checked);
        break;
      }
      case FrameShow.Layer: {
        screenLayoutStore.setLayerCollapsed(!checked);
        break;
      }
      case FrameShow.Config: {
        screenLayoutStore.setConfigCollapsed(!checked);
        break;
      }
    }
  }
</script>
<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-frame-header";
  [data-theme="dark"] {
    .@{prefix-cls} {
      &-radio-button {
        &:not(.ant-radio-button-wrapper-checked) {
          color: @screen-item-normal-color;
        }
        &:hover:not(.ant-radio-button-wrapper-checked) {
          color: @screen-item-normal-color-light;
        }
      }
    }
  }
  .@{prefix-cls} {
    &-radio-button {
      padding: 2px;
      padding-inline: 6px;
      padding-block: 0;
      border: 0 solid transparent;
      background-color: transparent !important;
      &:not(.ant-radio-button-wrapper-checked) {
        color: @screen-item-normal-color-light;
      }
      &:hover:not(.ant-radio-button-wrapper-checked) {
        color: @screen-item-normal-color;
      }
      &::before {
        background: transparent;
      }
    }
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover::before {
      background: transparent;
    }
  }
</style>
