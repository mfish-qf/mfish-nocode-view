import { defineStore } from "pinia";
import { MetaDataHeader, TableInfo } from "/@/api/sys/model/DbConnectModel";
import { getDataHeaders, getTableList } from "/@/api/sys/DbConnect";
import { PageResult } from "/@/api/model/BaseModel";
import { ApiParams } from "/@/api/nocode/model/ApiParamsModel";

/**
 * @description: 自定义API缓存
 * @author: mfish
 * @date: 2023/8/10
 */
interface CustomApiState {
  sourceId: string;
  sourceType: number;
  tableName: string;
  tableFields: MetaDataHeader[];
  tableList: TableInfo[];
  //所有关联表字典
  tableFieldsMap: Map<string, MetaDataHeader[]>;
  variables: ApiParams[];
  //配置层级
  level: number;
  //内部字段是否发生变化
  fieldsChange: number;
}

export const useApiStore = defineStore({
  id: "custom-api",
  state: (): CustomApiState => ({
    sourceId: "",
    sourceType: 0,
    tableName: "",
    tableFields: [],
    tableList: [],
    tableFieldsMap: new Map(),
    variables: [],
    level: 1,
    fieldsChange: 1
  }),
  getters: {
    getSourceId(): string {
      return this.sourceId;
    },
    getSourceType(): number {
      return this.sourceType;
    },
    getTableName(): string {
      return this.tableName;
    },
    getTableFields(): MetaDataHeader[] {
      return this.tableFields;
    },
    getTableList(): TableInfo[] {
      return this.tableList;
    },
    getTableFieldsMap(): Map<string, MetaDataHeader[]> {
      return this.tableFieldsMap;
    },
    getVariables(): ApiParams[] {
      return this.variables;
    },
    getLevel(): number {
      return this.level;
    },
    getFieldsChange(): number {
      return this.fieldsChange;
    }
  },
  actions: {
    setSourceId(sourceId: string) {
      this.sourceId = sourceId;
    },
    setSourceType(sourceType: number) {
      this.sourceType = sourceType;
    },
    setTableName(tableName: string) {
      this.tableName = tableName;
    },
    async setTableFields(connectId: string, tableName: string): Promise<MetaDataHeader[]> {
      this.tableFields = await getDataHeaders({
        connectId: connectId,
        tableName: tableName,
        pageNum: 1,
        pageSize: 2000
      });
      return this.tableFields;
    },
    async setTableList(connectId: string): Promise<TableInfo[]> {
      const pageTable: PageResult<TableInfo> = await getTableList({
        connectId: connectId,
        pageNum: 1,
        pageSize: 10000
      });
      if (pageTable?.list.length > 0) {
        this.tableList = pageTable.list;
      }
      return this.tableList;
    },
    setVariables(variables: ApiParams[]) {
      this.variables = variables;
    },
    setLevel(level: number) {
      this.level = level;
    },
    setFieldsChange(level: number) {
      if (level < this.getLevel) {
        this.fieldsChange++;
      }
    },
    getTableFieldsByName(tableName: string | undefined): MetaDataHeader[] {
      if (tableName) {
        return this.tableFieldsMap.get(tableName) || [];
      }
      return [];
    }
  }
});
