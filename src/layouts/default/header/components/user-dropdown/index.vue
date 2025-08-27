<template>
  <Dropdown placement="bottomLeft" :overlay-class-name="`${prefixCls}-dropdown-overlay`">
    <span :class="[prefixCls, `${prefixCls}--${theme}`]" class="flex">
      <img :class="`${prefixCls}__header`" :src="userImg" alt="用户图像" />
      <span :class="`${prefixCls}__info hidden md:block`">
        <span :class="`${prefixCls}__name`" class="truncate">
          {{ getUserInfo.nickname }}
        </span>
      </span>
    </span>
    <template #overlay>
      <AMenu @click="handleMenuClick">
        <MenuItem key="userInfo" :text="t('layout.header.dropdownUserInfo')" icon="ion:person" />
        <MenuItem
          key="doc"
          :text="t('layout.header.dropdownItemDoc')"
          icon="ion:document-text-outline"
          v-if="getShowDoc"
        />
        <MenuDivider />
        <MenuItem
          v-if="getUseLockPage"
          key="lock"
          :text="t('layout.header.tooltipLock')"
          icon="ion:lock-closed-outline"
        />
        <MenuItem key="changePwd" :text="t('layout.header.dropdownItemChangePwd')" icon="ion:key-outline" />
        <MenuDivider />
        <MenuItem key="logout" :text="t('layout.header.dropdownItemLoginOut')" icon="ion:power-outline" />
      </AMenu>
    </template>
  </Dropdown>
  <LockAction @register="register" />
  <PasswordModal @register="registerPwd" />
</template>
<script lang="ts" setup>
  import { Dropdown, Menu as AMenu } from "ant-design-vue";
  import type { MenuInfo } from "ant-design-vue/lib/menu/src/interface";
  import { onBeforeMount, reactive, ref, toRaw, unref } from "vue";
  import { DOC_URL } from "@mfish/core/settings/SiteSetting";
  import { useUserStore } from "@mfish/stores/modules";
  import { useDesign, useGo, useHeaderSetting, useI18n } from "@mfish/core/hooks";
  import { useModal } from "@mfish/core/components/Modal";
  import { propTypes } from "@mfish/core/utils/PropTypes";
  import { openWindow } from "@mfish/core/utils";
  import { createAsyncComponent } from "@mfish/core/utils/factory/CreateAsyncComponent";
  import PasswordModal from "@/views/sys/account/PasswordModal.vue";
  import { setHeaderImg } from "@mfish/core/utils/file/FileUtils";
  import { sleep } from "@mfish/core/utils/Utils";

  type MenuEvent = "logout" | "doc" | "lock" | "changePwd" | "userInfo";

  defineOptions({ name: "UserDropdown" });
  defineProps({
    theme: propTypes.oneOf(["dark", "light"])
  });
  const MenuItem = createAsyncComponent(() => import("./DropMenuItem.vue"));
  const MenuDivider = AMenu.Divider;
  const LockAction = createAsyncComponent(() => import("../lock/LockModal.vue"));
  const { prefixCls } = useDesign("header-user-dropdown");
  const { t } = useI18n();
  const { getShowDoc, getUseLockPage } = useHeaderSetting();
  const userStore = useUserStore();
  const getUserInfo = reactive<{ nickname?: string; id?: string }>({
    nickname: "",
    id: ""
  });
  const userImg = ref("");
  onBeforeMount(async () => {
    let userInfo = toRaw(userStore.getUserInfo);
    while (!userInfo) {
      userInfo = toRaw(userStore.getUserInfo);
      await sleep(500);
    }
    getUserInfo.id = userInfo.id;
    getUserInfo.nickname = userInfo.nickname || userInfo.account;
    setHeaderImg(userInfo.headImgUrl, userImg);
  });
  const [register, { openModal }] = useModal();
  const [registerPwd, { openModal: openPwdModal }] = useModal();
  const go = useGo();

  function handleLock() {
    openModal(true);
  }

  //  login out
  function handleLoginOut() {
    userStore.confirmLoginOut();
  }

  // open doc
  function openDoc() {
    openWindow(DOC_URL);
  }

  function changePwd() {
    openPwdModal(true, { userId: unref(getUserInfo).id });
  }

  function handleMenuClick(e: MenuInfo) {
    switch (e.key as MenuEvent) {
      case "logout": {
        handleLoginOut();
        break;
      }
      case "doc": {
        openDoc();
        break;
      }
      case "lock": {
        handleLock();
        break;
      }
      case "changePwd": {
        changePwd();
        break;
      }
      case "userInfo": {
        go("/tenant/info/1");
        break;
      }
    }
  }
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-header-user-dropdown";
  @import "../dropdown.less";
</style>
