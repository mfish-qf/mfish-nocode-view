import { BasicColumn, FormSchema, TableImage } from "@mfish/core/components/Table";
import { getDictProps } from "@mfish/core/components/DictTag";
import { h } from "vue";
import { Tag } from "ant-design-vue";
import { getLocalFileUrl, imageUrl } from "@mfish/core/utils/file/FileUtils";

/**
 * @description: 租户信息表
 * @author: mfish
 * @date: 2023-05-31
 * @version: V2.1.1
 */
export const columns: BasicColumn[] = [
  {
    title: "logo",
    dataIndex: "logo",
    customRender: ({ record }) => {
      if (record.logo) {
        const imgList = [imageUrl(getLocalFileUrl(record.logo))];
        return h(TableImage, { size: 40, simpleShow: true, imgList });
      }
    },
    width: 120
  },
  {
    title: "租户类型",
    dataIndex: "tenantType",
    width: 60
  },
  {
    title: "租户名称",
    dataIndex: "name",
    width: 120
  },
  {
    title: "地址",
    dataIndex: "address",
    width: 120
  },
  {
    title: "公司规模",
    dataIndex: "corpSize",
    width: 120
  },
  {
    title: "营业年限",
    dataIndex: "corpYears",
    width: 120
  },
  {
    title: "所属行业",
    dataIndex: "trade",
    width: 120
  },
  {
    title: "域名",
    dataIndex: "domain",
    customRender: ({ record }) => {
      // 超链接访问文件，直接访问后台存储文件地址
      return h("a", { href: record.domain, target: "_blank" }, record.domain);
    },
    width: 120
  },
  {
    title: "管理员",
    dataIndex: "account",
    width: 120
  },
  {
    title: "状态",
    dataIndex: "status",
    width: 80,
    customRender: ({ record }) => {
      const status = record.status;
      const enable = Math.trunc(status) === 0;
      const color = enable ? "green" : "red";
      const text = enable ? "正常" : "注销";
      return h(Tag, { color }, () => text);
    }
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "tenantType",
    label: "租户类型",
    component: "ApiSelect",
    componentProps: getDictProps("tenant_corp_type"),
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "domain",
    label: "域名",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "name",
    label: "租户名称",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  }
];
export const ssoTenantFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "tenantType",
    label: "租户类型",
    component: "ApiSelect",
    componentProps: getDictProps("tenant_corp_type"),
    required: true
  },
  {
    field: "name",
    label: "租户名称",
    component: "Input",
    required: true
  },
  {
    field: "userId",
    label: "管理员",
    component: "Input",
    slot: "userSearch",
    required: true
  },
  {
    label: "角色",
    field: "roleIds",
    component: "Select",
    componentProps: {
      mode: "multiple",
      showSearch: true,
      optionFilterProp: "label",
      getPopupContainer: () => document.body
    }
  },
  {
    field: "address",
    label: "地址",
    component: "Input"
  },
  {
    field: "corpSize",
    label: "公司规模",
    component: "ApiSelect",
    componentProps: getDictProps("tenant_corp_size")
  },
  {
    field: "corpYears",
    label: "营业年限",
    component: "ApiSelect",
    componentProps: getDictProps("tenant_corp_years")
  },
  {
    field: "trade",
    label: "所属行业",
    component: "ApiSelect",
    componentProps: getDictProps("tenant_corp_trade")
  },
  {
    field: "domain",
    label: "域名",
    component: "Input"
  },
  {
    field: "status",
    label: "状态",
    component: "RadioButtonGroup",
    defaultValue: 0,
    componentProps: {
      options: [
        { label: "正常", value: 0 },
        { label: "注销", value: 1 }
      ]
    },
    required: true
  },
  {
    field: "logo",
    label: "logo",
    component: "Input",
    slot: "logoImg"
  }
];
