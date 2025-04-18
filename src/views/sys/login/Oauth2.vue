<!--
 @description:oauth2认证页面
 @author: mfish
 @date: 2023/1/17 17:38
-->
<template>
  <div class="app-loading">
    <div class="app-loading-wrap">
      <img src="/resource/img/logo.png" class="app-loading-logo" alt="Logo" />
      <div>
        <span class="dot dot-spin"><i></i><i></i><i></i><i></i></span>
      </div>
      <div class="app-loading-title">{{ shortName }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onBeforeMount } from "vue";
  import { oauth2Config } from "@mfish/core/settings/LoginSetting";
  import { useUserStore } from "@mfish/stores/modules";
  import { useGlobSetting, useI18n, useMessage } from "@mfish/core/hooks";
  import { useRoute, useRouter } from "vue-router";

  const props = defineProps({
    loginHandler: {
      type: Function
    }
  });
  const userStore = useUserStore();
  const { notification } = useMessage();
  const { t } = useI18n();
  const { shortName } = useGlobSetting();
  const route = useRoute();
  const code = route.query.code as string;
  const routeRedirect = route.query.redirect as string;
  const router = useRouter();
  onBeforeMount(() => {
    if (code) {
      if (props.loginHandler) {
        props.loginHandler();
      } else {
        handleLogin();
      }
    } else {
      router.push("/login");
    }
  });

  function handleLogin() {
    let redirectUri = oauth2Config.redirect_uri;
    if (routeRedirect) {
      redirectUri += `?redirect=${routeRedirect}`;
    }
    userStore
      .loginRedirect(
        {
          client_id: oauth2Config.client_id,
          client_secret: oauth2Config.client_secret,
          grant_type: "authorization_code",
          redirect_uri: redirectUri,
          code,
          mode: "modal"
        },
        routeRedirect
      )
      .then((userInfo) => {
        if (userInfo) {
          notification.success({
            message: t("sys.login.loginSuccessTitle"),
            description: `${t("sys.login.loginSuccessDesc")}: ${userInfo?.nickname || userInfo?.account}`,
            duration: 3
          });
        }
      })
      .catch(() => {
        // token获取失败，跳转应急登录页面登录
        router.push("/error-login");
      });
  }
</script>
