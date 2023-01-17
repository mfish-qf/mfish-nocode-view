<!--
 @description:oauth2认证页面
 @author: qiufeng
 @date: 2023/1/17 17:38
-->
<template>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Oauth2"
});
</script>
<script lang="ts" setup>
import { onBeforeMount } from "vue";
import { oauth2Config } from "/@/settings/LoginSetting";
import { useUserStore } from "/@/store/modules/User";
import { useMessage } from "/@/hooks/web/UseMessage";
import { useI18n } from "/@/hooks/web/UseI18n";
import { useRouter, useRoute } from "vue-router";

const userStore = useUserStore();
const { notification } = useMessage();
const { t } = useI18n();
const code = useRoute().query.code as string;
const router = useRouter();
onBeforeMount(() => {
  if (code) {
    handleLogin();
  } else {
    router.push("/login");
  }
});

function handleLogin() {
  userStore.login({
    client_id: oauth2Config.client_id,
    client_secret: oauth2Config.client_secret,
    grant_type: "authorization_code",
    redirect_uri: oauth2Config.redirect_uri,
    code: code,
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
}
</script>