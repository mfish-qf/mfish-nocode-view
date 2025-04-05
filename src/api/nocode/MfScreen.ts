import { defHttp } from "@/utils/http/axios";
import { MfScreen, ReqMfScreen, MfScreenPageModel } from "@/api/nocode/model/MfScreenModel";

/**
 * @description: 我的大屏信息
 * @author: mfish
 * @date: 2024-08-07
 * @version: V1.3.2
 */
enum Api {
  MfScreen = "/nocode/mfScreen",
  MfScreenShare = "/nocode/mfScreen/share"
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
 * @param shareToken 分享token
 * @return 返回分页列表
 */
export function getMfScreenById(id: string, shareToken?: string) {
  return defHttp.get<MfScreen>({ url: `${Api.MfScreen}/${id}`, params: { _shareToken: shareToken } });
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

/**
 * 通过id分享大屏
 * @param id
 * @param duration 分享时长 单位小时
 */
export function shareMfScreenById(id: string, duration?: number) {
  return defHttp.get<MfScreen>({ url: `${Api.MfScreenShare}/${id}`, params: { duration } });
}

/**
 * 通过二维码分享大屏
 * @param id
 * @param path 分享路径
 * @param duration 分享时长 单位小时
 */
export function shareMfScreenByQRCode(id: string, path?: string, duration?: number) {
  return defHttp.get<string>({ url: `${Api.MfScreenShare}/code/${id}`, params: { path, duration } });
}
