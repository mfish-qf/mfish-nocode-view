import { BaseEntity } from "@mfish/core/src/api/model/BaseModel";

/**
 * @description: 界面配置
 * @author: mfish
 * @date: 2023-03-07
 * @version: V2.0.0
 */
export interface SysConfig extends BaseEntity<number> {
  userId?: string;
  config?: string;
  type?: number;
}
