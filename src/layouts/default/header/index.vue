<template>
  <AHeader :class="getHeaderClass">
    <!-- left start -->
    <div :class="`${prefixCls}-left`">
      <!-- logo -->
      <AppLogo
        v-if="getShowHeaderLogo || getIsMobile"
        :class="`${prefixCls}-logo`"
        :theme="getHeaderTheme"
        :style="getLogoWidth"
      />
      <LayoutTrigger
        v-if="(getShowContent && getShowHeaderTrigger && !getSplit && !getIsMixSidebar) || getIsMobile"
        :theme="getHeaderTheme"
        :sider="false"
      />
      <LayoutBreadcrumb v-if="getShowContent && getShowBread" :theme="getHeaderTheme" />
    </div>
    <!-- left end -->

    <!-- menu start -->
    <div :class="`${prefixCls}-menu`" v-if="getShowTopMenu && !getIsMobile">
      <LayoutMenu :is-horizontal="true" :theme="getHeaderTheme" :split-type="getSplitType" :menu-mode="getMenuMode" />
    </div>
    <!-- menu-end -->

    <!-- action  -->
    <div :class="`${prefixCls}-action`">
      <TenantDropDown :theme="getHeaderTheme" />
      <UserDropDown :theme="getHeaderTheme" />
      <Divider type="vertical" />
      <AppSearch :class="`${prefixCls}-action__item `" v-if="getShowSearch" />
      <ErrorAction v-if="getUseErrorHandle" :class="`${prefixCls}-action__item error-action`" />
      <Notify v-if="getShowNotice" :class="`${prefixCls}-action__item notify-item`" />
      <FullScreen v-if="getShowFullScreen" :class="`${prefixCls}-action__item fullscreen-item`" />
      <AppLocalePicker
        v-if="getShowLocalePicker"
        :reload="true"
        :show-text="false"
        :class="`${prefixCls}-action__item`"
      />
      <AppDarkModeToggle />
      <SettingDrawer v-if="getShowSetting" :class="`m-2 ${prefixCls}-action__item`" />
    </div>
  </AHeader>
</template>
<script lang="ts" setup>
  import { unref, computed } from "vue";
  import { propTypes } from "@/utils/PropTypes";
  import { AppLogo } from "@/components/general/Application";
  import { Divider, Layout } from "ant-design-vue";
  import LayoutMenu from "../menu/index.vue";
  import LayoutTrigger from "../trigger/index.vue";
  import { AppSearch } from "@/components/general/Application";
  import { useHeaderSetting } from "@/hooks/setting/UseHeaderSetting";
  import { useMenuSetting } from "@/hooks/setting/UseMenuSetting";
  import { useRootSetting } from "@/hooks/setting/UseRootSetting";
  import { MenuModeEnum, MenuSplitTyeEnum } from "@/enums/MenuEnum";
  import { SettingButtonPositionEnum } from "@/enums/AppEnum";
  import { AppLocalePicker } from "@/components/general/Application";
  import { UserDropDown, TenantDropDown, LayoutBreadcrumb, FullScreen, Notify, ErrorAction } from "./components";
  import { useAppInject } from "@/hooks/web/UseAppInject";
  import { useDesign } from "@/hooks/web/UseDesign";
  import { createAsyncComponent } from "@/utils/factory/CreateAsyncComponent";
  import { useLocale } from "@/i18n/UseLocale";
  import AppDarkModeToggle from "@/components/general/Application/src/AppDarkModeToggle.vue";
  defineOptions({ name: "LayoutHeader" });
  const props = defineProps({
    fixed: propTypes.bool
  });
  const AHeader = Layout.Header;
  const SettingDrawer = createAsyncComponent(() => import("@/layouts/default/setting/index.vue"), {
    loading: true
  });
  const { prefixCls } = useDesign("layout-header");
  const { getShowTopMenu, getShowHeaderTrigger, getSplit, getIsMixMode, getMenuWidth, getIsMixSidebar } =
    useMenuSetting();
  const { getUseErrorHandle, getShowSettingButton, getSettingButtonPosition } = useRootSetting();

  const {
    getHeaderTheme,
    getShowFullScreen,
    getShowNotice,
    getShowContent,
    getShowBread,
    getShowHeaderLogo,
    getShowHeader,
    getShowSearch
  } = useHeaderSetting();

  const { getShowLocalePicker } = useLocale();

  const { getIsMobile } = useAppInject();

  const getHeaderClass = computed(() => {
    const theme = unref(getHeaderTheme);
    return [
      prefixCls,
      {
        [`${prefixCls}--fixed`]: props.fixed,
        [`${prefixCls}--mobile`]: unref(getIsMobile),
        [`${prefixCls}--${theme}`]: theme
      }
    ];
  });

  const getShowSetting = computed(() => {
    if (!unref(getShowSettingButton)) {
      return false;
    }
    const settingButtonPosition = unref(getSettingButtonPosition);

    if (settingButtonPosition === SettingButtonPositionEnum.AUTO) {
      return unref(getShowHeader);
    }
    return settingButtonPosition === SettingButtonPositionEnum.HEADER;
  });

  const getLogoWidth = computed(() => {
    if (!unref(getIsMixMode) || unref(getIsMobile)) {
      return {};
    }
    const width = unref(getMenuWidth) < 180 ? 180 : unref(getMenuWidth);
    return { width: `${width}px` };
  });

  const getSplitType = computed(() => {
    return unref(getSplit) ? MenuSplitTyeEnum.TOP : MenuSplitTyeEnum.NONE;
  });

  const getMenuMode = computed(() => {
    return unref(getSplit) ? MenuModeEnum.HORIZONTAL : null;
  });
</script>
<style lang="less">
  @import "./index.less";
</style>
