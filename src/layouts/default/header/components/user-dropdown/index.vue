<template>
  <Dropdown placement="bottomLeft" :overlayClassName="`${prefixCls}-dropdown-overlay`">
    <span :class="[prefixCls, `${prefixCls}--${theme}`]" class="flex">
      <img :class="`${prefixCls}__header`" :src="getUserInfo.headImgUrl" />
      <span :class="`${prefixCls}__info hidden md:block`">
        <span :class="`${prefixCls}__name  `" class="truncate">
          {{ getUserInfo.nickname }}
        </span>
      </span>
    </span>
    <template #overlay>
      <Menu @click="handleMenuClick">
        <MenuItem
          key="userInfo"
          :text="t('layout.header.dropdownUserInfo')"
          icon="ion:person"
        />
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
        <MenuItem
          key="changePwd"
          :text="t('layout.header.dropdownItemChangePwd')"
          icon="ion:key-outline"
        />
        <MenuDivider />
        <MenuItem
          key="logout"
          :text="t('layout.header.dropdownItemLoginOut')"
          icon="ion:power-outline"
        />
      </Menu>
    </template>
  </Dropdown>
  <LockAction @register="register" />
  <PasswordModal @register="registerPwd"></PasswordModal>
</template>
<script lang="ts">
import { Dropdown, Menu } from "ant-design-vue";
import type { MenuInfo } from "ant-design-vue/lib/menu/src/interface";
import { computed, unref } from "vue";
import { DOC_URL } from "/@/settings/SiteSetting";
import { useUserStore } from "/@/store/modules/User";
import { useHeaderSetting } from "/@/hooks/setting/UseHeaderSetting";
import { useI18n } from "/@/hooks/web/UseI18n";
import { useDesign } from "/@/hooks/web/UseDesign";
import { useModal } from "/@/components/general/Modal";
import headerImg from "/@/assets/images/header.png";
import { propTypes } from "/@/utils/PropTypes";
import { openWindow } from "/@/utils";
import { createAsyncComponent } from "/@/utils/factory/CreateAsyncComponent";
import PasswordModal from "/@/views/sys/account/PasswordModal.vue";
import { useGo } from "/@/hooks/web/UsePage";
import { imageUrl } from "/@/utils/FileUtils";

type MenuEvent = "logout" | "doc" | "lock" | "changePwd" | "userInfo";

export default {
  name: "UserDropdown",
  components: {
    PasswordModal,
    Dropdown,
    Menu,
    MenuItem: createAsyncComponent(() => import("./DropMenuItem.vue")),
    MenuDivider: Menu.Divider,
    LockAction: createAsyncComponent(() => import("../lock/LockModal.vue"))
  },
  props: {
    theme: propTypes.oneOf(["dark", "light"])
  },
  setup() {
    const { prefixCls } = useDesign("header-user-dropdown");
    const { t } = useI18n();
    const { getShowDoc, getUseLockPage } = useHeaderSetting();
    const userStore = useUserStore();
    const getUserInfo = computed(() => {
      const { nickname = "", headImgUrl, id } = userStore.getUserInfo || {};
      return { nickname, headImgUrl: headImgUrl ? imageUrl("/storage/file/" + headImgUrl) : headerImg, id };
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
        case "logout":
          handleLoginOut();
          break;
        case "doc":
          openDoc();
          break;
        case "lock":
          handleLock();
          break;
        case "changePwd":
          changePwd();
          break;
        case "userInfo":
          go("/system/account/setting");
          break;
      }
    }

    return {
      prefixCls,
      t,
      getUserInfo,
      handleMenuClick,
      getShowDoc,
      register,
      getUseLockPage,
      registerPwd
    };
  }
};
</script>
<style lang="less">
@prefix-cls: ~'@{namespace}-header-user-dropdown';

.@{prefix-cls} {
  height: @header-height;
  padding: 0 0 0 10px;
  padding-right: 10px;
  overflow: hidden;
  font-size: 12px;
  cursor: pointer;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }

  &__header {
    border-radius: 50%;
  }

  &__name {
    font-size: 14px;
  }

  &--dark {
    &:hover {
      background-color: @header-dark-bg-hover-color;
    }
  }

  &--light {
    &:hover {
      background-color: @header-light-bg-hover-color;
    }

    .@{prefix-cls}__name {
      color: @text-color-base;
    }

    .@{prefix-cls}__desc {
      color: @header-light-desc-color;
    }
  }

  &-dropdown-overlay {
    .ant-dropdown-menu-item {
      min-width: 160px;
    }
  }
}
</style>
