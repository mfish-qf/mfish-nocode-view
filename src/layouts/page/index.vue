<template>
  <RouterView>
    <template #default="{ Component, route }">
      <transition :name="getTransitionName(route, getEnableTransition, getBasicTransition)" mode="out-in" appear>
        <keep-alive v-if="openCache" :include="getCaches">
          <component :is="setName(route, Component)" :key="route.fullPath" />
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
  import { useRootSetting } from "@mfish/core";
  import { useTransitionSetting } from "@mfish/core/src/hooks/setting/UseTransitionSetting";
  import { useMultipleTabSetting } from "@mfish/core/src/hooks/setting/UseMultipleTabSetting";
  import { useMultipleTabStore } from "@mfish/stores/modules";
  import { RouterTransitionEnum } from "@mfish/core/enums";

  defineOptions({ name: "PageLayout" });

  const { getShowMultipleTab } = useMultipleTabSetting();
  const tabStore = useMultipleTabStore();
  const { getOpenKeepAlive, getCanEmbedIFramePage } = useRootSetting();

  const { getBasicTransition, getEnableTransition } = useTransitionSetting();

  function setName(route, Component) {
    //由于添加时无法获取到组件名称，所以此处操作滞后设置
    const name = Component.type.name;
    if (name) {
      tabStore.addCacheTab(route, name);
      tabStore.openEnd(route.name);
    }
    return Component;
  }

  const openCache = computed(() => unref(getOpenKeepAlive) && unref(getShowMultipleTab));

  const getCaches = computed((): string[] => {
    if (!unref(getOpenKeepAlive)) {
      return [];
    }
    return tabStore.getCachedTabList;
  });

  function getTransitionName(route, enableTransition: boolean, def: string): string | undefined {
    if (!enableTransition) {
      return undefined;
    }
    // 缓存路由打开时使用默认过渡动画，否则可能会造成组件大小计算有误
    if (tabStore.getNewOpenTab !== route.name) {
      return RouterTransitionEnum.FADE;
    }
    return def || RouterTransitionEnum.FADE_SIDE_LEFT;
  }
</script>
