import { BaseEntity, PageResult, ReqPage } from "@/api/model/BaseModel";

/**
 * @description: 组件基础信息
 * @author: mfish
 * @date: 2024-11-19
 * @version: V1.3.1
 */
export interface ScreenCharts extends BaseEntity<string> {
  //组件名称
  name?: string;
  //组件类型
  type: string;
  //所属分类
  category?: string;
  //图片KEY
  picKey?: string;
  //图标
  icon?: string;
  //排序
  chartSort?: number;
  //删除标记
  delFlag?: number;
}

export interface ReqScreenCharts extends ReqPage {
  //组件名称
  name?: string;
  //组件类型
  type?: string;
  //所属分类
  category?: string;
}

//分页结果集
export type ScreenChartsPageModel = PageResult<ScreenCharts>;
