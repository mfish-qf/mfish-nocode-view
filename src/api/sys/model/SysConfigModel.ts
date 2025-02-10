import { BaseEntity } from "@/api/model/BaseModel";

/**
 * @description: 界面配置
 * @author: mfish
 * @date: 2023-03-07
 * @version: V1.3.2
 */
export interface SysConfig extends BaseEntity<number> {
  userId?: string;
  config?: string;
  type?: number;
}
