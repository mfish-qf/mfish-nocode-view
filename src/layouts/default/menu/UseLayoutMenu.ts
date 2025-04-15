import type { Menu } from "@mfish/core/router";
import { getChildrenMenus, getCurrentParentPath, getMenus, getShallowMenus } from "@mfish/core/router";
import type { Ref } from "vue";
import { computed, ref, unref, watch } from "vue";
import { useRouter } from "vue-router";
import { MenuSplitTyeEnum } from "@mfish/core/enums";
import { useThrottleFn } from "@vueuse/core";
import { useMenuSetting } from "@mfish/core/hooks";
import { usePermissionStore } from "@mfish/stores/modules";
import { useAppInject } from "@/hooks/UseAppInject";

export function useSplitMenu(splitType: Ref<MenuSplitTyeEnum>) {
  // Menu array
  const menusRef = ref<Menu[]>([]);
  const { currentRoute } = useRouter();
  const { getIsMobile } = useAppInject();
  const permissionStore = usePermissionStore();
  const { setMenuSetting, getIsHorizontal, getSplit } = useMenuSetting();

  const throttleHandleSplitLeftMenu = useThrottleFn(handleSplitLeftMenu, 50);

  const splitNotLeft = computed(() => unref(splitType) !== MenuSplitTyeEnum.LEFT && !unref(getIsHorizontal));

  const getSplitLeft = computed(() => !unref(getSplit) || unref(splitType) !== MenuSplitTyeEnum.LEFT);

  const getSpiltTop = computed(() => unref(splitType) === MenuSplitTyeEnum.TOP);

  const normalType = computed(() => {
    return unref(splitType) === MenuSplitTyeEnum.NONE || !unref(getSplit);
  });

  watch(
    [() => unref(currentRoute).path, () => unref(splitType)],
    async ([path]: [string, MenuSplitTyeEnum]) => {
      if (unref(splitNotLeft) || unref(getIsMobile)) {
        getMenuList().then();
        return;
      }

      const { meta } = unref(currentRoute);
      const currentActiveMenu = meta.currentActiveMenu as string;
      let parentPath = await getCurrentParentPath(path);
      if (!parentPath) {
        parentPath = await getCurrentParentPath(currentActiveMenu);
      }
      parentPath && throttleHandleSplitLeftMenu(parentPath).then();
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
      menusRef.value = await getShallowMenus();
    }
  }

  return { menusRef };
}
