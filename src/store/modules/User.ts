import type { MessageMode } from "#/axios";
import { defineStore } from "pinia";
import { store } from "@/store";
import { PageEnum } from "@/enums/PageEnum";
import { REFRESH_TOKEN_KEY, TENANT_ID_KEY, TOKEN_KEY } from "@/enums/CacheEnum";
import { clearAuthCache, getAuthCache, setAuthCache } from "@/utils/auth";
import { LoginParams, RoleInfo, SsoUser } from "@/api/sys/model/UserModel";
import { doLogout, getUserInfo, loginApi } from "@/api/sys/User";
import { useI18n } from "@/hooks/web/UseI18n";
import { useMessage } from "@/hooks/web/UseMessage";
import { router } from "@/router";
import { usePermissionStore } from "@/store/modules/Permission";
import { isArray } from "@/utils/Is";
import { h } from "vue";
import { Nullable } from "@mfish/types";

interface UserState {
  userInfo: Nullable<SsoUser>;
  tenantId?: string;
  token?: string;
  refreshToken?: string;
  roleInfoList: RoleInfo[];
  roleList: Set<string>;
  isLogout?: boolean;
}

export const useUserStore = defineStore({
  id: "app-user",
  state: (): UserState => ({
    // 用户信息
    userInfo: null,
    // 当前租户ID
    tenantId: undefined,
    // token信息
    token: undefined,
    // 过期后刷新token
    refreshToken: undefined,
    // 角色信息列表
    roleInfoList: [],
    // 角色code列表
    roleList: new Set<string>(),
    // 判断是否登出操作
    isLogout: false
  }),
  getters: {
    getUserInfo(): Nullable<SsoUser> {
      return this.userInfo;
    },
    getTenantId(): Nullable<string> {
      return this.tenantId || getAuthCache<string>(TENANT_ID_KEY + this.getToken);
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
    getIsLogout(): boolean {
      return !!this.isLogout;
    }
  },
  actions: {
    setToken(info: string | undefined) {
      this.token = info;
      setAuthCache(TOKEN_KEY, info);
    },
    setTenantId(id: string | undefined) {
      this.tenantId = id || "";
      setAuthCache(TENANT_ID_KEY + this.getToken, id);
    },
    setRefreshToken(refreshToken: string | undefined) {
      this.refreshToken = refreshToken || "";
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
    setIsLogout(flag: boolean) {
      this.isLogout = flag;
    },
    resetState() {
      this.userInfo = null;
      this.token = "";
      this.tenantId = undefined;
      this.roleList = new Set<string>();
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
        await (route_redirect ? router.replace(route_redirect) : router.replace(usePermissionStore().getHomePath));
        return userInfo;
      } catch (error) {
        throw new Error(error);
      }
    },
    async getAccountInfo(): Promise<SsoUser> {
      if (!this.getToken) {
        throw new Error("token为空");
      }
      // 获取用户信息
      const userInfo = await this.getUserInfoAction();
      const permissionStore = usePermissionStore();
      permissionStore.setPermissions(userInfo?.permissions ? new Set(userInfo?.permissions) : new Set());
      if (!permissionStore.isDynamicAddedRoute) {
        await permissionStore.addRouter(router);
      }
      return userInfo;
    },
    async getUserInfoAction(): Promise<SsoUser> {
      if (!this.getToken) {
        throw new Error("token为空");
      }
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
      this.setUserInfo(userInfo);
      if (this.getTenantId === undefined && tenants?.length > 0 && tenants[0].id) {
        this.setTenantId(tenants[0].id);
      }
      return userInfo;
    },
    /**
     * @description: logout
     */
    async logout() {
      if (this.getToken) {
        try {
          await doLogout();
        } catch {
          console.log("注销Token失败");
        }
        this.setToken(undefined);
        this.setRefreshToken(undefined);
        this.setUserInfo(null);
        this.setTenantId(undefined);
        clearAuthCache(true);
        this.setIsLogout(true);
        await router.replace(PageEnum.BASE_LOGIN);
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
