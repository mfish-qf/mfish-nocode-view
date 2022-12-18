import type { MessageMode } from "/#/axios";
import { defineStore } from "pinia";
import { store } from "/@/store";
import { PageEnum } from "/@/enums/PageEnum";
import { REFRESH_TOKEN_KEY, ROLES_INFO_KEY, ROLES_KEY, TOKEN_KEY, USER_INFO_KEY } from "/@/enums/CacheEnum";
import { getAuthCache, setAuthCache } from "/@/utils/auth";
import { SsoUser, LoginParams, RoleInfo } from "/@/api/sys/model/UserModel";
import { doLogout, getUserInfo, loginApi } from "/@/api/sys/User";
import { useI18n } from "/@/hooks/web/UseI18n";
import { useMessage } from "/@/hooks/web/UseMessage";
import { router } from "/@/router";
import { usePermissionStore } from "/@/store/modules/Permission";
import { isArray } from "/@/utils/Is";
import { h } from "vue";

interface UserState {
  userInfo: Nullable<SsoUser>;
  token?: string;
  refreshToken?: string;
  roleInfoList: RoleInfo[];
  roleList: Set<string>,
  sessionTimeout?: boolean;
  lastUpdateTime: number;
}

export const useUserStore = defineStore({
  id: "app-user",
  state: (): UserState => ({
    // 用户信息
    userInfo: null,
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
    // 最后获取时间
    lastUpdateTime: 0
  }),
  getters: {
    getUserInfo(): SsoUser {
      return this.userInfo || getAuthCache<SsoUser>(USER_INFO_KEY);
    },
    getToken(): string {
      return this.token || getAuthCache<string>(TOKEN_KEY);
    },
    getRoleInfoList(): RoleInfo[] {
      return this.roleInfoList.length > 0 ? this.roleInfoList : getAuthCache<RoleInfo[]>(ROLES_KEY);
    },
    getRoleList(): Set<string> {
      return this.roleList.size > 0 ? this.roleList : getAuthCache<Set<string>>(ROLES_KEY);
    },
    getSessionTimeout(): boolean {
      return !!this.sessionTimeout;
    },
    getLastUpdateTime(): number {
      return this.lastUpdateTime;
    }
  },
  actions: {
    setToken(info: string | undefined) {
      this.token = info ? info : ""; // for null or undefined value
      setAuthCache(TOKEN_KEY, info);
    },
    setRefreshToken(refreshToken: string | undefined) {
      this.refreshToken = refreshToken ? refreshToken : "";
      setAuthCache(REFRESH_TOKEN_KEY, refreshToken);
    },
    setRoleInfoList(roleList: RoleInfo[]) {
      this.roleInfoList = roleList;
      setAuthCache(ROLES_INFO_KEY, roleList);
    },
    setRoleList(roleList: Set<string>) {
      this.roleList = roleList;
      setAuthCache(ROLES_KEY, roleList);
    },
    setUserInfo(info: SsoUser | null) {
      this.userInfo = info;
      this.lastUpdateTime = new Date().getTime();
      setAuthCache(USER_INFO_KEY, info);
    },
    setSessionTimeout(flag: boolean) {
      this.sessionTimeout = flag;
    },
    resetState() {
      this.userInfo = null;
      this.token = "";
      this.roleList = new Set<string>();
      this.sessionTimeout = false;
    },
    /**
     * @description: login
     */
    async login(
      params: LoginParams & {
        goHome?: boolean;
        mode?: MessageMode;
      }
    ): Promise<SsoUser | null> {
      try {
        const { goHome = true, mode, ...loginParams } = params;
        const result = await loginApi(loginParams, mode);
        const { access_token, refresh_token } = result;
        this.setToken(access_token);
        this.setRefreshToken(refresh_token);
        return this.afterLoginAction(goHome);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async afterLoginAction(goHome?: boolean): Promise<SsoUser | null> {
      if (!this.getToken) return null;
      // 获取用户信息
      const userInfo = await this.getUserInfoAction();
      const sessionTimeout = this.sessionTimeout;
      if (sessionTimeout) {
        this.setSessionTimeout(false);
      } else {
        const permissionStore = usePermissionStore();
        permissionStore.setPermissions(userInfo?.permissions ?? new Set());
        if (!permissionStore.isDynamicAddedRoute) {
          await permissionStore.addRouter(router);
        }
        goHome && (await router.replace(permissionStore.homePath));
      }
      return userInfo;
    },
    async getUserInfoAction(): Promise<SsoUser | null> {
      if (!this.getToken) return null;
      const userInfo = await getUserInfo();
      const { userRoles = [] } = userInfo;
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
      return userInfo;
    },
    /**
     * @description: logout
     */
    async logout(goLogin = false) {
      if (this.getToken) {
        try {
          await doLogout();
        } catch {
          console.log("注销Token失败");
        }
      }
      this.setToken(undefined);
      this.setSessionTimeout(false);
      this.setUserInfo(null);
      goLogin && router.push(PageEnum.BASE_LOGIN);
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
          await this.logout(true);
        }
      });
    }
  }
});

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}
