<template>
  <AMenu
    :selected-keys="menuState.selectedKeys"
    :default-selected-keys="menuState.defaultSelectedKeys"
    :mode="mode"
    :open-keys="getOpenKeys"
    :inline-indent="inlineIndent"
    :theme="theme"
    @open-change="handleOpenChange"
    :class="getMenuClass"
    @click="handleMenuClick"
    :sub-menu-open-delay="0.1"
    v-bind="getInlineCollapseOptions"
  >
    <template v-for="item in items" :key="item.path">
      <BasicSubMenuItem :item="item" :theme="theme" :is-horizontal="isHorizontal" />
    </template>
  </AMenu>
</template>
<script lang="ts" setup>
  import type { MenuState } from "./Types";
  import { computed, reactive, ref, toRefs, unref, watch } from "vue";
  import { Menu as AMenu, MenuProps } from "ant-design-vue";
  import BasicSubMenuItem from "./components/BasicSubMenuItem.vue";
  import { MenuModeEnum, MenuTypeEnum } from "@/enums/MenuEnum";
  import { useOpenKeys } from "./UseOpenKeys";
  import { RouteLocationNormalizedLoaded, useRouter } from "vue-router";
  import { isFunction } from "@/utils/Is";
  import { basicProps } from "./Props";
  import { useMenuSetting } from "@/hooks/setting/UseMenuSetting";
  import { REDIRECT_NAME } from "@/router/Constant";
  import { useDesign } from "@/hooks/web/UseDesign";
  import { getCurrentParentPath } from "@/router/menus";
  import { listenerRouteChange } from "@/logics/mitt/RouteChange";
  import { getAllParentPath } from "@/router/helper/MenuHelper";

  defineOptions({ name: "BasicMenu" });
  const props = defineProps(basicProps);
  const emit = defineEmits(["menuClick"]);

  const isClickGo = ref(false);
  const currentActiveMenu = ref("");

  const menuState = reactive<MenuState>({
    defaultSelectedKeys: [],
    openKeys: [],
    selectedKeys: [],
    collapsedOpenKeys: []
  });

  const { prefixCls } = useDesign("basic-menu");
  const { items, mode, accordion } = toRefs(props);

  const { getCollapsed, getTopMenuAlign, getSplit } = useMenuSetting();

  const { currentRoute } = useRouter();

  const { handleOpenChange, setOpenKeys, getOpenKeys } = useOpenKeys(menuState, items, mode as any, accordion);

  const getIsTopMenu = computed(() => {
    const { type, mode } = props;

    return (
      (type === MenuTypeEnum.TOP_MENU && mode === MenuModeEnum.HORIZONTAL) || (props.isHorizontal && unref(getSplit))
    );
  });

  const getMenuClass = computed(() => {
    const align = props.isHorizontal && unref(getSplit) ? "start" : unref(getTopMenuAlign);
    return [
      prefixCls,
      `justify-${align}`,
      {
        [`${prefixCls}__second`]: !props.isHorizontal && unref(getSplit),
        [`${prefixCls}__sidebar-hor`]: unref(getIsTopMenu)
      }
    ];
  });

  const getInlineCollapseOptions = computed(() => {
    const isInline = props.mode === MenuModeEnum.INLINE;

    const inlineCollapseOptions: { inlineCollapsed?: boolean } = {};
    if (isInline) {
      inlineCollapseOptions.inlineCollapsed = props.mixSider ? false : unref(getCollapsed);
    }
    return inlineCollapseOptions;
  });

  listenerRouteChange((route) => {
    if (route.name === REDIRECT_NAME) return;
    handleMenuChange(route);
    currentActiveMenu.value = route.meta?.currentActiveMenu as string;

    if (unref(currentActiveMenu)) {
      menuState.selectedKeys = [unref(currentActiveMenu)];
      setOpenKeys(unref(currentActiveMenu));
    }
  });

  !props.mixSider &&
    watch(
      () => props.items,
      () => {
        handleMenuChange();
      }
    );

  const handleMenuClick: MenuProps["onClick"] = async ({ key }) => {
    const { beforeClickFn } = props;
    if (beforeClickFn && isFunction(beforeClickFn)) {
      const flag = await beforeClickFn(key as string);
      if (!flag) return;
    }
    emit("menuClick", key);

    isClickGo.value = true;
    menuState.selectedKeys = [key];
  };

  async function handleMenuChange(route?: RouteLocationNormalizedLoaded) {
    if (unref(isClickGo)) {
      isClickGo.value = false;
      return;
    }
    const path = (route || unref(currentRoute)).meta?.currentActiveMenu || (route || unref(currentRoute)).path;
    setOpenKeys(path).then();
    if (unref(currentActiveMenu)) return;
    if (props.isHorizontal && unref(getSplit)) {
      const parentPath = await getCurrentParentPath(path);
      menuState.selectedKeys = [parentPath];
    } else {
      menuState.selectedKeys = getAllParentPath(props.items, path);
    }
  }
</script>
<style lang="less">
  @import "./index.less";
</style>
