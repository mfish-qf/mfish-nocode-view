<template>
  <AAlert type="info" show-icon :class="[prefixCls]">
    <template #message>
      <span v-if="props.count > 0">
        {{ t("component.table.selectionBarTips", { count: props.count }) }}
      </span>
      <span v-else>
        {{ t("component.table.selectionBarEmpty") }}
      </span>
      <a-button type="link" @click="clearSelectedRowKeys" size="small" v-show="props.count > 0">
        {{ t("component.table.selectionBarClear") }}
      </a-button>
    </template>
  </AAlert>
</template>

<script lang="ts" setup>
  import { useI18n } from "@/hooks/web/UseI18n";
  import { useDesign } from "@/hooks/web/UseDesign";
  import type { TableActionType } from "../types/Table";
  import { Alert as AAlert } from "ant-design-vue";
  defineOptions({
    name: "TableSelectBar"
  });
  const props = withDefaults(
    defineProps<{
      count?: number;
      clearSelectedRowKeys: TableActionType["clearSelectedRowKeys"];
    }>(),
    {
      count: () => 0
    }
  );
  const { t } = useI18n();
  const { prefixCls } = useDesign("table-select-bar");
</script>

<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-table-select-bar";

  .@{prefix-cls} {
    flex-grow: 1;
    padding: 2px 8px;

    :deep(.ant-btn-link) {
      height: 20px;
      line-height: 20px;
    }
  }
</style>
