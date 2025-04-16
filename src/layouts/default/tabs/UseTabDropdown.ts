import type { TabContentProps } from "./types";
import { MenuEventEnum } from "./types";
import type { DropMenu } from "@mfish/core/components/Dropdown";
import type { ComputedRef } from "vue";
import { computed, reactive, unref } from "vue";
import { useMultipleTabStore } from "@mfish/stores/modules";
import { RouteLocationNormalized, useRouter } from "vue-router";
import { useI18n, useTabs } from "@mfish/core/hooks";
import { Nullable } from "@mfish/types";

export function useTabDropdown(tabContentProps: TabContentProps, getIsTabs: ComputedRef<boolean>) {
  const state = reactive({
    current: null as Nullable<RouteLocationNormalized>,
    currentIndex: 0
  });

  const { t } = useI18n();
  const tabStore = useMultipleTabStore();
  const { currentRoute } = useRouter();
  const { refreshPage, closeAll, close, closeLeft, closeOther, closeRight } = useTabs();

  const getTargetTab = computed((): RouteLocationNormalized => {
    return unref(getIsTabs) ? tabContentProps.tabItem : unref(currentRoute);
  });

  /**
   * @description: drop-down list
   */
  const getDropMenuList = computed(() => {
    if (!unref(getTargetTab)) {
      return;
    }
    const { meta } = unref(getTargetTab);
    const { path } = unref(currentRoute);

    const curItem = state.current;

    const isCurItem = curItem ? curItem.path === path : false;

    // Refresh button
    const index = state.currentIndex;
    const refreshDisabled = !isCurItem;
    // Close left
    const closeLeftDisabled = index === 0 || !isCurItem;

    const disabled = tabStore.getTabList.length === 1;

    // Close right
    const closeRightDisabled =
      !isCurItem || (index === tabStore.getTabList.length - 1 && tabStore.getLastDragEndIndex >= 0);
    const dropMenuList: DropMenu[] = [
      {
        icon: "ion:reload-sharp",
        event: MenuEventEnum.REFRESH_PAGE,
        text: t("layout.multipleTab.reload"),
        disabled: refreshDisabled
      },
      {
        icon: "clarity:close-line",
        event: MenuEventEnum.CLOSE_CURRENT,
        text: t("layout.multipleTab.close"),
        disabled: !!meta?.affix || disabled,
        divider: true
      },
      {
        icon: "line-md:arrow-close-left",
        event: MenuEventEnum.CLOSE_LEFT,
        text: t("layout.multipleTab.closeLeft"),
        disabled: closeLeftDisabled,
        divider: false
      },
      {
        icon: "line-md:arrow-close-right",
        event: MenuEventEnum.CLOSE_RIGHT,
        text: t("layout.multipleTab.closeRight"),
        disabled: closeRightDisabled,
        divider: true
      },
      {
        icon: "dashicons:align-center",
        event: MenuEventEnum.CLOSE_OTHER,
        text: t("layout.multipleTab.closeOther"),
        disabled: disabled || !isCurItem
      },
      {
        icon: "clarity:minus-line",
        event: MenuEventEnum.CLOSE_ALL,
        text: t("layout.multipleTab.closeAll"),
        disabled
      }
    ];

    return dropMenuList;
  });

  function handleContextMenu(tabItem: RouteLocationNormalized) {
    return (e: Event) => {
      if (!tabItem) {
        return;
      }
      e?.preventDefault();
      const index = tabStore.getTabList.findIndex((tab) => tab.path === tabItem.path);
      state.current = tabItem;
      state.currentIndex = index;
    };
  }

  // Handle right click event
  function handleMenuEvent(menu: DropMenu): void {
    const { event } = menu;
    switch (event) {
      case MenuEventEnum.REFRESH_PAGE: {
        // refresh page
        refreshPage().then();
        break;
      }
      // Close current
      case MenuEventEnum.CLOSE_CURRENT: {
        close(tabContentProps.tabItem).then();
        break;
      }
      // Close left
      case MenuEventEnum.CLOSE_LEFT: {
        closeLeft().then();
        break;
      }
      // Close right
      case MenuEventEnum.CLOSE_RIGHT: {
        closeRight().then();
        break;
      }
      // Close other
      case MenuEventEnum.CLOSE_OTHER: {
        closeOther().then();
        break;
      }
      // Close all
      case MenuEventEnum.CLOSE_ALL: {
        closeAll().then();
        break;
      }
    }
  }

  return { getDropMenuList, handleMenuEvent, handleContextMenu };
}
