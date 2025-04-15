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
            <AButton type="link" size="small" v-if="item.extra" @click="handleClick(item)">
              <template #icon>
                <Icon icon="ant-design:edit-outlined" />
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
  import { CollapseContainer } from "@mfish/core/components/Container";
  import { ListItem } from "./setting.data";
  import { useUserStore } from "@mfish/stores/modules";
  import { Icon } from "@mfish/core/components/Icon";
  import PasswordModal from "@/views/sys/account/PasswordModal.vue";
  import { useModal } from "@mfish/core/components/Modal";

  const AListItem = AList.Item;
  const AListItemMeta = AListItem.Meta;
  const userStore = useUserStore();
  const userInfo = userStore.getUserInfo;
  const phone = userInfo?.phone?.replace(/(\d{3})\d*(\d{4})/, "$1****$2");
  const email = userInfo?.email?.replace(/(\w)\w*(@\w+\.\w+)/, "$1***$2");
  const [registerPwd, { openModal: openPwdModal }] = useModal();
  const secureSettingList: ListItem[] = [
    {
      key: "1",
      title: "账户密码",
      description: "当前密码强度：强",
      extra: "修改"
    },
    {
      key: "2",
      title: "密保手机",
      description: `已绑定手机：${phone}`,
      extra: "修改"
    },
    {
      key: "3",
      title: "密保问题",
      description: "未设置密保问题，密保问题可有效保护账户安全",
      extra: "修改"
    },
    {
      key: "4",
      title: "备用邮箱",
      description: `已绑定邮箱：${email}`,
      extra: "修改"
    },
    {
      key: "5",
      title: "MFA 设备",
      description: "未绑定 MFA 设备，绑定后，可以进行二次确认",
      extra: "修改"
    }
  ];

  function handleClick(e) {
    switch (e.key) {
      case "1": {
        changePwd();
        break;
      }
      default: {
        break;
      }
    }
  }

  function changePwd() {
    openPwdModal(true, { userId: userInfo?.id });
  }
</script>
