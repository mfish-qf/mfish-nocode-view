import type { ComputedRef } from "vue";
import { unref } from "vue";
import type { BasicTableProps } from "../types/Table";
import { Recordable } from "@mfish/types";
import type { Key } from "ant-design-vue/lib/table/interface";
import { parseRowKeyValue } from "@core/components/Table/src/Helper";

interface Options {
  setSelectedRowKeys: (keyValues: Key[]) => void;
  getSelectRowKeys: () => Key[];
  clearSelectedRowKeys: () => void;
  emit: EmitType | any;
  getAutoCreateKey: ComputedRef<boolean | undefined>;
}

export function useCustomRow(
  propsRef: ComputedRef<BasicTableProps>,
  { setSelectedRowKeys, getSelectRowKeys, getAutoCreateKey, clearSelectedRowKeys, emit }: Options
) {
  const customRow = (record: Recordable, index: number) => {
    return {
      onClick: (e: Event) => {
        e?.stopPropagation();

        function handleClick() {
          const { rowSelection, rowKey, clickToRowSelect } = unref(propsRef);
          if (!rowSelection || !clickToRowSelect) return;
          const keyValues = getSelectRowKeys() || [];
          const keyValue = parseRowKeyValue(rowKey, record, unref(getAutoCreateKey));
          if (!keyValue) return;

          const isCheckbox = rowSelection.type === "checkbox";
          if (isCheckbox) {
            // 找到tr
            const tr = (e as MouseEvent)
              .composedPath?.()
              .find((dom) => (dom as HTMLElement).tagName === "TR") as HTMLElement;
            if (!tr) return;
            // 找到Checkbox，检查是否为disabled
            const checkBox = tr.querySelector("input[type=checkbox]");
            if (!checkBox || checkBox.hasAttribute("disabled")) return;
            if (!keyValues.includes(keyValue)) {
              keyValues.push(keyValue);
              setSelectedRowKeys(keyValues);
              return;
            }
            const keyIndex = keyValues.indexOf(keyValue);
            keyValues.splice(keyIndex, 1);
            setSelectedRowKeys(keyValues);
            return;
          }

          const isRadio = rowSelection.type === "radio";
          if (isRadio) {
            if (!keyValues.includes(keyValue)) {
              if (keyValues.length > 0) {
                clearSelectedRowKeys();
              }
              setSelectedRowKeys([keyValue]);
              return;
            }
            clearSelectedRowKeys();
          }
        }

        handleClick();
        emit("rowClick", record, index, e);
      },
      onDblclick: (event: Event) => {
        emit("rowDbClick", record, index, event);
      },
      onContextmenu: (event: Event) => {
        emit("rowContextmenu", record, index, event);
      },
      onMouseenter: (event: Event) => {
        emit("rowMouseenter", record, index, event);
      },
      onMouseleave: (event: Event) => {
        emit("rowMouseleave", record, index, event);
      }
    };
  };

  return {
    customRow
  };
}
