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
<script lang="ts">
  import { Dropdown, Menu } from "ant-design-vue";
  import type { MenuInfo } from "ant-design-vue/lib/menu/src/interface";
  import { onBeforeMount, reactive, toRaw, unref } from "vue";
  import { DOC_URL } from "/@/settings/SiteSetting";
  import { useUserStore } from "/@/store/modules/User";
  import { useHeaderSetting } from "/@/hooks/setting/UseHeaderSetting";
  import { useI18n } from "/@/hooks/web/UseI18n";
  import { useDesign } from "/@/hooks/web/UseDesign";
  import { useModal } from "/@/components/general/Modal";
  import { propTypes } from "/@/utils/PropTypes";
  import { openWindow } from "/@/utils";
  import { createAsyncComponent } from "/@/utils/factory/CreateAsyncComponent";
  import PasswordModal from "/@/views/sys/account/PasswordModal.vue";
  import { useGo } from "/@/hooks/web/UsePage";
  import { imageSrc } from "/@/utils/FileUtils";
  import { sleep } from "/@/utils/Utils";

  type MenuEvent = "logout" | "doc" | "lock" | "changePwd" | "userInfo";

  export default {
    name: "UserDropdown",
    components: {
      PasswordModal,
      Dropdown,
      AMenu: Menu,
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
      const getUserInfo = reactive<{ nickname?: string; headImgUrl?: string; id?: string }>({
        nickname: "",
        headImgUrl: "",
        id: ""
      });
      onBeforeMount(async () => {
        let userInfo = toRaw(userStore.getUserInfo);
        while (!userInfo) {
          userInfo = toRaw(userStore.getUserInfo);
          await sleep(100);
        }
        getUserInfo.id = userInfo.id;
        getUserInfo.nickname = userInfo.nickname ? userInfo.nickname : userInfo.account;
        imageSrc("/storage/file/" + userInfo.headImgUrl, { errorMessageMode: "none" }).then((img) => {
          getUserInfo.headImgUrl = img ? img : "/resource/img/logo.png";
        });
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
            go("/tenant/info/1");
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
  @prefix-cls: ~"@{namespace}-header-user-dropdown";

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
