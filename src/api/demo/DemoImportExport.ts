import { defHttp } from "@mfish/core/utils/http/axios";
import {
  DemoImportExport,
  DemoImportExportPageModel,
  ReqDemoImportExport
} from "@/api/demo/model/DemoImportExportModel";

/**
 * @description: 导入导出Demo
 * @author: mfish
 * @date: 2024-09-02
 * @version: V2.1.0
 */
enum Api {
  DemoImportExport = "/demo/demoImportExport"
}

/**
 * 分页列表查询
 *
 * @param reqDemoImportExport
 * @return 返回分页列表
 */
export const getDemoImportExportList = (reqDemoImportExport?: ReqDemoImportExport) => {
  return defHttp.get<DemoImportExportPageModel>({ url: Api.DemoImportExport, params: reqDemoImportExport });
};

/**
 * 通过id查询
 *
 * @param id 唯一ID
 * @return 返回分页列表
 */
export function getDemoImportExportById(id: string) {
  return defHttp.get<DemoImportExport>({ url: `${Api.DemoImportExport}/${id}` });
}

/**
 * 导出Demo
 * @param reqDemoImportExport 请求参数
 */
export function exportDemo(reqDemoImportExport?: ReqDemoImportExport) {
  return defHttp.download({ url: Api.DemoImportExport + "/export", params: reqDemoImportExport });
}

/**
 * 模板导出样例
 * @param id 记录id
 */
export function exportDemoTemplateExport(id?: string) {
  return defHttp.download({ url: Api.DemoImportExport + "/export/" + id });
}

/**
 * 新增导入导出Demo
 *
 * @param demoImportExport 请求参数
 * @return 返回结果
 */
export function insertDemoImportExport(demoImportExport: DemoImportExport) {
  return defHttp.post<DemoImportExport>(
    { url: Api.DemoImportExport, params: demoImportExport },
    { successMessageMode: "message" }
  );
}

/**
 * 修改导入导出Demo
 *
 * @param demoImportExport
 * @return 返回结果
 */
export function updateDemoImportExport(demoImportExport: DemoImportExport) {
  return defHttp.put<DemoImportExport>(
    { url: Api.DemoImportExport, params: demoImportExport },
    { successMessageMode: "message" }
  );
}

/**
 * 删除导入导出Demo
 *
 * @param id 唯一ID
 * @return 返回结果
 */
export function deleteDemoImportExport(id: string) {
  return defHttp.delete<boolean>({ url: `${Api.DemoImportExport}/${id}` }, { successMessageMode: "message" });
}

/**
 * 批量删除导入导出Demo
 *
 * @param ids 唯一ID多个逗号隔开
 * @return 返回结果
 */
export function deleteBatchDemoImportExport(ids: string) {
  return defHttp.delete<boolean>({ url: Api.DemoImportExport + "/batch/" + ids }, { successMessageMode: "message" });
}

/**
 * 导入Demo
 * @param file 文件
 */
export function importDemo(file) {
  return defHttp.upload<any>(
    {
      url: Api.DemoImportExport + "/import",
      params: { file: file }
    },
    { successMessageMode: "message" }
  );
}
