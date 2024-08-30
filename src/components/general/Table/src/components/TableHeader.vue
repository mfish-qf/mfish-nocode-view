<template>
  <div style="width: 100%">
    <div v-if="$slots.headerTop" style="margin: 5px">
      <slot name="headerTop"></slot>
    </div>
    <div v-if="showSelectionBar" style="margin: 5px">
      <TableSelectionBar :clear-selected-row-keys="props.clearSelectedRowKeys!" :count="props.count" />
    </div>
    <div class="flex items-center">
      <slot name="tableTitle" v-if="$slots.tableTitle"></slot>
      <TableTitle :help-message="titleHelpMessage" :title="title" v-if="!$slots.tableTitle && title" />
      <div :class="`${prefixCls}__toolbar`">
        <slot name="toolbar"></slot>
        <Divider type="vertical" v-if="$slots.toolbar && showTableSetting" />
        <TableSettingComponent :setting="tableSetting" v-if="showTableSetting" @columns-change="handleColumnChange" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import type { TableSetting, ColumnChangeParam, TableActionType } from "../types/Table";
  import type { PropType } from "vue";
  import { Divider } from "ant-design-vue";
  import TableSettingComponent from "./settings/index.vue";
  import TableTitle from "./TableTitle.vue";
  import { useDesign } from "@/hooks/web/UseDesign";
  import TableSelectionBar from "./TableSelectionBar.vue";

  defineOptions({ name: "BasicTableHeader" });

  const props = defineProps({
    title: {
      type: [Function, String] as PropType<string | ((data) => string)>
    },
    tableSetting: {
      type: Object as PropType<TableSetting>
    },
    showTableSetting: {
      type: Boolean
    },
    titleHelpMessage: {
      type: [String, Array] as PropType<string | string[]>,
      default: ""
    },
    clearSelectedRowKeys: {
      type: Function as PropType<TableActionType["clearSelectedRowKeys"]>
    },
    count: {
      type: Number,
      default: 0
    },
    showSelectionBar: {
      type: Boolean,
      default: false
    }
  });

  const emit = defineEmits(["columnsChange"]);
  const { prefixCls } = useDesign("basic-table-header");
  function handleColumnChange(data: ColumnChangeParam[]) {
    emit("columnsChange", data);
  }
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-basic-table-header";

  .@{prefix-cls} {
    &__toolbar {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      > * {
        margin-right: 8px;
      }
    }
  }
</style>
