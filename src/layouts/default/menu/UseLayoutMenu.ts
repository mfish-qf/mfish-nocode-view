import type { Menu } from "/@/router/Types";
import type { Ref } from "vue";
import { watch, unref, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { MenuSplitTyeEnum } from "/@/enums/MenuEnum";
import { useThrottleFn } from "@vueuse/core";
import { useMenuSetting } from "/@/hooks/setting/UseMenuSetting";
import { getChildrenMenus, getCurrentParentPath, getMenus, getShallowMenus } from "/@/router/menus";
import { usePermissionStore } from "/@/store/modules/Permission";
import { useAppInject } from "/@/hooks/web/UseAppInject";

export function useSplitMenu(splitType: Ref<MenuSplitTyeEnum>) {
  // Menu array
  const menusRef = ref<Menu[]>([]);
  const { currentRoute } = useRouter();
  const { getIsMobile } = useAppInject();
  const permissionStore = usePermissionStore();
  const { setMenuSetting, getIsHorizontal, getSplit } = useMenuSetting();

  const throttleHandleSplitLeftMenu = useThrottleFn(handleSplitLeftMenu, 50);

  const splitNotLeft = computed(
    () => unref(splitType) !== MenuSplitTyeEnum.LEFT && !unref(getIsHorizontal)
  );

  const getSplitLeft = computed(
    () => !unref(getSplit) || unref(splitType) !== MenuSplitTyeEnum.LEFT
  );

  const getSpiltTop = computed(() => unref(splitType) === MenuSplitTyeEnum.TOP);

  const normalType = computed(() => {
    return unref(splitType) === MenuSplitTyeEnum.NONE || !unref(getSplit);
  });

  watch(
    [() => unref(currentRoute).path, () => unref(splitType)],
    async ([path]: [string, MenuSplitTyeEnum]) => {
      if (unref(splitNotLeft) || unref(getIsMobile)) return;

      const { meta } = unref(currentRoute);
      const currentActiveMenu = meta.currentActiveMenu as string;
      let parentPath = await getCurrentParentPath(path);
      if (!parentPath) {
        parentPath = await getCurrentParentPath(currentActiveMenu);
      }
      parentPath && throttleHandleSplitLeftMenu(parentPath);
    },
    {
      immediate: true
    }
  );

  // Menu changes
  watch(
    [() => permissionStore.getLastBuildMenuTime, () => permissionStore.getMenuList],
    () => {
      getMenuList().then();
    },
    {
      immediate: true
    }
  );

  // split Menu changes
  watch(
    () => getSplit.value,
    () => {
      if (unref(splitNotLeft)) return;
      getMenuList().then();
    }
  );

  // Handle left menu split
  async function handleSplitLeftMenu(parentPath: string) {
    if (unref(getSplitLeft) || unref(getIsMobile)) return;

    // spilt mode left
    const children = await getChildrenMenus(parentPath);

    if (!children || !children.length) {
      setMenuSetting({ hidden: true });
      menusRef.value = [];
      return;
    }

    setMenuSetting({ hidden: false });
    menusRef.value = children;
  }

  // get menus
  async function getMenuList() {
    // normal mode
    if (unref(normalType) || unref(getIsMobile)) {
      menusRef.value = getMenus();
      return;
    }

    // split-top
    if (unref(getSpiltTop)) {
      const shallowMenus = await getShallowMenus();
      menusRef.value = shallowMenus;
      return;
    }
  }

  return { menusRef };
}
