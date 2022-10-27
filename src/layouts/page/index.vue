<template>
  <RouterView>
    <template #default="{ Component, route }">
      <transition
        :name="
          getTransitionName({
            route,
            openCache,
            enableTransition: getEnableTransition,
            cacheTabs: getCaches,
            def: getBasicTransition,
          })
        "
        mode="out-in"
        appear
      >
        <keep-alive v-if="openCache" :include="getCaches">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
        <div v-else :key="route.name">
          <component :is="Component" :key="route.fullPath" />
        </div>
      </transition>
    </template>
  </RouterView>
  <FrameLayout v-if="getCanEmbedIFramePage" />
</template>

<script lang="ts">
import { computed, defineComponent, unref } from "vue";
import FrameLayout from "/@/layouts/iframe/index.vue";
import { useRootSetting } from "/@/hooks/setting/UseRootSetting";
import { useTransitionSetting } from "/@/hooks/setting/UseTransitionSetting";
import { useMultipleTabSetting } from "/@/hooks/setting/UseMultipleTabSetting";
import { getTransitionName } from "./Transition";
import { useMultipleTabStore } from "/@/store/modules/MultipleTab";

export default defineComponent({
  name: "PageLayout",
  components: { FrameLayout },
  setup() {
    const { getShowMultipleTab } = useMultipleTabSetting();
    const tabStore = useMultipleTabStore();
    const { getOpenKeepAlive, getCanEmbedIFramePage } = useRootSetting();
    const { getBasicTransition, getEnableTransition } = useTransitionSetting();
    const openCache = computed(() => unref(getOpenKeepAlive) && unref(getShowMultipleTab));
    const getCaches = computed((): string[] => {
      if (!unref(getOpenKeepAlive)) {
        return [];
      }
      return tabStore.getCachedTabList;
    });
    return {
      getTransitionName,
      openCache,
      getEnableTransition,
      getBasicTransition,
      getCaches,
      getCanEmbedIFramePage
    };
  }
});
</script>
