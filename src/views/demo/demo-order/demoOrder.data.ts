import { BasicColumn, FormSchema } from "@mfish/core/components/Table";
import { DescItem } from "@mfish/core/components/Description";
import { buildDictTag, getDictProps } from "@mfish/core/components/DictTag";

/**
 * @description: 销售订单
 * @author: mfish
 * @date: 2024-09-13
 * @version: V2.0.1
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
    title: "收货地址",
    dataIndex: "userAddress",
    width: 120
  },
  {
    customRender: ({ record }) => {
      return buildDictTag("mall_order_status", record.orderStatus);
    },
    title: "订单状态",
    dataIndex: "orderStatus",
    width: 120
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
    title: "快递费用",
    dataIndex: "expressAmount",
    width: 120
  },
  {
    title: "订单描述",
    dataIndex: "orderDesc",
    width: 120
  },
  {
    title: "支付流水",
    dataIndex: "tradeNo",
    width: 120
  },
  {
    customRender: ({ record }) => {
      return buildDictTag("mall_pay_type", record.payType);
    },
    title: "支付类型",
    dataIndex: "payType",
    width: 120
  },
  {
    title: "支付时间",
    dataIndex: "payTime",
    width: 120
  },
  {
    customRender: ({ record }) => {
      return buildDictTag("mall_delivery_type", record.deliveryType);
    },
    title: "配送方式",
    dataIndex: "deliveryType",
    width: 120
  },
  {
    title: "收货时间",
    dataIndex: "confirmTime",
    width: 120
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
    componentProps: { ...getDictProps("mall_pay_type"), mode: "multiple" },
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
export const demoOrderFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "userName",
    label: "姓名",
    component: "Input"
  },
  {
    field: "userPhone",
    label: "联系电话",
    component: "Input"
  },
  {
    field: "userAddress",
    label: "收货地址",
    component: "Input"
  },
  {
    field: "orderStatus",
    label: "订单状态",
    component: "ApiSelect",
    componentProps: getDictProps("mall_order_status")
  },
  {
    field: "totalAmount",
    label: "订单总价",
    component: "InputNumber"
  },
  {
    field: "payAmount",
    label: "支付金额",
    component: "InputNumber"
  },
  {
    field: "expressAmount",
    label: "快递费用",
    component: "InputNumber"
  },
  {
    field: "orderDesc",
    label: "订单描述",
    component: "Input"
  },
  {
    field: "tradeNo",
    label: "支付流水",
    component: "Input"
  },
  {
    field: "payType",
    label: "支付类型",
    component: "ApiSelect",
    componentProps: getDictProps("mall_pay_type")
  },
  {
    field: "payTime",
    label: "支付时间",
    component: "DatePicker",
    componentProps: {
      valueFormat: "YYYY-MM-DD HH:mm:ss",
      format: "YYYY-MM-DD HH:mm:ss",
      showTime: { format: "HH:mm:ss" },
      getPopupContainer: () => document.body
    }
  },
  {
    field: "deliveryType",
    label: "配送方式",
    component: "ApiSelect",
    componentProps: getDictProps("mall_delivery_type")
  },
  {
    field: "confirmTime",
    label: "收货时间",
    component: "DatePicker",
    componentProps: {
      valueFormat: "YYYY-MM-DD HH:mm:ss",
      format: "YYYY-MM-DD HH:mm:ss",
      showTime: { format: "HH:mm:ss" },
      getPopupContainer: () => document.body
    }
  }
];

export class DemoOrderDesc {
  viewSchema: DescItem[] = [
    {
      label: "id",
      field: "id",
      show: () => false
    },
    {
      field: "userName",
      label: "姓名"
    },
    {
      field: "userPhone",
      label: "联系电话"
    },
    {
      field: "userAddress",
      label: "收货地址"
    },
    {
      render: (val) => {
        if (val === undefined) return;
        return buildDictTag("mall_order_status", val);
      },
      field: "orderStatus",
      label: "订单状态"
    },
    {
      field: "totalAmount",
      label: "订单总价"
    },
    {
      field: "payAmount",
      label: "支付金额"
    },
    {
      field: "expressAmount",
      label: "快递费用"
    },
    {
      field: "orderDesc",
      label: "订单描述"
    },
    {
      field: "tradeNo",
      label: "支付流水"
    },
    {
      render: (val) => {
        if (val === undefined) return;
        return buildDictTag("mall_pay_type", val);
      },
      field: "payType",
      label: "支付类型"
    },
    {
      field: "payTime",
      label: "支付时间"
    },
    {
      render: (val) => {
        if (val === undefined) return;
        return buildDictTag("mall_delivery_type", val);
      },
      field: "deliveryType",
      label: "配送方式"
    },
    {
      field: "confirmTime",
      label: "收货时间"
    }
  ];
}
