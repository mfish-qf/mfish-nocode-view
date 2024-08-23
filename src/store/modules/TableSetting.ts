import { defineStore } from "pinia";
import { Nullable, Recordable } from "@mfish/types";
import { ColumnOptionsType, SizeType } from "@/components/general/Table";

interface TableSetting {
  size: Nullable<SizeType>;
  showIndexColumn: Recordable<Nullable<boolean>>;
  columns: Recordable<Nullable<Array<ColumnOptionsType>>>;
  showRowSelection: Recordable<Nullable<boolean>>;
}
interface TableSettingState {
  setting: Nullable<Partial<TableSetting>>;
}

export const useTableSettingStore = defineStore({
  id: "table-setting",
  state: (): TableSettingState => ({
    setting: null
  }),
  getters: {
    getTableSetting(): Nullable<Partial<TableSetting>> {
      return this.setting;
    },
    getTableSize() {
      return this.setting?.size || "middle";
    },
    getShowIndexColumn() {
      return (routerName: string) => {
        return this.setting?.showIndexColumn?.[routerName];
      };
    },
    getShowRowSelection() {
      return (routerName: string) => {
        return this.setting?.showRowSelection?.[routerName];
      };
    },
    getColumns() {
      return (routerName: string) => {
        return this.setting?.columns && this.setting?.columns[routerName] ? this.setting?.columns[routerName] : null;
      };
    }
  },
  actions: {
    setTableSetting(setting: Partial<TableSetting>) {
      this.setting = Object.assign({}, this.setting, setting);
    },
    resetTableSetting() {
      this.setting = null;
    },
    setTableSize(size: SizeType) {
      this.setTableSetting(
        Object.assign({}, this.setting, {
          size
        })
      );
    },
    setShowIndexColumn(routerName: string, show: boolean) {
      this.setTableSetting(
        Object.assign({}, this.setting, {
          showIndexColumn: {
            ...this.setting?.showIndexColumn,
            [routerName]: show
          }
        })
      );
    },
    setShowRowSelection(routerName: string, show: boolean) {
      this.setTableSetting(
        Object.assign({}, this.setting, {
          showRowSelection: {
            ...this.setting?.showRowSelection,
            [routerName]: show
          }
        })
      );
    },
    setColumns(routerName: string, columns: Array<ColumnOptionsType>) {
      this.setTableSetting(
        Object.assign({}, this.setting, {
          columns: {
            ...this.setting?.columns,
            [routerName]: columns
          }
        })
      );
    },
    clearColumns(routerName: string) {
      this.setTableSetting(
        Object.assign({}, this.setting, {
          columns: {
            ...this.setting?.columns,
            [routerName]: undefined
          }
        })
      );
    }
  }
});
