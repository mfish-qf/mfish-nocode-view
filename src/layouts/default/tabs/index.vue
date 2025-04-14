<template>
  <div :class="getWrapClass">
    <Tabs
      type="editable-card"
      size="small"
      :hide-add="true"
      :active-key="activeKeyRef"
      @change="handleChange"
      @edit="(e) => handleEdit(`${e}`)"
    >
      <template v-for="item in getTabsState" :key="item.query ? item.fullPath : item.path">
        <Tabs.TabPane>
          <template #tab>
            <TabContent :tab-item="item" />
          </template>
        </Tabs.TabPane>
      </template>

      <template #rightExtra v-if="getShowRedo || getShowQuick">
        <TabRedo v-if="getShowRedo" />
        <TabContent is-extra :tab-item="$route" v-if="getShowQuick" />
        <FoldButton v-if="getShowFold" />
      </template>
    </Tabs>
  </div>
</template>
<script lang="ts" setup>
  import type { RouteLocationNormalized, RouteMeta } from "vue-router";
  import { computed, unref, ref } from "vue";
  import { Tabs } from "ant-design-vue";
  import TabContent from "./components/TabContent.vue";
  import FoldButton from "./components/FoldButton.vue";
  import TabRedo from "./components/TabRedo.vue";
  import { useGo } from "@mfish/core/src/hooks/web/UsePage";
  import { useMultipleTabStore } from "@mfish/stores/modules";
  import { useUserStore } from "@mfish/stores/modules";
  import { initAffixTabs, useTabsDrag } from "./UseMultipleTabs";
  import { useDesign } from "@mfish/core";
  import { useMultipleTabSetting } from "@mfish/core/src/hooks/setting/UseMultipleTabSetting";
  import { REDIRECT_NAME } from "@mfish/core/src/router/Constant";
  import { listenerRouteChange } from "@mfish/core/src/logics/mitt/RouteChange";
  import { useRouter } from "vue-router";

  defineOptions({ name: "MultipleTabs" });

  const affixTextList = initAffixTabs();
  const activeKeyRef = ref("");

  useTabsDrag(affixTextList);
  const tabStore = useMultipleTabStore();
  const userStore = useUserStore();
  const router = useRouter();

  const { prefixCls } = useDesign("multiple-tabs");
  const go = useGo();
  const { getShowQuick, getShowRedo, getShowFold } = useMultipleTabSetting();

  const getTabsState = computed(() => {
    return tabStore.getTabList.filter((item) => !item.meta?.hideTab);
  });
  const unClose = computed(() => unref(getTabsState).length === 1);
  const getWrapClass = computed(() => {
    return [
      prefixCls,
      {
        [`${prefixCls}--hide-close`]: unref(unClose)
      }
    ];
  });

  listenerRouteChange((route) => {
    const { name } = route;
    if (name === REDIRECT_NAME || !route || !userStore.getToken) {
      return;
    }

    const { path, fullPath, meta = {} } = route;
    const { currentActiveMenu, hideTab } = meta as RouteMeta;
    const isHide = hideTab ? currentActiveMenu : null;
    const p = isHide || fullPath || path;
    if (activeKeyRef.value !== p) {
      activeKeyRef.value = p as string;
    }

    if (isHide) {
      const findParentRoute = router.getRoutes().find((item) => item.path === currentActiveMenu);

      findParentRoute && tabStore.addTab(findParentRoute as unknown as RouteLocationNormalized);
    } else {
      tabStore.addTab(unref(route));
    }
  });

  function handleChange(activeKey: any) {
    activeKeyRef.value = activeKey;
    go(activeKey, false);
  }

  function handleEdit(targetKey: string) {
    if (unref(unClose)) {
      return;
    }
    tabStore.closeTabByKey(targetKey, router);
  }
</script>
<style lang="less">
  @import url("./index.less");
</style>
