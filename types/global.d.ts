import { Recordable } from "@mfish/types";

/**
 * @description: 全局配置信息定义
 * @author: mfish
 * @date: 2022/9/22 18:02
 */
declare global {
  const __APP_INFO__: {
    pkg: {
      name: string;
      version: string;
      dependencies: Recordable<string>;
      devDependencies: Recordable<string>;
    };
    lastBuildTime: string;
  };
}
