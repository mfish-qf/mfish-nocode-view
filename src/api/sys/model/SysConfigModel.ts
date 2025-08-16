import { BaseEntity } from "@mfish/core/api";

/**
 * @description: 界面配置
 * @author: mfish
 * @date: 2023-03-07
 * @version: V2.1.0
 */
export interface SysConfig extends BaseEntity<number> {
  userId?: string;
  config?: string;
  type?: number;
}
