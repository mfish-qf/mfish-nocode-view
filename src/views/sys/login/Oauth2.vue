<!--
 @description:oauth2认证页面
 @author: qiufeng
 @date: 2023/1/17 17:38
-->
<template>
  <div class="app-loading">
    <div class="app-loading-wrap">
      <img src="/resource/img/logo.png" class="app-loading-logo" alt="Logo">
      <div>
        <span class="dot dot-spin"><i></i><i></i><i></i><i></i></span>
      </div>
      <div class="app-loading-title">{{ title }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { onBeforeMount } from "vue";
import { oauth2Config } from "/@/settings/LoginSetting";
import { useUserStore } from "/@/store/modules/User";
import { useMessage } from "/@/hooks/web/UseMessage";
import { useI18n } from "/@/hooks/web/UseI18n";
import { useRouter, useRoute } from "vue-router";
import { useGlobSetting } from "/@/hooks/setting";

export default ({
  name: "Oauth2",
  setup() {
    const userStore = useUserStore();
    const { notification } = useMessage();
    const { t } = useI18n();
    const { title } = useGlobSetting();
    const route = useRoute();
    const code = route.query.code as string;
    const routeRedirect = route.query.redirect as string;
    const router = useRouter();
    onBeforeMount(() => {
      if (code) {
        handleLogin();
      } else {
        router.push("/login");
      }
    });

    function handleLogin() {
      let redirectUri = oauth2Config.redirect_uri;
      if (routeRedirect) {
        redirectUri += `?redirect=${routeRedirect}`;
      }
      userStore.login({
        client_id: oauth2Config.client_id,
        client_secret: oauth2Config.client_secret,
        grant_type: "authorization_code",
        redirect_uri: redirectUri,
        code: code,
        route_redirect: routeRedirect,
        mode: "modal"
      }).then((userInfo) => {
        if (userInfo) {
          notification.success({
            message: t("sys.login.loginSuccessTitle"),
            description: `${t("sys.login.loginSuccessDesc")}: ${userInfo.nickname}`,
            duration: 3
          });
        }
      }).catch(() => {
        router.push("/login");
      });
    };
    return {
      title
    };
  }
});
</script>