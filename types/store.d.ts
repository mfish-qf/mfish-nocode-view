/**
 * @description: 缓存定义
 * @author: mfish
 * @date: 2022/10/11 15:23
 */
import { ErrorTypeEnum } from "/@/enums/ExceptionEnum";
import { MenuModeEnum, MenuTypeEnum } from "/@/enums/MenuEnum";
import { RoleInfo } from "/@/api/sys/model/UserModel";

// 锁屏信息
export interface LockInfo {
  // Password required
  pwd?: string | undefined;
  // Is it locked?
  isLock?: boolean;
}

// 错误日志信息
export interface ErrorLogInfo {
  // Type of error
  type: ErrorTypeEnum;
  // Error file
  file: string;
  // Error name
  name?: string;
  // Error message
  message: string;
  // Error stack
  stack?: string;
  // Error detail
  detail: string;
  // Error url
  url: string;
  // Error time
  time?: string;
}

export interface BeforeMiniState {
  menuCollapsed?: boolean;
  menuSplit?: boolean;
  menuMode?: MenuModeEnum;
  menuType?: MenuTypeEnum;
}
