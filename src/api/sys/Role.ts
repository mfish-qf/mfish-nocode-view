import { defHttp } from "/@/utils/http/axios";
import { RolePageModel, SsoRole } from "/@/api/sys/model/RoleModel";

/**
 * @description: 角色请求类
 * @author: mfish
 * @date: 2022/11/14 16:23
 */
enum Api {
  role = "/oauth2/role",
  allRole = "/oauth2/role/all",
  setStatus = "/oauth2/role/status"
}

export const getRoleList = (params?: SsoRole) => {
  return defHttp.get<RolePageModel>({ url: Api.role, params });
};
export const getAllRoleList = (params?: SsoRole) => {
  return defHttp.get<SsoRole[]>({ url: Api.allRole, params });
};
export const insertRole = (params: SsoRole) => {
  return defHttp.post<SsoRole>({ url: Api.role, params }, { successMessageMode: "message" });
};
export const updateRole = (params: SsoRole) => {
  return defHttp.put<SsoRole>({ url: Api.role, params }, { successMessageMode: "message" });
};
export const setRoleStatus = (roleId: string, status: number) => {
  return defHttp.put<Boolean>({ url: Api.setStatus, params: { "id": roleId, "status": status } });
};
export const deleteRole = (params: string) => {
  return defHttp.delete({ url: `${Api.role}/${params}` }, { successMessageMode: "message" });
};