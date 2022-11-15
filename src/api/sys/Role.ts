import { defHttp } from "/@/utils/http/axios";
import { SsoRole } from "/@/api/sys/model/RoleModel";

/**
 * @description：角色请求类
 * @author     ：qiufeng
 * @date       ：2022/11/14 16:23
 */
enum Api {
  role = "/oauth2/role",

}

export const getRoleList = (params?: SsoRole) => {
  return defHttp.get<SsoRole[]>({ url: Api.role, params });
};
