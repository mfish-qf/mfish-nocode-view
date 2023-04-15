/**
 * @description: 代码构建
 * @author: mfish
 * @date: 2023-04-11
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { CodeBuild, ReqCodeBuild, CodeBuildPageModel, CodeVo } from "/@/api/sys/model/CodeBuildModel";

enum Api {
  CodeBuild = "/sys/codeBuild",
  View = "/sys/codeBuild/view",
  Download = "/sys/codeBuild/download"
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
};

/**
 * 查看代码
 * @param codeBuild
 */
export function viewCode(codeBuild: CodeBuild) {
  return defHttp.get<CodeVo[]>({ url: Api.View, params: codeBuild });
};

/**
 * 下载代码
 * @param codeBuild
 */
export function downloadCode(codeBuild: CodeBuild) {
  return defHttp.download<CodeVo[]>({
    url: Api.Download,
    params: codeBuild
  });
};

/**
 * 修改代码构建
 *
 * @param codeBuild
 * @return
 */
export function updateCodeBuild(codeBuild: CodeBuild) {
  return defHttp.put<CodeBuild>({ url: Api.CodeBuild, params: codeBuild }, { successMessageMode: "message" });
};

/**
 * 删除代码构建
 *
 * @param id 唯一ID
 * @return
 */
export function deleteCodeBuild(id: string) {
  return defHttp.delete<CodeBuild>({ url: Api.CodeBuild + "/" + id }, { successMessageMode: "message" });
};
