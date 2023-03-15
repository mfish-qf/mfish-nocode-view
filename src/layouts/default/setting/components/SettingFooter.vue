<template>
  <div :class="prefixCls">
    <a-button type="primary" @click="handleSave">
      <SaveOutlined class="mr-2" />
      {{ t("layout.setting.saveBtn") }}
    </a-button>

    <a-button type="warning" @click="handleCopy">
      <CopyOutlined class="mr-2" />
      {{ t("layout.setting.copyBtn") }}
    </a-button>
    <a-button color="error" @click="handleResetSetting">
      <RedoOutlined class="mr-2" />
      {{ t("common.resetText") }}
    </a-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, unref } from "vue";
import { CopyOutlined, RedoOutlined, SaveOutlined } from "@ant-design/icons-vue";
import { useAppStore } from "/@/store/modules/App";
import { useDesign } from "/@/hooks/web/UseDesign";
import { useI18n } from "/@/hooks/web/UseI18n";
import { useMessage } from "/@/hooks/web/UseMessage";
import { useCopyToClipboard } from "/@/hooks/web/UseCopyToClipboard";
import defaultSetting from "/@/settings/ProjectSetting";
import { saveSysConfig } from "/@/api/sys/SysConfig";
import { changeAppConfig } from "/@/logics/InitAppConfig";

export default defineComponent({
  name: "SettingFooter",
  components: { SaveOutlined, CopyOutlined, RedoOutlined },
  setup() {
    const { prefixCls } = useDesign("setting-footer");
    const { t } = useI18n();
    const { createSuccessModal, createMessage } = useMessage();
    const appStore = useAppStore();

    function handleSave() {
      saveSysConfig({ config: JSON.stringify(unref(appStore.getProjectConfig)) }).then();
    }

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
        changeAppConfig(defaultSetting)
        createMessage.success(t("layout.setting.resetSuccess"));
      } catch (error: any) {
        createMessage.error(error);
      }
    }

    return {
      prefixCls,
      t,
      handleSave,
      handleCopy,
      handleResetSetting
    };
  }
});
</script>
<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-setting-footer';

.@{prefix-cls} {
  display: flex;
  justify-content: space-between;
}
</style>
