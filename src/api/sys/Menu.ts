import { defHttp } from '/@/utils/http/axios';
import { getMenuListResultModel } from './model/MenuModel';

enum Api {
  GetMenuList = '/oauth2/ssoMenu',
}

/**
 * @description: Get user menu based on id
 */

export const getMenuList = () => {
  return defHttp.get<getMenuListResultModel>({ url: Api.GetMenuList });
};
