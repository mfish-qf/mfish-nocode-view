import { defHttp } from "@/utils/http/axios";
import { MfScreen, ReqMfScreen, MfScreenPageModel } from "@/api/nocode/model/MfScreenModel";

/**
 * @description: 我的大屏信息
 * @author: mfish
 * @date: 2024-08-07
 * @version: V1.3.1
 */
enum Api {
  MfScreen = "/nocode/mfScreen"
}

/**
 * 分页列表查询
 *
 * @param reqMfScreen
 * @return
 */
export const getMfScreenList = (reqMfScreen?: ReqMfScreen) => {
  return defHttp.get<MfScreenPageModel>({ url: Api.MfScreen, params: reqMfScreen });
};

/**
 * 通过id查询
 *
 * @param id 唯一ID
 * @return 返回分页列表
 */
export function getMfScreenById(id: string) {
  return defHttp.get<MfScreen>({ url: `${Api.MfScreen}/${id}` });
}

/**
 * 新增我的大屏信息
 *
 * @param mfScreen
 * @return
 */
export function insertMfScreen(mfScreen: MfScreen) {
  return defHttp.post<MfScreen>({ url: Api.MfScreen, params: mfScreen }, { successMessageMode: "message" });
}

/**
 * 修改我的大屏信息
 *
 * @param mfScreen
 * @return
 */
export function updateMfScreen(mfScreen: MfScreen) {
  return defHttp.put<MfScreen>({ url: Api.MfScreen, params: mfScreen }, { successMessageMode: "message" });
}

/**
 * 删除我的大屏信息
 *
 * @param id 唯一ID
 * @return
 */
export function deleteMfScreen(id: string) {
  return defHttp.delete<MfScreen>({ url: `${Api.MfScreen}/${id}` }, { successMessageMode: "message" });
}
