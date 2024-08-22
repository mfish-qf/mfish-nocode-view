import { isFunction } from "@/utils/Is";
import type { BasicTableProps, TableRowSelection } from "../types/Table";
import { computed, ComputedRef, nextTick, Ref, ref, toRaw, unref, watch } from "vue";
import { ROW_KEY } from "../Const";
import { omit } from "lodash-es";
import { findNodeAll } from "@/utils/helper/TreeHelper";
import { Recordable } from "@mfish/types";

export function useRowSelection(
  propsRef: ComputedRef<BasicTableProps>,
  tableData: Ref<Recordable[]>,
  emit: EmitType | any
) {
  const selectedRowKeysRef = ref<any[]>([]);
  const selectedRowRef = ref<Recordable[]>([]);

  const getRowSelectionRef = computed((): TableRowSelection | null => {
    const { rowSelection } = unref(propsRef);
    if (!rowSelection) {
      return null;
    }

    return {
      selectedRowKeys: unref(selectedRowKeysRef),
      onChange: (selectedRowKeys: any[]) => {
        setSelectedRowKeys(selectedRowKeys);
      },
      ...omit(rowSelection, ["onChange"])
    };
  });

  watch(
    () => unref(propsRef).rowSelection?.selectedRowKeys,
    (v: string[]) => {
      setSelectedRowKeys(v);
    }
  );

  watch(
    () => unref(selectedRowKeysRef),
    () => {
      nextTick(() => {
        const { rowSelection } = unref(propsRef);
        if (rowSelection) {
          const { onChange } = rowSelection;
          if (onChange && isFunction(onChange)) onChange(getSelectRowKeys(), getSelectRows());
        }
        emit("selectionChange", {
          keys: getSelectRowKeys(),
          rows: getSelectRows()
        });
      }).then();
    },
    { deep: true }
  );

  const getAutoCreateKey: any = computed(() => {
    return unref(propsRef).autoCreateKey && !unref(propsRef).rowKey;
  });

  const getRowKey: any = computed(() => {
    const { rowKey } = unref(propsRef);
    return unref(getAutoCreateKey) ? ROW_KEY : rowKey;
  });

  function setSelectedRowKeys(rowKeys: any[]) {
    selectedRowKeysRef.value = rowKeys;
    const allSelectedRows = findNodeAll(
      toRaw(unref(tableData)).concat(toRaw(unref(selectedRowRef))),
      (item) => rowKeys.includes(item[unref(getRowKey)]),
      {
        children: propsRef.value.childrenColumnName ?? "children"
      }
    );
    const trueSelectedRows: any[] = [];
    rowKeys.forEach((key: string | number) => {
      const found = allSelectedRows.find((item) => item[unref(getRowKey) as string] === key);
      found && trueSelectedRows.push(found);
    });
    selectedRowRef.value = trueSelectedRows;
  }

  function setSelectedRows(rows: Recordable[]) {
    selectedRowRef.value = rows;
  }

  function clearSelectedRowKeys() {
    selectedRowRef.value = [];
    selectedRowKeysRef.value = [];
  }

  function deleteSelectRowByKey(key: string | number) {
    const selectedRowKeys = unref(selectedRowKeysRef);
    const index = selectedRowKeys.indexOf(key);
    if (index !== -1) {
      unref(selectedRowKeysRef).splice(index, 1);
    }
  }

  function getSelectRowKeys() {
    return unref(selectedRowKeysRef);
  }

  function getSelectRows<T = Recordable>() {
    // const ret = toRaw(unref(selectedRowRef)).map((item) => toRaw(item));
    return unref(selectedRowRef) as T[];
  }

  function getRowSelection() {
    return unref(getRowSelectionRef)!;
  }

  return {
    getRowSelection,
    getRowSelectionRef,
    getSelectRows,
    getSelectRowKeys,
    setSelectedRowKeys,
    clearSelectedRowKeys,
    deleteSelectRowByKey,
    setSelectedRows
  };
}
