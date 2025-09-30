import { BasicColumn, FormSchema } from "@mfish/core/components/Table";
import { buildDictTag } from "@mfish/core/components/DictTag";

/**
 * @description: API目录
 * @author: mfish
 * @date: 2023-07-21
 * @version: V2.2.0
 */
export const columns: BasicColumn[] = [
  {
    title: "名称",
    dataIndex: "name",
    width: 150
  },
  {
    title: "参数类型",
    dataIndex: "paramFlag",
    width: 60
  },
  {
    title: "数据来源",
    dataIndex: "sourceType",
    width: 80,
    customRender: ({ record }) => {
      return buildDictTag("api_data_source", record.sourceType);
    }
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
    width: 120
  },
  {
    title: "创建人",
    dataIndex: "createBy",
    width: 100
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "name",
    label: "目录名称",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  }
];
