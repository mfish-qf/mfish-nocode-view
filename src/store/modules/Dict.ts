import { defineStore } from "pinia";
import { getDictItems } from "/@/api/sys/DictItem";
import { DictItem } from "/@/api/sys/model/DictItemModel";

/**
 * @description: 字典缓存
 * @author: mfish
 * @date: 2024/3/26
 */
interface DictState {
  dictMap: Map<String, DictItem[]>;
}
export const useDictStore = defineStore({
  id: "dict",
  state: (): DictState => ({
    dictMap: new Map<String, DictItem[]>()
  }),
  actions: {
    async getDict(key: string): Promise<DictItem[] | undefined> {
      if (!this.dictMap.has(key)) {
        const res = await getDictItems(key);
        this.dictMap.set(key, res);
      }
      return this.dictMap.get(key);
    }
  }
});
