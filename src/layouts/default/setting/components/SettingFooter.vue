<template>
  <div :class="prefixCls">
    <a-button type="primary" block @click="handleCopy">
      <CopyOutlined class="mr-2" />
      {{ t("layout.setting.copyBtn") }}
    </a-button>

    <a-button color="warning" block @click="handleResetSetting" class="my-3">
      <RedoOutlined class="mr-2" />
      {{ t("common.resetText") }}
    </a-button>

    <a-button color="error" block @click="handleClearAndRedo">
      <RedoOutlined class="mr-2" />
      {{ t("layout.setting.clearBtn") }}
    </a-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, unref } from "vue";
import { CopyOutlined, RedoOutlined } from "@ant-design/icons-vue";
import { useAppStore } from "/@/store/modules/App";
import { usePermissionStore } from "/@/store/modules/Permission";
import { useMultipleTabStore } from "/@/store/modules/MultipleTab";
import { useUserStore } from "/@/store/modules/User";
import { useDesign } from "/@/hooks/web/UseDesign";
import { useI18n } from "/@/hooks/web/UseI18n";
import { useMessage } from "/@/hooks/web/UseMessage";
import { useCopyToClipboard } from "/@/hooks/web/UseCopyToClipboard";
import { updateColorWeak } from "/@/logics/theme/UpdateColorWeak";
import { updateGrayMode } from "/@/logics/theme/UpdateGrayMode";
import defaultSetting from "/@/settings/ProjectSetting";

export default defineComponent({
  name: "SettingFooter",
  components: { CopyOutlined, RedoOutlined },
  setup() {
    const permissionStore = usePermissionStore();
    const { prefixCls } = useDesign("setting-footer");
    const { t } = useI18n();
    const { createSuccessModal, createMessage } = useMessage();
    const tabStore = useMultipleTabStore();
    const userStore = useUserStore();
    const appStore = useAppStore();

    function handleCopy() {
      const { isSuccessRef } = useCopyToClipboard(
        JSON.stringify(unref(appStore.getProjectConfig), null, 2)
      );
      unref(isSuccessRef) &&
      createSuccessModal({
        title: t("layout.setting.operatingTitle"),
        content: t("layout.setting.operatingContent")
      });
    }

    function handleResetSetting() {
      try {
        appStore.setProjectConfig(defaultSetting);
        const { colorWeak, grayMode } = defaultSetting;
        // updateTheme(themeColor);
        updateColorWeak(colorWeak);
        updateGrayMode(grayMode);
        createMessage.success(t("layout.setting.resetSuccess"));
      } catch (error: any) {
        createMessage.error(error);
      }
    }

    function handleClearAndRedo() {
      localStorage.clear();
      appStore.resetAllState();
      permissionStore.resetState();
      tabStore.resetState();
      userStore.resetState();
      location.reload();
    }

    return {
      prefixCls,
      t,
      handleCopy,
      handleResetSetting,
      handleClearAndRedo
    };
  }
});
</script>
<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-setting-footer';

.@{prefix-cls} {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
