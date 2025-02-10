import { BaseEntity, PageResult, ReqPage } from "@/api/model/BaseModel";

/**
 * @description: 我的大屏图层信息
 * @author: mfish
 * @date: 2024-12-24
 * @version: V1.3.2
 */
export interface ScreenLayers extends BaseEntity<string> {
  //图层ID
  layerId: string;
  //大屏ID或者模板ID
  screenId: string;
  //组件配置信息(json方式存储)
  config?: string;
}

export interface ReqScreenLayers extends ReqPage {
  layerId?: string;
  screenId?: string;
}

//分页结果集
export type ScreenLayersPageModel = PageResult<ScreenLayers>;
