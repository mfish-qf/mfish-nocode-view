import { defHttp } from "@/utils/http/axios";
import { SysConfig } from "@/api/sys/model/SysConfigModel";

/**
 * @description: 界面配置
 * @author: mfish
 * @date: 2023-03-07
 * @version: V1.3.1
 */
enum Api {
  SysConfig = "/sys/sysConfig"
}

/**
 * 获取系统配置
 *
 * @return
 */
export const getSysConfig = () => {
  return defHttp.get<SysConfig[]>({ url: Api.SysConfig });
};

/**
 * 新增界面配置
 *
 * @param sysConfig
 * @param showMsg 是否显示提示信息
 * @return
 */
export function saveSysConfig(sysConfig: SysConfig, showMsg: boolean = true) {
  let options = {};
  if (showMsg) {
    options = { successMessageMode: "message" };
  }
  return defHttp.post<SysConfig>({ url: Api.SysConfig, params: sysConfig }, options);
}

/**
 * 删除界面配置
 *
 * @param type 配置类型
 * @return
 */
export function deleteSysConfig(type: number) {
  return defHttp.delete<boolean>({ url: `${Api.SysConfig}/${type}` }, { successMessageMode: "message" });
}
