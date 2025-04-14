import type { ComputedRef, Slots } from "vue";
import type { BasicTableProps, FetchParams } from "../types/Table";
import { unref, computed } from "vue";
import type { FormProps } from "@core/components/Form";
import { isFunction } from "@core/utils/Is";
import { Recordable } from "@mfish/types";

export function useTableForm(
  propsRef: ComputedRef<BasicTableProps>,
  slots: Slots,
  fetch: (opt?: FetchParams | undefined) => Promise<Recordable[] | undefined>,
  getLoading: ComputedRef<boolean | undefined>
) {
  const getFormProps = computed((): Partial<FormProps> => {
    const { formConfig } = unref(propsRef);
    const { submitButtonOptions } = formConfig || {};
    return {
      showAdvancedButton: true,
      ...formConfig,
      submitButtonOptions: { loading: unref(getLoading), ...submitButtonOptions },
      compact: true
    };
  });

  const getFormSlotKeys: ComputedRef<string[]> = computed(() => {
    const keys = Object.keys(slots);
    return keys.map((item) => (item.startsWith("form-") ? item : null)).filter((item) => !!item) as string[];
  });

  function replaceFormSlotKey(key: string) {
    if (!key) return "";
    return key?.replace?.(/form-/, "") ?? "";
  }

  function handleSearchInfoChange(info: Recordable) {
    const { handleSearchInfoFn } = unref(propsRef);
    if (handleSearchInfoFn && isFunction(handleSearchInfoFn)) {
      info = handleSearchInfoFn(info) || info;
    }
    fetch({ searchInfo: info, page: 1 }).then();
  }

  return {
    getFormProps,
    replaceFormSlotKey,
    getFormSlotKeys,
    handleSearchInfoChange
  };
}
