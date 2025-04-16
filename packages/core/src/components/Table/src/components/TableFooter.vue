<template>
  <ATable
    v-if="!!props.summaryFunc || props.summaryData"
    :show-header="false"
    :bordered="false"
    :pagination="false"
    :data-source="getDataSource"
    :row-key="props.rowKey"
    :columns="getColumns"
    tableLayout="fixed"
    :scroll="props.scroll"
  />
</template>
<script lang="ts" setup>
  import { computed, toRaw, unref } from "vue";
  import { Table as ATable } from "ant-design-vue";
  import { cloneDeep } from "lodash-es";
  import { isFunction } from "@core/utils/Is";
  import type { BasicColumn, BasicTableProps } from "../types/Table";
  import { INDEX_COLUMN_FLAG } from "../Const";
  import { useTableContext } from "../hooks/UseTableContext";
  import { ColumnType } from "ant-design-vue/es/table/interface";
  import { Fn, Recordable } from "@mfish/types";
  import { parseRowKey } from "@core/components/Table/src/Helper";

  defineOptions({ name: "BasicTableFooter" });

  const props = withDefaults(
    defineProps<{
      summaryFunc?: Fn | null;
      summaryData?: Recordable[] | null;
      scroll?: BasicTableProps["scroll"];
      rowKey?: BasicTableProps["rowKey"];
    }>(),
    {
      summaryFunc: null,
      summaryData: null,
      rowKey: ""
    }
  );

  const SUMMARY_ROW_KEY = "_row";
  const SUMMARY_INDEX_KEY = "_index";
  const table = useTableContext();

  const getDataSource = computed((): Recordable[] => {
    if (props.summaryData?.length) {
      props.summaryData.forEach((item, i) => {
        item[parseRowKey(props.rowKey, item)] = `${i}`;
      });
      return props.summaryData;
    }
    if (!isFunction(props.summaryFunc)) {
      return [];
    }
    let dataSource = toRaw(unref(table.getDataSource()));
    dataSource = props.summaryFunc(dataSource);
    dataSource.forEach((item, i) => {
      item[parseRowKey(props.rowKey, item)] = `${i}`;
    });
    return dataSource;
  });

  const getColumns = computed(() => {
    const dataSource = unref(getDataSource);
    const columns: BasicColumn[] = cloneDeep(table.getColumns());
    const index = columns.findIndex((item) => item.flag === INDEX_COLUMN_FLAG);
    const hasRowSummary = dataSource.some((item) => Reflect.has(item, SUMMARY_ROW_KEY));
    const hasIndexSummary = dataSource.some((item) => Reflect.has(item, SUMMARY_INDEX_KEY));

    if (index !== -1) {
      if (hasIndexSummary) {
        columns[index].customRender = ({ record }) => record[SUMMARY_INDEX_KEY];
        columns[index].ellipsis = false;
      } else {
        Reflect.deleteProperty(columns[index], "customRender");
      }
    }

    if (table.getRowSelection() && hasRowSummary) {
      const isFixed = columns.some((col) => col.fixed === "left");
      columns.unshift({
        width: 60,
        title: "selection",
        key: "selectionKey",
        align: "center",
        ...(isFixed ? { fixed: "left" } : {}),
        customRender: ({ record }) => record[SUMMARY_ROW_KEY]
      });
    }
    return columns as unknown as ColumnType[];
  });
</script>
