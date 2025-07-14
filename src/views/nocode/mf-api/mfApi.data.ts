import { FormSchema } from "@mfish/core/components/Table";
import { getApiFolderTree } from "@mfish/custom-api";

/**
 * @description: 自定义API
 * @author: mfish
 * @date: 2023-09-06
 * @version: V2.0.0
 */
export const mfApiFormSchema: FormSchema[] = [
  { field: "id", label: "id", component: "Input", show: false },
  { field: "sourceId", label: "sourceId", component: "Input", show: false },
  { field: "sourceType", label: "sourceType", component: "Input", show: false },
  { field: "queryType", label: "queryType", component: "Input", show: false },
  { field: "config", label: "config", component: "Input", show: false },
  { field: "paramFlag", label: "paramFlag", component: "Input", show: false },
  { field: "params", label: "params", component: "Select", show: false },
  {
    field: "name",
    label: "API名称",
    component: "Input",
    required: true
  },
  {
    field: "folderId",
    label: "API目录",
    component: "ApiTreeSelect",
    componentProps: {
      api: getApiFolderTree,
      icon: "ant-design:folder-outlined",
      fieldNames: {
        label: "name",
        key: "id",
        value: "id"
      },
      showSearch: true,
      treeNodeFilterProp: "name",
      getPopupContainer: () => document.body
    }
  },
  {
    field: "remark",
    label: "描述",
    component: "InputTextArea"
  }
];
