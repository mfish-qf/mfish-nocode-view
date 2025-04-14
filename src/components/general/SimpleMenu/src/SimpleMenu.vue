<template>
  <MfishMenu
    v-bind="getBindValues"
    :active-name="menuState.activeName"
    :open-names="getOpenKeys"
    :class="prefixCls"
    :active-sub-menu-names="menuState.activeSubMenuNames"
    @select="handleSelect"
  >
    <template v-for="item in items" :key="item.path">
      <SimpleSubMenu :item="item" :parent="true" :collapsed-show-title="collapsedShowTitle" :collapse="collapse" />
    </template>
  </MfishMenu>
</template>
<script lang="ts" setup>
  import type { MenuState } from "./Types";
  import type { Menu as MenuType } from "@mfish/core/src/router/Types";
  import type { RouteLocationNormalizedLoaded } from "vue-router";
  import { computed, ref, unref, reactive, toRefs, watch, PropType, useAttrs } from "vue";
  import { useDesign } from "@mfish/core";
  import MfishMenu from "./components/MfishMenu.vue";
  import SimpleSubMenu from "./SimpleSubMenu.vue";
  import { listenerRouteChange } from "@mfish/core/src/logics/mitt/RouteChange";
  import { propTypes } from "@mfish/core/src/utils/PropTypes";
  import { REDIRECT_NAME } from "@mfish/core/src/router/Constant";
  import { useRouter } from "vue-router";
  import { isFunction, isUrl } from "@mfish/core/src/utils/Is";
  import { openWindow } from "@mfish/core/src/utils";
  import { useOpenKeys } from "./UseOpenKeys";

  defineOptions({ name: "SimpleMenu", inheritAttrs: false });

  const props = defineProps({
    items: {
      type: Array as PropType<MenuType[]>,
      default: () => []
    },
    collapse: propTypes.bool.def(false),
    mixSider: propTypes.bool.def(false),
    theme: propTypes.string,
    accordion: propTypes.bool.def(true),
    collapsedShowTitle: propTypes.bool,
    beforeClickFn: {
      type: Function as PropType<(key: string) => Promise<boolean>>
    },
    isSplitMenu: propTypes.bool
  });
  const emit = defineEmits(["menuClick"]);
  const attrs = useAttrs();

  const currentActiveMenu = ref("");
  const isClickGo = ref(false);

  const menuState = reactive<MenuState>({
    activeName: "",
    openNames: [],
    activeSubMenuNames: []
  });

  const { currentRoute } = useRouter();
  const { prefixCls } = useDesign("simple-menu");
  const { items, accordion, mixSider, collapse } = toRefs(props);

  const { setOpenKeys, getOpenKeys } = useOpenKeys(menuState, items, accordion, mixSider, collapse);

  const getBindValues = computed(() => ({ ...attrs, ...props }));

  watch(
    () => props.collapse,
    (collapse) => {
      if (collapse) {
        menuState.openNames = [];
      } else {
        setOpenKeys(currentRoute.value.path);
      }
    },
    { immediate: true }
  );

  watch(
    () => props.items,
    () => {
      if (!props.isSplitMenu) {
        return;
      }
      setOpenKeys(currentRoute.value.path);
    },
    { flush: "post" }
  );

  listenerRouteChange((route) => {
    if (route.name === REDIRECT_NAME) return;
    currentActiveMenu.value = route.meta?.currentActiveMenu as string;
    handleMenuChange(route);
    if (unref(currentActiveMenu)) {
      menuState.activeName = unref(currentActiveMenu);
      setOpenKeys(unref(currentActiveMenu));
    }
  });

  async function handleMenuChange(route?: RouteLocationNormalizedLoaded) {
    if (unref(isClickGo)) {
      isClickGo.value = false;
      return;
    }
    const path = (route || unref(currentRoute)).path;
    menuState.activeName = path;
    setOpenKeys(path).then();
  }

  async function handleSelect(key: string) {
    if (isUrl(key)) {
      openWindow(key);
      return;
    }
    const { beforeClickFn } = props;
    if (beforeClickFn && isFunction(beforeClickFn)) {
      const flag = await beforeClickFn(key);
      if (!flag) return;
    }

    emit("menuClick", key);

    isClickGo.value = true;
    setOpenKeys(key).then();
    menuState.activeName = key;
  }
</script>
<style lang="less">
  @import "./index.less";
</style>
