import { getDictItems } from "/@/api/sys/DictItem";
import { DictItem } from "/@/api/sys/model/DictItemModel";
import { h, Ref, unref } from "vue";
import { Tag } from "ant-design-vue";

export const getDictProps = (param) => {
  return {
    api: getDictItems,
    params: param,
    // use name as label
    labelField: "dictLabel",
    // use id as value
    valueField: "dictValue",
    resultField: "list"
  };
};

export const buildDictTag = (value: String | number, dict: DictItem[] | Ref<DictItem[]> | undefined) => {
  if (!dict) return;
  for (const source of unref(dict)) {
    if (source.dictValue === value) {
      return h(Tag, { color: source.color }, { default: () => source.dictLabel });
    }
  }
  return h("div");
};
