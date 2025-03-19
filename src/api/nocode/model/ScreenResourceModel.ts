import { BaseEntity, PageResult, ReqPage } from "@/api/model/BaseModel";

/**
 * @description: 大屏资源信息
 * @author: mfish
 * @date: 2025-03-19
 * @version: V1.3.2
 */
export interface ScreenResource extends BaseEntity<string> {
  //来源id
  sourceId?: string;
  //资源名称
  name?: string;
  //资源描述
  remark?: string;
  //资源分类
  category?: string;
  //画布配置
  canvasConfig?: string;
  //图片KEY
  picKey?: string;
  //大屏组件容器配置-位置信息(json方式存储)
  contains?: string;
  //资源价格
  price?: number;
  //使用次数
  useCount?: number;
  //收藏次数
  favoritesCount?: number;
  //点击次数
  clickCount?: number;
  //租户ID
  tenantId?: string;
}

export interface ReqScreenResource extends ReqPage {
  //资源分类
  category?: string;
  //来源id
  sourceId?: string;
  //资源名称
  name?: string;
}

//分页结果集
export type ScreenResourcePageModel = PageResult<ScreenResource>;
