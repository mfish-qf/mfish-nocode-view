import { BasicColumn, FormSchema } from "@mfish/core/components/Table";
import { DescItem } from "@mfish/core/components/Description";

/**
 * @description: 销售订单明细
 * @author: mfish
 * @date: 2024-09-02
 * @version: V2.0.1
 */
export const columns: BasicColumn[] = [
  {
    title: "订单号",
    dataIndex: "orderId",
    width: 120
  },
  {
    title: "商品名称",
    dataIndex: "goodsName",
    width: 120
  },
  {
    title: "商品图片",
    dataIndex: "picUrl",
    width: 120
  },
  {
    title: "商品单价",
    dataIndex: "goodsPrice",
    width: 120
  },
  {
    title: "商品原价",
    dataIndex: "goodsPricePro",
    width: 120
  },
  {
    title: "购买数量",
    dataIndex: "goodsCount",
    width: 120
  },
  {
    title: "发货时间",
    dataIndex: "sendTime",
    width: 120
  },
  {
    title: "收货时间",
    dataIndex: "receiveTime",
    width: 120
  },
  {
    title: "实际支付金额",
    dataIndex: "payAmount",
    width: 120
  },
  {
    title: "商品优惠总金额",
    dataIndex: "discount",
    width: 120
  },
  {
    title: "优惠券扣减金额",
    dataIndex: "couponDiscount",
    width: 120
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "orderId",
    label: "订单号",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  }
];
export const demoOrderDetailFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  {
    field: "orderId",
    label: "订单号",
    component: "Input",
    show: false
  },
  {
    field: "goodsName",
    label: "商品名称",
    component: "Input"
  },
  {
    field: "picUrl",
    label: "商品图片",
    component: "Input"
  },
  {
    field: "goodsPrice",
    label: "商品单价",
    component: "InputNumber"
  },
  {
    field: "goodsPricePro",
    label: "商品原价",
    component: "InputNumber"
  },
  {
    field: "goodsCount",
    label: "购买数量",
    component: "InputNumber"
  },
  {
    field: "sendTime",
    label: "发货时间",
    component: "DatePicker",
    componentProps: {
      valueFormat: "YYYY-MM-DD HH:mm:ss",
      format: "YYYY-MM-DD HH:mm:ss",
      showTime: { format: "HH:mm:ss" },
      getPopupContainer: () => document.body
    }
  },
  {
    field: "receiveTime",
    label: "收货时间",
    component: "DatePicker",
    componentProps: {
      valueFormat: "YYYY-MM-DD HH:mm:ss",
      format: "YYYY-MM-DD HH:mm:ss",
      showTime: { format: "HH:mm:ss" },
      getPopupContainer: () => document.body
    }
  },
  {
    field: "payAmount",
    label: "实际支付金额",
    component: "InputNumber"
  },
  {
    field: "discount",
    label: "商品优惠总金额",
    component: "InputNumber"
  },
  {
    field: "couponDiscount",
    label: "优惠券扣减金额",
    component: "InputNumber"
  }
];

export class DemoOrderDetailDesc {
  viewSchema: DescItem[] = [
    {
      label: "id",
      field: "id",
      show: () => false
    },
    {
      field: "orderId",
      label: "订单号"
    },
    {
      field: "goodsName",
      label: "商品名称"
    },
    {
      field: "picUrl",
      label: "商品图片"
    },
    {
      field: "goodsPrice",
      label: "商品单价"
    },
    {
      field: "goodsPricePro",
      label: "商品原价"
    },
    {
      field: "goodsCount",
      label: "购买数量"
    },
    {
      field: "sendTime",
      label: "发货时间"
    },
    {
      field: "receiveTime",
      label: "收货时间"
    },
    {
      field: "payAmount",
      label: "实际支付金额"
    },
    {
      field: "discount",
      label: "商品优惠总金额"
    },
    {
      field: "couponDiscount",
      label: "优惠券扣减金额"
    }
  ];
}
