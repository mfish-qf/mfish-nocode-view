import { defHttp } from "@mfish/core/utils/http/axios";
import { CodeBuild, CodeBuildPageModel, CodeVo, ReqCodeBuild } from "@/api/sys/model/CodeBuildModel";

/**
 * @description: 代码构建
 * @author: mfish
 * @date: 2023-04-11
 * @version: V2.0.1
 */
enum Api {
  CodeBuild = "/sys/codeBuild",
  View = `${CodeBuild}/view`,
  Download = `${CodeBuild}/download`,
  SaveLocal = `${CodeBuild}/saveLocal`,
  CreateMenu = `${CodeBuild}/menu`
}

/**
 * 分页列表查询
 *
 * @param reqCodeBuild
 * @return
 */
export const getCodeBuildList = (reqCodeBuild?: ReqCodeBuild) => {
  return defHttp.get<CodeBuildPageModel>({ url: Api.CodeBuild, params: reqCodeBuild });
};

/**
 * 新增代码构建
 *
 * @param codeBuild
 * @return
 */
export function insertCodeBuild(codeBuild: CodeBuild) {
  return defHttp.post<CodeBuild>({ url: Api.CodeBuild, params: codeBuild }, { successMessageMode: "message" });
}

/**
 * 修改代码构建
 *
 * @param codeBuild
 * @return
 */
export function updateCodeBuild(codeBuild: CodeBuild) {
  return defHttp.put<CodeBuild>({ url: Api.CodeBuild, params: codeBuild }, { successMessageMode: "message" });
}

/**
 * 查看代码
 * @param codeBuild
 */
export function viewCode(codeBuild: CodeBuild) {
  return defHttp.get<CodeVo[]>({ url: `${Api.View}/${codeBuild.id}` });
}

/**
 * 下载代码
 * @param codeBuild
 */
export function downloadCode(codeBuild: CodeBuild) {
  return defHttp.download<CodeVo[]>({ url: `${Api.Download}/${codeBuild.id}` });
}

/**
 * 保存代码到本地
 * @param codeBuild
 */
export function saveCodeLocal(codeBuild: CodeBuild) {
  return defHttp.get<boolean>({ url: `${Api.SaveLocal}/${codeBuild.id}` }, { successMessageMode: "message" });
}

/**
 * 删除代码构建
 *
 * @param id 唯一ID
 * @return
 */
export function deleteCodeBuild(id: string) {
  return defHttp.delete<CodeBuild>({ url: `${Api.CodeBuild}/${id}` }, { successMessageMode: "message" });
}

/**
 * 批量删除销售订单
 *
 * @param ids 唯一ID多个逗号隔开
 * @return
 */
export function deleteBatchCodeBuild(ids: string) {
  return defHttp.delete<CodeBuild>({ url: `${Api.CodeBuild}/batch/${ids}` }, { successMessageMode: "message" });
}

/**
 * 创建菜单
 * @param reqMenuCreate 参数
 */
export function codeCreateMenu(reqMenuCreate: { id: string; parentId: string }) {
  return defHttp.post<CodeBuild>({ url: Api.CreateMenu, params: reqMenuCreate }, { successMessageMode: "message" });
}
