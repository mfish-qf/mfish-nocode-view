<!--
 @description:gitee认证登录
 @author: mfish
 @date: 2025/2/7
-->
<template>
  <Oauth2 :login-handler="handleLogin" />
</template>

<script lang="ts" setup>
  import { useRouter, useRoute } from "vue-router";
  import { defHttp } from "@/utils/http/axios";
  import { useMessage } from "@/hooks/web/UseMessage";
  import Oauth2 from "@/views/sys/login/Oauth2.vue";

  const { createErrorModal } = useMessage();
  const route = useRoute();
  const code = route.query.code as string;
  const router = useRouter();

  function handleLogin() {
    const onOk = (modal) => {
      modal.destroy();
      router.push("/login");
    };
    defHttp
      .get<number>({ url: `/oauth2/gitee/token/${code}` })
      .then((res) => {
        //res 1 未star项目 2 登录成功
        if (res === 1) {
          const modal = createErrorModal({
            title: "登录失败",
            content:
              "请先star项目再重试，项目地址:<a href='https://gitee.com/qiufeng9862/mfish-nocode' target='_blank'>Gitee地址</a>",
            onOk: () => onOk(modal)
          });
        } else {
          router.push("/login");
        }
      })
      .catch((error) => {
        const modal = createErrorModal({
          title: "登录失败",
          content: error,
          onOk: () => onOk(modal)
        });
      });
  }
</script>
