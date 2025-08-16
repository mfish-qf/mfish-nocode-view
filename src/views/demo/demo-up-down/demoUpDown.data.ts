import { BasicColumn, FormSchema } from "@mfish/core/components/Table";
import { DescItem } from "@mfish/core/components/Description";
import { buildDictTag, getDictProps } from "@mfish/core/components/DictTag";
import { h } from "vue";
import { FileHref, FileUp } from "@mfish/core/components/FileUpDown";
import { updateDemoImportExport } from "@/api/demo/DemoImportExport";

/**
 * @description: 上传下载样例
 * @author: mfish
 * @date: 2024-09-08
 * @version: V2.1.0
 */
export const columns: BasicColumn[] = [
  {
    title: "姓名",
    dataIndex: "userName",
    width: 120
  },
  {
    title: "联系电话",
    dataIndex: "userPhone",
    width: 120
  },
  {
    title: "订单状态",
    dataIndex: "orderStatus",
    width: 120,
    customRender: ({ record }) => {
      return buildDictTag("mall_order_status", record.orderStatus);
    }
  },
  {
    title: "订单总价",
    dataIndex: "totalAmount",
    width: 120
  },
  {
    title: "支付金额",
    dataIndex: "payAmount",
    width: 120
  },
  {
    title: "支付类型",
    dataIndex: "payType",
    width: 120,
    customRender: ({ record }) => {
      return buildDictTag("mall_pay_type", record.payType);
    }
  },
  {
    title: "支付凭证",
    dataIndex: "payCert",
    width: 120,
    customRender: ({ record }) => {
      return record.payCert ? h(FileHref, { keys: record.payCert?.split(",") }) : "无";
    }
  },
  {
    title: "支付时间",
    dataIndex: "payTime",
    width: 120
  },
  {
    title: "配送方式",
    dataIndex: "deliveryType",
    width: 120,
    customRender: ({ record }) => {
      return buildDictTag("mall_delivery_type", record.deliveryType);
    }
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "userName",
    label: "姓名",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "orderStatus",
    label: "订单状态",
    component: "ApiSelect",
    componentProps: getDictProps("mall_order_status"),
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "payType",
    label: "支付类型",
    component: "ApiSelect",
    componentProps: getDictProps("mall_pay_type"),
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "deliveryType",
    label: "配送方式",
    component: "ApiSelect",
    componentProps: getDictProps("mall_delivery_type"),
    colProps: { xl: 5, md: 6 }
  }
];
export const demoUpFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "payCert",
    label: "支付凭证（render写法）",
    component: "Input",
    render: (val) => {
      return h(FileUp, {
        fileKeys: val.values.payCert,
        accepts: ".xls,.xlsx,.jpg, .jpeg, .png, .pdf",
        buttonText: "支付凭证",
        onSuccess: (_, fileList) => {
          if (fileList && fileList.length > 0) {
            updateDemoImportExport({
              id: val.values.id,
              payCert: fileList.map((file) => file.fileKey).join(",")
            }).then(() => {});
          }
        },
        onRemove: (file, fileList) => {
          const keys = fileList
            .filter((item) => item.fileKey !== file.response.fileKey)
            .map((file) => file.fileKey)
            .join(",");
          updateDemoImportExport({
            id: val.values.id,
            payCert: keys
          }).then(() => {});
        }
      });
    }
  }
];

export const demoUpDownDesc: DescItem[] = [
  {
    label: "id",
    field: "id",
    show: () => false
  },
  {
    field: "payCert",
    label: "支付凭证（render写法）",
    render: (val, data) => {
      return h(FileUp, {
        fileKeys: val,
        accepts: ".xls,.xlsx,.jpg, .jpeg, .png, .pdf",
        buttonText: "支付凭证",
        onSuccess: (_, fileList) => {
          if (fileList && fileList.length > 0) {
            updateDemoImportExport({
              id: data.id,
              payCert: fileList.map((file) => file.fileKey).join(",")
            }).then(() => {});
          }
        },
        onRemove: (file, fileList) => {
          const keys = fileList
            .filter((item) => item.fileKey !== file.response.fileKey)
            .map((file) => file.fileKey)
            .join(",");
          updateDemoImportExport({
            id: data.id,
            payCert: keys
          }).then(() => {});
        }
      });
    }
  },
  {
    field: "payCert",
    label: "支付凭证展示",
    render: (val) => {
      return val ? h(FileHref, { keys: val?.split(",") }) : "无";
    }
  }
];

export const demoUpPicFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "payCert",
    label: "上传图片（render写法）",
    component: "Input",
    render: (val) => {
      return h(FileUp, {
        fileKeys: val.values.payCert,
        accepts: ".jpg, .jpeg, .png",
        buttonText: "上传图片",
        isPic: true,
        onSuccess: (_, fileList) => {
          if (fileList && fileList.length > 0) {
            updateDemoImportExport({
              id: val.values.id,
              payCert: fileList.map((file) => file.fileKey).join(",")
            }).then(() => {});
          }
        },
        onRemove: (file, fileList) => {
          const keys = fileList
            .filter((item) => item.fileKey !== file.response.fileKey)
            .map((file) => file.fileKey)
            .join(",");
          updateDemoImportExport({
            id: val.values.id,
            payCert: keys
          }).then(() => {});
        }
      });
    }
  }
];
