import { getDictItems } from "/@/api/sys/DictItem";
import { h } from "vue";
import DictTag from "/@/components/general/DictTag/DictTag.vue";

export const getDictProps = (param) => {
  return {
    api: getDictItems,
    params: param,
    // use name as label
    labelField: "dictLabel",
    // use id as value
    valueField: "dictValue",
    resultField: "list",
    getPopupContainer: () => document.body
  };
};

export const buildDictTag = (code: string, value: string | number | boolean | undefined) => {
  return h(DictTag, { code, value });
};
