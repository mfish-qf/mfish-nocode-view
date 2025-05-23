<template>
  <div :class="`${prefixCls}-dom`" :style="getDomStyle"></div>
  <div
    v-click-outside="handleClickOutside"
    :style="getWrapStyle"
    :class="[
      prefixCls,
      getMenuTheme,
      {
        open: openMenu,
        mini: getCollapsed
      }
    ]"
    v-bind="getMenuEvents"
  >
    <AppLogo :show-title="false" :class="`${prefixCls}-logo`" />
    <LayoutTrigger :class="`${prefixCls}-trigger`" />
    <ScrollContainer>
      <ul :class="`${prefixCls}-module`">
        <li
          :class="[
            `${prefixCls}-module__item `,
            {
              [`${prefixCls}-module__item--active`]: item.path === activePath
            }
          ]"
          v-bind="getItemEvents(item)"
          v-for="item in menuModules"
          :key="item.path"
        >
          <SimpleMenuTag :item="item" collapse-parent dot />
          <Icon
            :class="`${prefixCls}-module__icon`"
            :size="getCollapsed ? 16 : 20"
            :icon="item.icon || (item.meta && item.meta.icon)"
          />
          <p :class="`${prefixCls}-module__name`">
            {{ t(item.name) }}
          </p>
        </li>
      </ul>
    </ScrollContainer>
    <div :class="`${prefixCls}-menu-list`" ref="sideRef" :style="getMenuStyle">
      <div
        v-show="openMenu"
        :class="[
          `${prefixCls}-menu-list__title`,
          {
            show: openMenu
          }
        ]"
      >
        <span class="text"> {{ shortName }}</span>
        <Icon
          :size="16"
          :icon="getMixSideFixed ? 'ri:pushpin-2-fill' : 'ri:pushpin-2-line'"
          class="pushpin"
          @click="handleFixedMenu"
        />
      </div>
      <ScrollContainer :class="`${prefixCls}-menu-list__content`">
        <SimpleMenu :items="childrenMenus" :theme="getMenuTheme" mix-sider @menu-click="handleMenuClick" />
      </ScrollContainer>
      <div v-show="getShowDragBar && openMenu" :class="`${prefixCls}-drag-bar`" ref="dragBarRef"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import type { Menu } from "@mfish/core/router";
  import { getChildrenMenus, getCurrentParentPath, getShallowMenus } from "@mfish/core/router";
  import type { CSSProperties } from "vue";
  import { computed, onMounted, ref, unref, watch } from "vue";
  import type { RouteLocationNormalized } from "vue-router";
  import { ScrollContainer } from "@mfish/core/components/Container";
  import { SimpleMenu, SimpleMenuTag } from "@/components/general/SimpleMenu";
  import { Icon } from "@mfish/core/components/Icon";
  import { AppLogo } from "@/components/general/Application";
  import { externalOpen, useDesign, useGlobSetting, useGo, useI18n, useMenuSetting } from "@mfish/core/hooks";
  import { usePermissionStore } from "@mfish/stores/modules";
  import { useDragLine } from "./UseLayoutSider";
  import { SIDE_BAR_MINI_WIDTH, SIDE_BAR_SHOW_TIT_MINI_WIDTH } from "@mfish/core/enums";
  import { ClickOutside as vClickOutside } from "@mfish/core/directives";
  import { listenerRouteChange } from "@mfish/core/logics/mitt/RouteChange";
  import LayoutTrigger from "../trigger/index.vue";
  import { ElRef, Nullable } from "@mfish/types";

  defineOptions({ name: "LayoutMixSider" });
  const menuModules = ref<Menu[]>([]);
  const activePath = ref("");
  const childrenMenus = ref<Menu[]>([]);
  const openMenu = ref(false);
  const dragBarRef = ref<ElRef>(null);
  const sideRef = ref<ElRef>(null);
  const currentRoute = ref<Nullable<RouteLocationNormalized>>(null);

  const { prefixCls } = useDesign("layout-mix-sider");
  const go = useGo();
  const { t } = useI18n();
  const {
    getMenuWidth,
    getCanDrag,
    getCloseMixSidebarOnChange,
    getMenuTheme,
    getMixSideTrigger,
    getRealWidth,
    getMixSideFixed,
    mixSideHasChildren,
    setMenuSetting,
    getIsMixSidebar,
    getCollapsed
  } = useMenuSetting();

  const { shortName } = useGlobSetting();
  const permissionStore = usePermissionStore();

  useDragLine(sideRef, dragBarRef, true);
  const getMixSideWidth = computed(() => {
    return unref(getCollapsed) ? SIDE_BAR_MINI_WIDTH : SIDE_BAR_SHOW_TIT_MINI_WIDTH;
  });
  const getMenuStyle = computed((): CSSProperties => {
    return {
      width: unref(openMenu) ? `${unref(getMenuWidth)}px` : 0,
      left: `${unref(getMixSideWidth)}px`
    };
  });

  const getIsFixed = computed(() => {
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    mixSideHasChildren.value = unref(childrenMenus).length > 0;
    const isFixed = unref(getMixSideFixed) && unref(mixSideHasChildren);
    if (isFixed) {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      openMenu.value = true;
    }
    return isFixed;
  });

  const getDomStyle = computed((): CSSProperties => {
    const fixedWidth = unref(getIsFixed) ? unref(getRealWidth) : 0;
    const width = `${unref(getMixSideWidth) + fixedWidth}px`;
    return getWrapCommonStyle(width);
  });

  const getWrapStyle = computed((): CSSProperties => {
    const width = `${unref(getMixSideWidth)}px`;
    return getWrapCommonStyle(width);
  });

  const getMenuEvents = computed(() => {
    return unref(getMixSideFixed)
      ? {}
      : {
          onMouseleave: () => {
            setActive(true);
            closeMenu();
          }
        };
  });

  const getShowDragBar = computed(() => unref(getCanDrag));

  onMounted(async () => {
    menuModules.value = await getShallowMenus();
  });

  // Menu changes
  watch(
    [() => permissionStore.getLastBuildMenuTime, () => permissionStore.getMenuList],
    async () => {
      menuModules.value = await getShallowMenus();
    },
    {
      immediate: true
    }
  );

  listenerRouteChange((route) => {
    currentRoute.value = route;
    setActive(true);
    if (unref(getCloseMixSidebarOnChange)) {
      closeMenu();
    }
  });

  function getWrapCommonStyle(width: string): CSSProperties {
    return {
      width,
      maxWidth: width,
      minWidth: width,
      flex: `0 0 ${width}`
    };
  }

  // Process module menu click
  async function handleModuleClick(path: string, hover = false) {
    const children = await getChildrenMenus(path);
    if (unref(activePath) === path) {
      if (hover) {
        if (!unref(openMenu)) {
          openMenu.value = true;
        }
      } else {
        if (unref(openMenu)) {
          closeMenu();
        } else {
          openMenu.value = true;
        }
      }
      if (!unref(openMenu)) {
        setActive().then();
      }
    } else {
      openMenu.value = true;
      activePath.value = path;
    }

    if (!children || children.length === 0) {
      if (!hover) go(path);
      childrenMenus.value = [];
      closeMenu();
      return;
    }
    childrenMenus.value = children;
  }

  // Set the currently active menu and submenu
  async function setActive(setChildren = false) {
    const path = currentRoute.value?.path;
    if (!path) return;
    activePath.value = await getCurrentParentPath(path);
    // hanldeModuleClick(parentPath);
    if (unref(getIsMixSidebar)) {
      const activeMenu = unref(menuModules).find((item) => item.path === unref(activePath));
      const p = activeMenu?.path;
      if (p) {
        const children = await getChildrenMenus(p);
        if (setChildren) {
          childrenMenus.value = children;

          if (unref(getMixSideFixed)) {
            openMenu.value = children.length > 0;
          }
        }
        if (children.length === 0) {
          childrenMenus.value = [];
        }
      }
    }
  }

  function handleMenuClick(path: string) {
    if (!externalOpen(path)) {
      go(path);
    }
  }

  function handleClickOutside() {
    setActive(true);
    closeMenu();
  }

  function getItemEvents(item: Menu) {
    if (unref(getMixSideTrigger) === "hover") {
      return {
        onMouseenter: () => handleModuleClick(item.path, true),
        onClick: async () => {
          const children = await getChildrenMenus(item.path);
          if (item.path && (!children || children.length === 0)) go(item.path);
        }
      };
    }
    return {
      onClick: () => handleModuleClick(item.path)
    };
  }

  function handleFixedMenu() {
    setMenuSetting({
      mixSideFixed: !unref(getIsFixed)
    });
  }

  // Close menu
  function closeMenu() {
    if (!unref(getIsFixed)) {
      openMenu.value = false;
    }
  }
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-layout-mix-sider";
  @width: 80px;
  .@{prefix-cls} {
    position: fixed;
    top: 0;
    left: 0;
    z-index: @layout-mix-sider-fixed-z-index;
    height: 100%;
    overflow: hidden;
    background-color: @sider-bg-color;
    transition: all 0.2s ease 0s;

    &-dom {
      height: 100%;
      overflow: hidden;
      transition: all 0.2s ease 0s;
    }

    &-logo {
      display: flex;
      height: @header-height;
      padding-left: 0 !important;
      justify-content: center;

      img {
        width: @logo-width;
        height: @logo-width;
      }
    }

    &.light {
      &.open {
        > .scrollbar {
          border-right: 1px solid rgb(238 238 238);
        }
      }

      .@{prefix-cls}-module {
        &__item {
          font-weight: normal;
          color: rgb(0 0 0 / 65%);

          &--active {
            font-weight: 700;
            color: @button-primary-color;
          }
        }
      }

      .@{prefix-cls}-menu-list {
        &__content {
          box-shadow: 0 0 4px 0 rgb(0 0 0 / 10%);
        }

        &__title {
          font-size: 16px;

          .pushpin {
            color: rgb(0 0 0 / 25%);

            &:hover {
              color: rgb(0 0 0 / 55%);
            }
          }
        }
      }
    }

    &.open {
      > .scrollbar {
        border-right: 1px solid @sider-bg-color;
      }
    }

    .@{prefix-cls}-menu-list {
      background-color: @sider-bg-color;

      &__title {
        border-bottom: none;
        border-bottom: 1px solid @sider-bg-color;
      }
    }

    &.open {
      > .scrollbar {
        border-right: 1px solid @sider-bg-color;
      }
    }

    > .scrollbar {
      height: calc(100% - @header-height - 38px);
    }

    &.mini &-module {
      &__name {
        display: none;
      }

      &__icon {
        margin-bottom: 0;
      }
    }

    &-module {
      position: relative;
      padding-top: 1px;
      display: contents;

      &__item {
        position: relative;
        padding: 12px 0;
        color: rgb(255 255 255 / 65%);
        text-align: center;
        cursor: pointer;
        transition: all 0.25s ease;

        &:hover {
          transform: scale(1.05);
          transform-origin: left;
          background-color: @sider-darken-bg-color;
          color: @button-primary-color !important;
        }

        &--active {
          font-weight: 700;

          &::before {
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background-color: @button-primary-color !important;
            content: "";
          }
        }
      }

      &__icon {
        margin-bottom: 8px;
        font-size: 24px;
        transition: all 0.2s;
      }

      &__name {
        margin-bottom: 0;
        font-size: 12px;
        transition: all 0.2s;
      }
    }

    &-trigger {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      font-size: 14px;
      color: rgb(255 255 255 / 65%);
      text-align: center;
      cursor: pointer;
      background-color: @trigger-dark-bg-color;
      height: 36px;
      line-height: 36px;
    }

    &.light &-trigger {
      color: rgb(0 0 0 / 65%);
    }

    &-menu-list {
      position: fixed;
      top: 0;
      height: 100%;
      transition: all 0.3s ease-in-out;

      &__title {
        display: flex;
        height: @header-height;
        font-size: 16px;
        font-weight: bold;
        color: @button-primary-color;
        border-bottom: 1px solid rgb(238 238 238);
        opacity: 0;
        align-items: center;
        justify-content: space-between;

        &.show {
          min-width: 120px;
          opacity: 100%;
          transition: all 0.3s ease-in-out;
        }

        .pushpin {
          margin-right: 6px;
          color: rgb(255 255 255 / 65%);
          cursor: pointer;

          &:hover {
            color: #fff;
          }
        }
      }

      &__content {
        height: calc(100% - @header-height) !important;

        .scrollbar__wrap {
          height: 100%;
          overflow-x: hidden;
        }

        .scrollbar__bar.is-horizontal {
          display: none;
        }

        .ant-menu {
          height: 100%;
        }

        .ant-menu-inline,
        .ant-menu-vertical,
        .ant-menu-vertical-left {
          border-right: 1px solid transparent;
        }
      }
    }

    &-drag-bar {
      position: absolute;
      top: 50px;
      right: -1px;
      width: 1px;
      height: calc(100% - 50px);
      cursor: ew-resize;
      background-color: #f8f8f9;
      border-top: none;
      border-bottom: none;
      box-shadow: 0 0 4px 0 rgb(28 36 56 / 15%);
    }
  }
</style>
