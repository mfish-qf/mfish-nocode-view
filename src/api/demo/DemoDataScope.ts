import { defHttp } from "@mfish/core/utils/http/axios";
import { DemoDataScope, DemoDataScopePageModel, ReqDemoDataScope } from "@/api/demo/model/DemoDataScopeModel";

/**
 * @description: demo_data_scope
 * @author: mfish
 * @date: 2024-09-04
 * @version: V2.1.0
 */
enum Api {
  DemoDataScope = "/demo/demoDataScope"
}

/**
 * 分页列表查询
 *
 * @param reqDemoDataScope
 * @return 返回分页列表
 */
export const getDemoDataScopeList = (reqDemoDataScope?: ReqDemoDataScope) => {
  return defHttp.get<DemoDataScopePageModel>({ url: Api.DemoDataScope, params: reqDemoDataScope });
};

/**
 * 通过id查询
 *
 * @param id 唯一ID
 * @return 返回分页列表
 */
export function getDemoDataScopeById(id: string) {
  return defHttp.get<DemoDataScope>({ url: `${Api.DemoDataScope}/${id}` });
}

/**
 * 获取当前租户数据
 * @param reqDemoDataScope
 */
export const getCurrentTenant = (reqDemoDataScope?: ReqDemoDataScope) => {
  return defHttp.get<DemoDataScopePageModel>({ url: Api.DemoDataScope + "/currentTenant", params: reqDemoDataScope });
};

/**
 * 获取当前组织数据
 * @param reqDemoDataScope
 */
export const getCurrentOrg = (reqDemoDataScope?: ReqDemoDataScope) => {
  return defHttp.get<DemoDataScopePageModel>({ url: Api.DemoDataScope + "/currentOrg", params: reqDemoDataScope });
};

/**
 * 获取当前角色数据
 * @param reqDemoDataScope
 */
export const getCurrentRole = (reqDemoDataScope?: ReqDemoDataScope) => {
  return defHttp.get<DemoDataScopePageModel>({ url: Api.DemoDataScope + "/currentRole", params: reqDemoDataScope });
};

/**
 * 查询组织编码为admin或mfish及其下级组织数据
 * @param reqDemoDataScope
 */
export const getAdminOrg = (reqDemoDataScope?: ReqDemoDataScope) => {
  return defHttp.get<DemoDataScopePageModel>({ url: Api.DemoDataScope + "/adminOrg", params: reqDemoDataScope });
};

/**
 * 查询角色编码为manage或superAdmin数据
 */
export const getFixRole = (reqDemoDataScope?: ReqDemoDataScope) => {
  return defHttp.get<DemoDataScopePageModel>({ url: Api.DemoDataScope + "/fixRole", params: reqDemoDataScope });
};

/**
 * 查询当前租户下角色编码为manage或superAdmin数据
 * @param reqDemoDataScope
 */
export const getMixScope = (reqDemoDataScope?: ReqDemoDataScope) => {
  return defHttp.get<DemoDataScopePageModel>({ url: Api.DemoDataScope + "/mixScope", params: reqDemoDataScope });
};
