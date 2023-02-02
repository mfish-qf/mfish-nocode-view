import { getDictItems } from "/@/api/sys/DictItem";

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