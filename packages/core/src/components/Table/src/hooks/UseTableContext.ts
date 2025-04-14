import type { Ref } from "vue";
import type { BasicTableProps, TableActionType } from "../types/Table";
import { provide, inject, ComputedRef } from "vue";
import { Nullable, Recordable } from "@mfish/types";

const key = Symbol("basic-table");

type Instance = TableActionType & {
  wrapRef: Ref<Nullable<HTMLElement>>;
  getBindValues: ComputedRef<Recordable>;
};

type RetInstance = Omit<Instance, "getBindValues"> & {
  getBindValues: ComputedRef<BasicTableProps>;
};

export function createTableContext(instance: Instance) {
  provide(key, instance);
}

export function useTableContext(): RetInstance {
  return inject(key) as RetInstance;
}
