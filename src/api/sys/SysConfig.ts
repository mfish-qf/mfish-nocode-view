/**
 * @description: 界面配置
 * @author: mfish
 * @date: 2023-03-07
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { SysConfig } from "/@/api/sys/model/SysConfigModel";

enum Api {
  SysConfig = "/sys/sysConfig"
}

/**
 * 分页列表查询
 *
 * @param reqSysConfig
 * @return
 */
export const getSysConfig = () => {
  return defHttp.get<SysConfig>({ url: Api.SysConfig });
};

/**
 * 新增界面配置
 *
 * @param sysConfig
 * @return
 */
export function saveSysConfig(sysConfig: SysConfig) {
  return defHttp.post<SysConfig>({ url: Api.SysConfig, params: sysConfig }, { successMessageMode: "message" });
};


/**
 * 删除界面配置
 *
 * @param id 唯一ID
 * @return
 */
export function deleteSysConfig(id: string) {
  return defHttp.delete<SysConfig>({ url: Api.SysConfig + "/" + id }, { successMessageMode: "message" });
};
