<template>
  <div :class="prefixCls">
    <a-button type="primary" @click="handleCopy">
      <CopyOutlined class="mr-2" />
      {{ t("layout.setting.copyBtn") }}
    </a-button>
    <a-button color="error" @click="handleResetSetting">
      <RedoOutlined class="mr-2" />
      {{ t("common.resetText") }}
    </a-button>
  </div>
</template>
<script lang="ts" setup>
  import { unref } from "vue";
  import { CopyOutlined, RedoOutlined } from "@ant-design/icons-vue";
  import { useAppStore } from "@mfish/stores/modules";
  import { useDesign } from "@mfish/core";
  import { useI18n } from "@mfish/core/src/hooks/web/UseI18n";
  import { useMessage } from "@mfish/core/src/hooks/web/UseMessage";
  import { useCopyToClipboard } from "@mfish/core/src/hooks/web/UseCopyToClipboard";
  import defaultSetting from "@mfish/core/src/settings/ProjectSetting";
  import { changeAppConfig } from "../../../../../packages/core/src/logics/InitAppConfig";
  import { saveSysConfig } from "@/api/sys/SysConfig";

  const { prefixCls } = useDesign("setting-save");
  const { t } = useI18n();
  const { createSuccessModal, createMessage } = useMessage();
  const appStore = useAppStore();

  function handleCopy() {
    const { isSuccessRef } = useCopyToClipboard(JSON.stringify(unref(appStore.getProjectConfig), null, 2));
    unref(isSuccessRef) &&
      createSuccessModal({
        title: t("layout.setting.operatingTitle"),
        content: t("layout.setting.operatingContent")
      });
  }

  function handleResetSetting() {
    try {
      changeAppConfig(defaultSetting);
      saveSysConfig({ config: JSON.stringify(unref(appStore.getProjectConfig)), type: 0 }, false).then(() => {
        createMessage.success(t("layout.setting.resetSuccess"));
      });
    } catch (error: any) {
      createMessage.error(error);
    }
  }
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-setting-save";

  .@{prefix-cls} {
    display: flex;
    justify-content: space-evenly;
    button {
      display: flex;
      align-items: center;
    }
  }
</style>
