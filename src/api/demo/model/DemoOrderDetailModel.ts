import { BaseEntity, PageResult, ReqPage } from "@/api/model/BaseModel";

/**
 * @description: 销售订单明细
 * @author: mfish
 * @date: 2024-09-02
 * @version: V1.3.1
 */
export interface DemoOrderDetail extends BaseEntity<string> {
  //订单号
  orderId: string;
  //商品名称
  goodsName?: string;
  //商品货品图片或者商品图片
  picUrl?: string;
  //商品单价
  goodsPrice?: number;
  //商品原价
  goodsPricePro?: number;
  //购买数量
  goodsCount?: number;
  //发货时间
  sendTime?: string;
  //收货时间
  receiveTime?: string;
  //实际支付金额
  payAmount?: number;
  //商品优惠总金额
  discount?: number;
  //优惠券扣减金额
  couponDiscount?: number;
}

export interface ReqDemoOrderDetail extends ReqPage {
  //订单号
  orderId?: string;
}

//分页结果集
export type DemoOrderDetailPageModel = PageResult<DemoOrderDetail>;
