import { defHttp } from "@/utils/http/axios";
import { ScreenLayers, ReqScreenLayers } from "@/api/nocode/model/ScreenLayersModel";
/**
 * @description: 我的大屏图层信息
 * @author: mfish
 * @date: 2024-12-24
 * @version: V1.3.2
 */
enum Api {
  ScreenLayers = "/nocode/screenLayers"
}

/**
 * 分页列表查询
 *
 * @param reqScreenLayers
 * @param shareToken 分享token
 * @return 返回分页列表
 */
export function getScreenLayers(reqScreenLayers?: ReqScreenLayers, shareToken?: string) {
  return defHttp.get<ScreenLayers[]>({
    url: Api.ScreenLayers,
    params: { ...reqScreenLayers, _shareToken: shareToken }
  });
}
