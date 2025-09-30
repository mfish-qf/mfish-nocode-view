import { BaseEntity, PageResult, ReqPage } from "@mfish/core/api";

/**
 * @description: 销售订单
 * @author: mfish
 * @date: 2024-09-13
 * @version: V2.2.0
 */
export interface DemoOrder extends BaseEntity<string> {
  //姓名
  userName?: string;
  //联系电话
  userPhone?: string;
  //收货地址
  userAddress?: string;
  //订单状态
  orderStatus?: number;
  //订单总价
  totalAmount?: number;
  //支付金额
  payAmount?: number;
  //快递费用
  expressAmount?: number;
  //订单描述
  orderDesc?: string;
  //支付流水
  tradeNo?: string;
  //支付类型
  payType?: number;
  //支付时间
  payTime?: string;
  //配送方式
  deliveryType?: number;
  //收货时间
  confirmTime?: string;
}

export interface ReqDemoOrder extends ReqPage {
  //姓名
  userName?: string;
  //订单状态
  orderStatus?: number;
  //支付类型
  payType?: number;
  //配送方式
  deliveryType?: number;
}

//分页结果集
export type DemoOrderPageModel = PageResult<DemoOrder>;
