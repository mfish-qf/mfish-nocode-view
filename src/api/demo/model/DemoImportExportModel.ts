import { BaseEntity, PageResult, ReqPage } from "@mfish/core/api";

/**
 * @description: 导入导出Demo
 * @author: mfish
 * @date: 2024-09-02
 * @version: V2.0.1
 */
export interface DemoImportExport extends BaseEntity<string> {
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

export interface ReqDemoImportExport extends ReqPage {
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
export type DemoImportExportPageModel = PageResult<DemoImportExport>;
