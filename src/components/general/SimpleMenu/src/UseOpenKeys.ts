import type { Menu as MenuType } from "@mfish/core/src/router/Types";
import type { MenuState } from "./Types";
import { computed, Ref, toRaw } from "vue";
import { unref } from "vue";
import { uniq } from "lodash-es";
import { getAllParentPath } from "@mfish/core/src/router/helper/MenuHelper";
import { useTimeoutFn } from "@mfish/core/src/hooks/core/UseTimeout";
import { useDebounceFn } from "@vueuse/core";

export function useOpenKeys(
  menuState: MenuState,
  menus: Ref<MenuType[]>,
  accordion: Ref<boolean>,
  mixSider: Ref<boolean>,
  collapse: Ref<boolean>
) {
  const debounceSetOpenKeys = useDebounceFn(setOpenKeys, 50);

  async function setOpenKeys(path: string) {
    const native = !mixSider.value;
    const menuList = toRaw(menus.value);
    useTimeoutFn(
      () => {
        if (menuList?.length === 0) {
          menuState.activeSubMenuNames = [];
          menuState.openNames = [];
          return;
        }
        const keys = getAllParentPath(menuList, path);

        menuState.openNames = unref(accordion) ? keys : uniq([...menuState.openNames, ...keys]);
        menuState.activeSubMenuNames = menuState.openNames;
      },
      30,
      native
    );
  }

  const getOpenKeys = computed(() => {
    return unref(collapse) ? [] : menuState.openNames;
  });

  return { setOpenKeys: debounceSetOpenKeys, getOpenKeys };
}
