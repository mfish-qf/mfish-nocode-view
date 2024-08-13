import { defineStore } from "pinia";
import { getDictItems } from "@/api/sys/DictItem";
import { DictItem } from "@/api/sys/model/DictItemModel";
import { ref, Ref } from "vue";

/**
 * @description: 字典缓存
 * @author: mfish
 * @date: 2024/3/26
 */
interface DictState {
  dictMap: Map<string, Ref<DictItem[]>>;
}
export const useDictStore = defineStore({
  id: "dict",
  state: (): DictState => ({
    dictMap: new Map<string, Ref<DictItem[]>>()
  }),
  actions: {
    getDict(key: string): Ref<DictItem[]> | undefined {
      if (!this.dictMap.has(key)) {
        const item = ref<DictItem[]>([]);
        this.dictMap.set(key, item);
        getDictItems(key).then((res) => {
          item.value = res;
        });
      }
      return this.dictMap.get(key);
    }
  }
});
