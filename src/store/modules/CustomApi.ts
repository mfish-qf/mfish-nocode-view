import { defineStore } from "pinia";
import { MetaDataHeader, TableInfo } from "/@/api/sys/model/DbConnectModel";
import { getTableList } from "/@/api/sys/DbConnect";
import { PageResult } from "/@/api/model/BaseModel";
import { ApiParams } from "/@/api/nocode/model/ApiParamsModel";
import { FormulaInfo } from "/@/api/nocode/model/FormulaInfoModel";
import { getFormulaInfoList } from "/@/api/nocode/FormulaInfo";
import { getSourceHeaders } from "/@/api/nocode/MfApi";

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
  //是否显示数据
  showData: boolean;
  //显示数据的层级
  showDataLevel: string | number;
  formulaMap: Map<string, FormulaInfo>;
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
    fieldsChange: 1,
    showData: false,
    showDataLevel: "",
    formulaMap: new Map()
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
    },
    getShowData(): boolean {
      return this.showData;
    },
    getShowDataLevel(): string | number {
      return this.showDataLevel;
    },
    getFormulaMap(): Map<string, FormulaInfo> {
      return this.formulaMap;
    }
  },
  actions: {
    setSourceId(sourceId: string) {
      this.sourceId = sourceId;
    },
    setSourceType(sourceType: number) {
      this.sourceType = sourceType;
    },
    setTableName(tableName: string | undefined) {
      if (!tableName) return;
      this.tableName = tableName;
    },
    async setTableFields(sourceId: string, tableName: string | undefined): Promise<MetaDataHeader[]> {
      if (!tableName) return [];
      this.tableFields = await getSourceHeaders({
        sourceId: sourceId,
        tableName: tableName,
        sourceType: this.sourceType
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
    setLevel(level: number) {
      this.level = level;
    },
    setFieldsChange(level: number) {
      //监听内存字段数据发生变化
      if (level < this.getLevel) {
        this.fieldsChange++;
      }
    },
    addTableFieldsMap(tableName: string | undefined, headers: MetaDataHeader[]) {
      if (tableName) {
        this.tableFieldsMap.set(tableName, headers);
      }
    },
    getTableFieldsByName(tableName: string | undefined): MetaDataHeader[] {
      if (tableName) {
        return this.tableFieldsMap.get(tableName) || [];
      }
      return [];
    },
    setShowData(show: boolean) {
      this.showData = show;
    },
    setShowDataLevel(level: string | number) {
      this.showDataLevel = level;
    },
    async setFormulaMap() {
      if (this.formulaMap && this.formulaMap.size > 0) return;
      const res = await getFormulaInfoList({ pageNum: 1, pageSize: 10000 });
      res.list.forEach((info: FormulaInfo) => {
        const key: string = info.categoryId + "," + info.id;
        this.formulaMap.set(key, { ...info, key });
      });
    },
    getFormula(key: string) {
      return this.formulaMap.get(key);
    }
  }
});
