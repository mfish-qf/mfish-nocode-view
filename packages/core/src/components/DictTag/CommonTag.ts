import { h } from "vue";
import { Tag } from "ant-design-vue";
import { DictTag } from "./index";
import { getDictItems } from "../../api/sys/DictItem";

/**
 * @description: 通用Tag
 * @author: mfish
 * @date: 2024/8/29
 */
export const getDictProps = (param: string) => {
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
//是否标签
export const YNTag = (val: number) => YNTag_Name(val === 1, "是", "否");
//状态标签
export const YNTag_Status = (val: number) => YNTag_Name(val === 0, "启用", "停用");
//是否标签，传入显示值
export const YNTag_Name = (condition: boolean, y: string, n: string) =>
  condition ? h(Tag, { color: "green" }, () => y) : h(Tag, { color: "red" }, () => n);
