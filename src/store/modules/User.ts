import type { MessageMode } from "/#/axios";
import { defineStore } from "pinia";
import { store } from "/@/store";
import { PageEnum } from "/@/enums/PageEnum";
import { REFRESH_TOKEN_KEY, TENANT_ID_KEY, TOKEN_KEY } from "/@/enums/CacheEnum";
import { clearAuthCache, getAuthCache, setAuthCache } from "/@/utils/auth";
import { LoginParams, RoleInfo, SsoUser } from "/@/api/sys/model/UserModel";
import { doLogout, getUserInfo, loginApi } from "/@/api/sys/User";
import { useI18n } from "/@/hooks/web/UseI18n";
import { useMessage } from "/@/hooks/web/UseMessage";
import { router } from "/@/router";
import { usePermissionStore } from "/@/store/modules/Permission";
import { isArray } from "/@/utils/Is";
import { h } from "vue";
import { Nullable } from "/@/utils/Types";

interface UserState {
  userInfo: Nullable<SsoUser>;
  tenantId?: string;
  token?: string;
  refreshToken?: string;
  roleInfoList: RoleInfo[];
  roleList: Set<string>;
  sessionTimeout?: boolean;
  isLogout?: boolean;
}

export const useUserStore = defineStore({
  id: "app-user",
  state: (): UserState => ({
    // 用户信息
    userInfo: null,
    //当前租户ID
    tenantId: undefined,
    // token信息
    token: undefined,
    //过期后刷新token
    refreshToken: undefined,
    //角色信息列表
    roleInfoList: [],
    // 角色code列表
    roleList: new Set<string>(),
    // token时长
    sessionTimeout: false,
    //判断是否登出操作
    isLogout: false
  }),
  getters: {
    getUserInfo(): Nullable<SsoUser> {
      return this.userInfo;
    },
    getTenantId(): Nullable<string> {
      return this.tenantId || getAuthCache<string>(TENANT_ID_KEY);
    },
    getToken(): string {
      return this.token || getAuthCache<string>(TOKEN_KEY);
    },
    getRefreshToken(): string {
      return this.refreshToken || getAuthCache<string>(REFRESH_TOKEN_KEY);
    },
    getRoleInfoList(): RoleInfo[] {
      return this.roleInfoList;
    },
    getRoleList(): Set<string> {
      return this.roleList;
    },
    getSessionTimeout(): boolean {
      return !!this.sessionTimeout;
    },
    getIsLogout(): boolean {
      return !!this.isLogout;
    }
  },
  actions: {
    setToken(info: string | undefined) {
      this.token = info ? info : ""; // for null or undefined value
      setAuthCache(TOKEN_KEY, info);
    },
    setTenantId(id: string) {
      this.tenantId = id;
      setAuthCache(TENANT_ID_KEY, id);
    },
    setRefreshToken(refreshToken: string | undefined) {
      this.refreshToken = refreshToken ? refreshToken : "";
      setAuthCache(REFRESH_TOKEN_KEY, refreshToken);
    },
    setRoleInfoList(roleList: RoleInfo[]) {
      this.roleInfoList = roleList;
    },
    setRoleList(roleList: Set<string>) {
      this.roleList = roleList;
    },
    setUserInfo(info: SsoUser | null) {
      this.userInfo = info;
    },
    setSessionTimeout(flag: boolean) {
      this.sessionTimeout = flag;
    },
    setIsLogout(flag: boolean) {
      this.isLogout = flag;
    },
    resetState() {
      this.userInfo = null;
      this.token = "";
      this.tenantId = undefined;
      this.roleList = new Set<string>();
      this.sessionTimeout = false;
      this.isLogout = false;
    },
    /**
     * 登录
     * @param params  route_redirect //路由重定向地址，统一认证后跳转
     */
    async login(params: LoginParams & { mode?: MessageMode; route_redirect?: string }): Promise<SsoUser | null> {
      try {
        const { mode, route_redirect, ...loginParams } = params;
        const result = await loginApi(loginParams, mode);
        const { access_token, refresh_token } = result;
        this.setToken(access_token);
        this.setRefreshToken(refresh_token);
        const userInfo = await this.getAccountInfo();
        if (route_redirect) {
          await router.replace(route_redirect);
        } else {
          await router.replace(usePermissionStore().getHomePath);
        }
        return userInfo;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async getAccountInfo(): Promise<SsoUser | null> {
      if (!this.getToken) return null;
      // 获取用户信息
      const userInfo = await this.getUserInfoAction();
      const permissionStore = usePermissionStore();
      permissionStore.setPermissions(userInfo?.permissions ? new Set(userInfo?.permissions) : new Set());
      if (!permissionStore.isDynamicAddedRoute) {
        await permissionStore.addRouter(router);
      }
      const sessionTimeout = this.sessionTimeout;
      if (sessionTimeout) {
        this.setSessionTimeout(false);
      }
      return userInfo;
    },
    async getUserInfoAction(): Promise<SsoUser | null> {
      if (!this.getToken) return null;
      const userInfo = await getUserInfo();
      const { userRoles = [], tenants } = userInfo;
      if (isArray(userRoles)) {
        this.setRoleInfoList(userRoles);
        const roleList = new Set<string>(userRoles.map((item) => item.roleCode));
        this.setRoleList(roleList);
      } else {
        userInfo.userRoles = [];
        this.setRoleInfoList([]);
        this.setRoleList(new Set<string>());
      }
      if (this.getTenantId === undefined && tenants?.length > 0) {
        this.setTenantId(tenants[0].id);
      }
      this.setUserInfo(userInfo);
      return userInfo;
    },
    /**
     * @description: logout
     */
    async logout() {
      if (this.getToken) {
        try {
          const result = await doLogout();
          if (result) {
            this.setToken(undefined);
            this.setRefreshToken(undefined);
            this.setSessionTimeout(false);
            this.setUserInfo(null);
            clearAuthCache(true);
            this.setIsLogout(true);
            await router.push(PageEnum.BASE_LOGIN);
          }
        } catch {
          throw new Error("注销Token失败");
        }
      }
    },

    /**
     * @description: Confirm before logging out
     */
    confirmLoginOut() {
      const { createConfirm } = useMessage();
      const { t } = useI18n();
      createConfirm({
        iconType: "warning",
        title: () => h("span", t("sys.app.logoutTip")),
        content: () => h("span", t("sys.app.logoutMessage")),
        onOk: async () => {
          await this.logout();
        }
      });
    }
  }
});

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}
