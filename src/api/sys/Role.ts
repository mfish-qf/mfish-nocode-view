import { defHttp } from "/@/utils/http/axios";
import { RolePageModel, SsoRole } from "/@/api/sys/model/RoleModel";

/**
 * @description：角色请求类
 * @author     ：qiufeng
 * @date       ：2022/11/14 16:23
 */
enum Api {
  role = "/oauth2/role",
  allRole = "/oauth2/role/all",
}

export const getRoleList = (params?: SsoRole) => {
  return defHttp.get<RolePageModel>({ url: Api.role, params });
};
export const getAllRoleList = (params?: SsoRole) => {
  return defHttp.get<SsoRole[]>({ url: Api.allRole, params });
};