<template>
  <RouterView>
    <template #default="{ Component, route }">
      <transition :name="getTransitionName(getEnableTransition, getBasicTransition)" mode="out-in" appear>
        <keep-alive v-if="openCache" :include="getCaches">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
        <component v-else :is="Component" :key="route.fullPath" />
      </transition>
    </template>
  </RouterView>
  <FrameLayout v-if="getCanEmbedIFramePage" />
</template>

<script lang="ts" setup>
  import { computed, unref } from "vue";
  import FrameLayout from "@/layouts/iframe/index.vue";
  import { useRootSetting } from "@/hooks/setting/UseRootSetting";
  import { useTransitionSetting } from "@/hooks/setting/UseTransitionSetting";
  import { useMultipleTabSetting } from "@/hooks/setting/UseMultipleTabSetting";
  import { useMultipleTabStore } from "@/store/modules/MultipleTab";
  import { RouterTransitionEnum } from "@/enums/AppEnum";

  defineOptions({ name: "PageLayout" });

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
  function getTransitionName(enableTransition: boolean, def: string): string | undefined {
    if (!enableTransition) {
      return undefined;
    }
    return def || RouterTransitionEnum.FADE_SIDE_LEFT;
  }
</script>
