import { nextTick, ref, toRaw } from "vue";
import type { RouteLocationNormalized } from "vue-router";
import { useRouter } from "vue-router";
import { useDesign } from "@mfish/core/hooks";
import { useSortable } from "@/hooks/UseSortable";
import { useMultipleTabStore } from "@mfish/stores/modules";
import { isNullAndUnDef } from "@mfish/core/utils/Is";
import projectSetting from "@mfish/core/settings/ProjectSetting";

export function initAffixTabs(): string[] {
  const affixList = ref<RouteLocationNormalized[]>([]);

  const tabStore = useMultipleTabStore();
  const router = useRouter();

  /**
   * @description: Filter all fixed routes
   */
  function filterAffixTabs(routes: RouteLocationNormalized[]) {
    const tabs: RouteLocationNormalized[] = [];
    routes &&
      routes.forEach((route) => {
        if (route.meta && route.meta.affix) {
          tabs.push(toRaw(route));
        }
      });
    return tabs;
  }

  /**
   * @description: Set fixed tabs
   */
  function addAffixTabs(): void {
    const affixTabs = filterAffixTabs(router.getRoutes() as unknown as RouteLocationNormalized[]);
    affixList.value = affixTabs;
    for (const tab of affixTabs) {
      tabStore
        .addTab({
          meta: tab.meta,
          name: tab.name,
          path: tab.path
        } as unknown as RouteLocationNormalized)
        .then();
    }
  }

  const isAddAffix = false;

  if (!isAddAffix) {
    addAffixTabs();
  }
  return affixList.value.map((item) => item.meta?.title).filter(Boolean) as string[];
}

export function useTabsDrag(affixTextList: string[]) {
  const tabStore = useMultipleTabStore();
  const { multiTabsSetting } = projectSetting;
  const { prefixCls } = useDesign("multiple-tabs");
  nextTick(() => {
    if (!multiTabsSetting.canDrag) return;
    const el = document.querySelectorAll(`.${prefixCls} .ant-tabs-nav-wrap > div`)?.[0] as HTMLElement;
    const { initSortable } = useSortable(el, {
      filter: (e: any) => {
        const text = e?.target?.innerText;
        if (!text) return false;
        return affixTextList.includes(text);
      },
      onEnd: (evt) => {
        const { oldIndex, newIndex } = evt;

        if (isNullAndUnDef(oldIndex) || isNullAndUnDef(newIndex) || oldIndex === newIndex) {
          return;
        }

        tabStore.sortTabs(oldIndex, newIndex).then();
      }
    });
    initSortable();
  }).then();
}
