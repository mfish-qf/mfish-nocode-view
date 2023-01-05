import type { LockInfo } from "/#/store";
import { defineStore } from "pinia";
import { LOCK_INFO_KEY } from "/@/enums/CacheEnum";
import { Persistent } from "/@/utils/cache/Persistent";
import { useUserStore } from "./User";

interface LockState {
  lockInfo: Nullable<LockInfo>;
}

export const useLockStore = defineStore({
  id: "app-lock",
  state: (): LockState => ({
    lockInfo: Persistent.getLocal(LOCK_INFO_KEY)
  }),
  getters: {
    getLockInfo(): Nullable<LockInfo> {
      return this.lockInfo;
    }
  },
  actions: {
    setLockInfo(info: LockInfo) {
      this.lockInfo = Object.assign({}, this.lockInfo, info);
      Persistent.setLocal(LOCK_INFO_KEY, this.lockInfo, true);
    },
    resetLockInfo() {
      Persistent.removeLocal(LOCK_INFO_KEY, true);
      this.lockInfo = null;
    },
    // Unlock
    async unLock(password?: string) {
      const userStore = useUserStore();
      if (this.lockInfo?.pwd === password) {
        this.resetLockInfo();
        return true;
      }
      const tryLogin = async () => {
        try {
          const username = userStore.getUserInfo?.account;
          const res = await userStore.login({
            username: username!,
            password: password!,
            client_id: "system",
            client_secret: "system",
            grant_type: "password",
            redirect_uri: "http://baidu.com",
            mode: "none"
          });
          if (res) {
            this.resetLockInfo();
          }
          return res;
        } catch (error) {
          return false;
        }
      };
      return await tryLogin();
    }
  }
});
