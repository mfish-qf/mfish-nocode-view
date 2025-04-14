<template>
  <Tooltip placement="top">
    <template #title>
      <span>{{ t("common.redo") }}</span>
    </template>
    <RedoOutlined @click="redo" />
  </Tooltip>
</template>
<script lang="ts" setup>
  import { Tooltip } from "ant-design-vue";
  import { RedoOutlined } from "@ant-design/icons-vue";
  import { useI18n } from "@core/hooks/web/UseI18n";
  import { useTableContext } from "../../hooks/UseTableContext";

  defineOptions({ name: "RedoSetting" });

  const table = useTableContext();
  const { t } = useI18n();

  function redo() {
    table.reload();
  }
</script>
