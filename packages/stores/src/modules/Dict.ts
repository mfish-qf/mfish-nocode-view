import { defineStore } from "pinia";
import { getDictItems } from "@mfish/core/src/api/sys/DictItem";
import { DictItem } from "@mfish/core/src/api/sys/model/DictItemModel";
import { ref, Ref } from "vue";

/**
 * @description: 字典缓存
 * @author: mfish
 * @date: 2024/3/26
 */
interface DictState {
  dictMap: Map<string, Ref<DictItem[]>>;
}
export const useDictStore = defineStore("dict", {
  state: (): DictState => ({
    dictMap: new Map<string, Ref<DictItem[]>>()
  }),
  actions: {
    getDict(key: string): Ref<DictItem[]> | undefined {
      if (!this.dictMap.has(key)) {
        const item = ref<DictItem[]>([]);
        this.dictMap.set(key, item);
        getDictItems(key).then((res: any) => {
          item.value = res;
        });
      }
      return this.dictMap.get(key);
    }
  }
});
