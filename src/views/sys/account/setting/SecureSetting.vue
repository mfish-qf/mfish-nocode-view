<template>
  <CollapseContainer title="安全设置" :can-expan="false">
    <AList>
      <template v-for="item in secureSettingList" :key="item.key">
        <AListItem>
          <AListItemMeta>
            <template #title>
              {{ item.title }}
            </template>
            <template #description>
              <div>{{ item.description }}</div>
            </template>
          </AListItemMeta>
          <template #actions>
            <AButton type="link" size="small" v-if="item.extra" @click="handleClick(item)" :disabled="item.disabled">
              <template #icon>
                <Icon :icon="item.icon ?? 'ant-design:edit-outlined'" />
              </template>
              {{ item.extra }}
            </AButton>
          </template>
        </AListItem>
      </template>
    </AList>
  </CollapseContainer>
  <PasswordModal @register="registerPwd" />
</template>
<script lang="ts" setup>
  import { Button as AButton, List as AList } from "ant-design-vue";
  import { useUserStore } from "@mfish/stores/modules";
  import { Icon } from "@mfish/core/components/Icon";
  import PasswordModal from "@/views/sys/account/PasswordModal.vue";
  import { useModal } from "@mfish/core/components/Modal";
  import { computed, onBeforeMount, onMounted, ref } from "vue";
  import { getSecureSetting, SsoUser, unbindGitee, unbindGithub } from "@mfish/core/api";
  import { giteeConfig, githubConfig } from "@mfish/core/settings/LoginSetting";
  import { defHttp } from "@mfish/core/utils/http/axios";
  import { useRoute } from "vue-router";
  import { router } from "@mfish/core/router";
  import { CollapseContainer } from "@mfish/core/components/Container";

  const AListItem = AList.Item;
  const AListItemMeta = AListItem.Meta;
  const userStore = useUserStore();
  const userInfo = ref<SsoUser | null>(null);
  const [registerPwd, { openModal: openPwdModal }] = useModal();
  const secureSettingList = computed(() => [
    {
      key: "1",
      title: "账户密码",
      description: "当前密码强度：强",
      extra: "修改"
    },
    {
      key: "2",
      title: "密保手机",
      description: userInfo.value?.phone ? `已绑定手机：${userInfo.value?.phone}` : "未绑定手机",
      extra: "修改",
      disabled: true
    },
    // {
    //   key: "3",
    //   title: "密保问题",
    //   description: "未设置密保问题，密保问题可有效保护账户安全",
    //   extra: "修改"
    // },
    {
      key: "4",
      title: "备用邮箱",
      description: userInfo.value?.email ? `已绑定邮箱：${userInfo.value?.email}` : "未绑定邮箱",
      extra: "修改",
      disabled: true
    },
    {
      key: "5",
      title: "关联GITEE",
      description: userInfo.value?.gitee ? `已绑定 GITEE 账号：${userInfo.value?.gitee}` : "未绑定 GITEE 账号",
      extra: userInfo.value?.gitee ? "解绑" : "绑定",
      icon: userInfo.value?.gitee ? "ant-design:stop-outlined" : "ant-design:link-outlined"
    },
    {
      key: "6",
      title: "关联GITHUB",
      description: userInfo.value?.github ? `已绑定 GITHUB 账号：${userInfo.value?.github}` : "未绑定 GITHUB 账号",
      extra: userInfo.value?.github ? "解绑" : "绑定",
      icon: userInfo.value?.github ? "ant-design:stop-outlined" : "ant-design:link-outlined"
    }
  ]);
  const route = useRoute();
  onBeforeMount(() => {
    const callback = route.query?.callback as string;
    if (callback === "gitee") {
      const code = route.query?.code as string;
      defHttp
        .put<boolean>({ url: `/oauth2/gitee/bind/${code}` })
        .then((res) => {
          if (res) {
            fetch();
          }
        })
        .finally(() => {
          clearUrl();
        });
      return;
    }
    if (callback === "github") {
      const code = route.query?.code as string;
      defHttp
        .put<boolean>({ url: `/oauth2/github/bind/${code}` })
        .then((res) => {
          if (res) {
            fetch();
          }
        })
        .finally(() => {
          clearUrl();
        });
    }
  });

  function clearUrl() {
    router.replace({ query: {} });
  }

  onMounted(() => {
    fetch();
  });
  function fetch() {
    if (userStore.getUserInfo?.id) {
      getSecureSetting(userStore.getUserInfo?.id).then((res) => {
        userInfo.value = res;
      });
    }
  }

  function handleClick(e) {
    switch (e.key) {
      case "1": {
        changePwd();
        break;
      }
      case "5": {
        if (userInfo.value?.id) {
          if (userInfo.value.gitee) {
            unbindGitee(userInfo.value?.id).then(() => {
              fetch();
            });
          } else {
            bindGitee();
          }
        }
        break;
      }
      case "6": {
        if (userInfo.value?.id) {
          if (userInfo.value.github) {
            unbindGithub(userInfo.value?.id).then(() => {
              fetch();
            });
          } else {
            bindGithub();
          }
        }
        break;
      }
      default: {
        break;
      }
    }
  }

  function changePwd() {
    openPwdModal(true, { userId: userInfo.value?.id });
  }
  function bindGitee() {
    globalThis.location.href = `https://gitee.com/oauth/authorize?client_id=${giteeConfig.client_id}&redirect_uri=${giteeConfig.bind_uri}&response_type=code`;
  }
  function bindGithub() {
    globalThis.location.href = `https://github.com/login/oauth/authorize?client_id=${githubConfig.client_id}&redirect_uri=${githubConfig.bind_uri}&response_type=code`;
  }
</script>
