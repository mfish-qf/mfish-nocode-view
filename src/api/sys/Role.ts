import { defHttp } from "/@/utils/http/axios";
import { ReqSsoRole, RolePageModel, SsoRole } from "/@/api/sys/model/RoleModel";

/**
 * @description: 角色请求类
 * @author: mfish
 * @date: 2022/11/14 16:23
 */
enum Api {
  Role = "/oauth2/role",
  AllRole = "/oauth2/role/all",
  SetStatus = "/oauth2/role/status",
  Menus = "/oauth2/role/menus"
}

export const getRoleList = (params?: ReqSsoRole) => {
  return defHttp.get<RolePageModel>({ url: Api.Role, params });
};
export const getAllRoleList = (params?: ReqSsoRole) => {
  return defHttp.get<SsoRole[]>({ url: Api.AllRole, params });
};
export const getRoleMenus = (roleId?: string) => {
  return defHttp.get<String[]>({ url: `${Api.Menus}/${roleId}` });
};
export const insertRole = (params: SsoRole) => {
  return defHttp.post<SsoRole>({ url: Api.Role, params }, { successMessageMode: "message" });
};
export const updateRole = (params: SsoRole) => {
  return defHttp.put<SsoRole>({ url: Api.Role, params }, { successMessageMode: "message" });
};
export const setRoleStatus = (roleId: string, status: number) => {
  return defHttp.put<Boolean>({ url: Api.SetStatus, params: { id: roleId, status: status } });
};
export const deleteRole = (params: string) => {
  return defHttp.delete({ url: `${Api.Role}/${params}` }, { successMessageMode: "message" });
};
