import type { ComputedRef, Ref } from "vue";
import type { BasicTableProps } from "../types/Table";
import { computed, unref, ref, toRaw } from "vue";
import { ROW_KEY } from "../Const";

export function useTableExpand(
  propsRef: ComputedRef<BasicTableProps>,
  tableData: Ref<Recordable[]>,
  emit: EmitType
) {
  const expandedRowKeys = ref<string[]>([]);

  const getAutoCreateKey = computed(() => {
    return unref(propsRef).autoCreateKey && !unref(propsRef).rowKey;
  });

  const getRowKey = computed(() => {
    const { rowKey } = unref(propsRef);
    return unref(getAutoCreateKey) ? ROW_KEY : rowKey;
  });

  const getExpandOption = computed(() => {
    const { isTreeTable } = unref(propsRef);
    if (!isTreeTable) return {};

    return {
      expandedRowKeys: unref(expandedRowKeys),
      onExpandedRowsChange: (keys: string[]) => {
        expandedRowKeys.value = keys;
        emit("expanded-rows-change", keys);
      }
    };
  });

  function expandAll() {
    const keys = getAllKeys();
    expandedRowKeys.value = keys;
  }

  function expandRows(keys: string[]) {
    //使用行KEY展开指定的行
    const { isTreeTable } = unref(propsRef);
    if (!isTreeTable) return;
    expandedRowKeys.value = [...expandedRowKeys.value, ...keys];
  }

  function getAllKeys(data?: Recordable[]) {
    const keys: string[] = [];
    const { childrenColumnName } = unref(propsRef);
    const dataArray = toRaw(data || unref(tableData));
    if (dataArray === undefined || dataArray === null) {
      return keys;
    }
    dataArray.forEach((item) => {
      keys.push(item[unref(getRowKey) as string]);
      const children = item[childrenColumnName || "children"];
      if (children?.length) {
        keys.push(...getAllKeys(children));
      }
    });
    return keys;
  }

  function collapseAll() {
    expandedRowKeys.value = [];
  }

  return { getExpandOption, expandAll, expandRows, collapseAll };
}
