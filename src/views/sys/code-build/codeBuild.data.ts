import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { getDBTree } from "/@/api/sys/DbConnect";
import { h } from "vue";
import { Cascader, Select } from "ant-design-vue";

/**
 * @description: 代码构建
 * @author: mfish
 * @date: 2023-04-11
 * @version: V1.2.0
 */
export const columns: BasicColumn[] = [
  {
    title: "表名",
    dataIndex: "tableName",
    width: 180
  },
  {
    title: "接口前缀",
    dataIndex: "apiPrefix",
    width: 120
  },
  {
    title: "实体类名",
    dataIndex: "entityName",
    width: 150
  },
  {
    title: "项目包名",
    dataIndex: "packageName",
    width: 180
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
    width: 150
  },
  {
    title: "表描述",
    dataIndex: "tableComment"
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "tableName",
    label: "表名",
    component: "Input",
    colProps: { lg: 4, md: 5 }
  },
  {
    field: "apiPrefix",
    label: "接口前缀",
    component: "Input",
    colProps: { lg: 4, md: 5 }
  },
  {
    field: "entityName",
    label: "实体类名",
    component: "Input",
    colProps: { lg: 4, md: 5 }
  }
];
export const codeBuildFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "dataBase",
    component: "ApiCascader",
    label: "数据库表",
    required: true,
    helpMessage: ["选择生成代码相关数据库和表"],
    componentProps: {
      api: getDBTree,
      apiParamKey: "parentId",
      asyncFetchParamKey: "parentId",
      labelField: "label",
      valueField: "code",
      initFetchParams: {
        parentId: ""
      },
      showSearch: true,
      isLeaf: (record) => {
        return record.type === 1;
      }
    }
  },
  {
    field: "apiPrefix",
    label: "接口前缀",
    component: "Input",
    helpMessage: [
      "网关path中的路由匹配前缀",
      "例如:网关中认证服务访问路径为Path=/oauth2/**接口前缀为oauth2",
      "不传会使用packageName，最底层包名 例如:cn.com.mfish.sys包会使用sys"
    ]
  },
  {
    field: "entityName",
    label: "实体类名",
    component: "Input",
    helpMessage: ["javaBean对象实体名称", "不传会使用表名驼峰化"]
  },
  {
    field: "packageName",
    label: "项目包名",
    component: "Input",
    helpMessage: ["java包名称 格式:cn.com.mfish.***", "不传使用默认包名 cn.com.mfish.web"]
  },
  {
    field: "tableComment",
    label: "表描述",
    component: "InputTextArea",
    helpMessage: ["表相关描述信息", "不传会获取数据库表中的中文描述，如果也为空则使用表名"],
    colProps: { span: 24 }
  }
];

export const reqSearches = (conditions: any, fields: any, components: any) => {
  return [
    {
      dataIndex: "id",
      ifShow: false
    },
    {
      title: "查询条件",
      dataIndex: "condition",
      width: 120,
      customRender: ({ record }) => {
        return h(Select, {
          options: conditions,
          placeholder: "选择查询条件",
          style: { width: "100px" },
          defaultValue: record.condition,
          onChange(e) {
            record.condition = e;
          }
        });
      }
    },
    {
      title: "字段",
      dataIndex: "field",
      customRender: ({ record }) => {
        return h(Select, {
          options: fields.value,
          placeholder: "选择查询字段",
          style: { width: "200px" },
          showSearch: true,
          labelInValue: true,
          defaultValue: record.field,
          optionFilterProp: "label",
          onChange(e: any) {
            record.field = e.value;
          }
        });
      }
    },
    {
      title: "组件",
      dataIndex: "component",
      customRender: ({ record }) => {
        return h(Cascader, {
          options: components.value,
          placeholder: "选择组件",
          style: { width: "200px" },
          defaultValue: record.component || ["Input"],
          showSearch: true,
          onChange(e) {
            record.component = e;
          }
        });
      }
    }
  ];
};
