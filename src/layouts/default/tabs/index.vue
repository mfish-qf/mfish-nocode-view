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
        <!--        <TabRedo v-if="getShowRedo" />-->
        <TabContent is-extra :tab-item="$route" v-if="getShowQuick" />
        <FoldButton v-if="getShowFold" />
      </template>
    </Tabs>
  </div>
</template>
<script lang="ts" setup>
  import type { RouteLocationNormalized, RouteMeta } from "vue-router";
  import { useRouter } from "vue-router";
  import { computed, ref, unref } from "vue";
  import { Tabs, theme } from "ant-design-vue";
  import TabContent from "./components/TabContent.vue";
  import FoldButton from "./components/FoldButton.vue";
  import { useDesign, useGo, useMultipleTabSetting } from "@mfish/core/hooks";
  import { useMultipleTabStore, useUserStore } from "@mfish/stores/modules";
  import { initAffixTabs, useTabsDrag } from "./UseMultipleTabs";
  import { REDIRECT_NAME } from "@mfish/core/router";
  import { listenerRouteChange } from "@mfish/core/logics/mitt/RouteChange";

  defineOptions({ name: "MultipleTabs" });

  const affixTextList = initAffixTabs();
  const activeKeyRef = ref("");
  useTabsDrag(affixTextList);
  const tabStore = useMultipleTabStore();
  const userStore = useUserStore();
  const router = useRouter();
  const { token } = theme.useToken();
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
  const buildSvg = (color) => {
    const svg1 = encodeURIComponent(
      `<svg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M100 100C44.772 100 0 55.228 0 0v100h100z' fill='${color}'/></svg>`
    );
    const svg2 = encodeURIComponent(
      `<svg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M0 100c55.228 0 100-44.772 100-100v100H0z' fill='${color}'/></svg>`
    );
    const svg3 = encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg'><rect rx='12' width='100%' height='100%' fill='${color}'/></svg>`
    );
    return `url("data:image/svg+xml,${svg1}"),url("data:image/svg+xml, ${svg2}"),url("data:image/svg+xml, ${svg3}")`;
  };
  const hoverImage = computed(() => {
    return buildSvg(token.value.colorPrimaryBg);
  });
  const activeImage = computed(() => {
    return buildSvg(token.value.colorPrimaryBgHover);
  });
  const bgColor = computed(() => {
    return token.value.colorPrimaryBgHover;
  });
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-multiple-tabs";

  [data-theme="dark"] {
    .@{prefix-cls} {
      &-content {
        &__extra-quick,
        &__extra-redo,
        &__extra-fold {
          &:hover {
            color: rgba(255, 255, 255, 0.6);
          }
        }
      }
    }
  }

  .@{prefix-cls} {
    background-color: @component-background;

    .ant-tabs-small {
      height: @multiple-height;
    }

    .ant-tabs.ant-tabs-card {
      .ant-tabs-nav {
        padding-top: 2px;
        height: @multiple-height;
        margin: 0;
        border: 0;
        box-shadow: 2px 0 8px 0 v-bind(bgColor);

        &::before {
          z-index: -1;
        }
        .ant-tabs-nav-container {
          height: @multiple-height;
          padding-top: 2px;
        }

        .ant-tabs-tab {
          color: @text-color-base;
          background-color: transparent;
          padding: 0 28px;
          border: 0;
          left: 13px;
          margin: 0 -13px;
          background-size:
            13px 13px,
            13px 13px,
            calc(100% - 24px) calc(100% + 15px);
          background-position:
            right bottom,
            left bottom,
            center top;
          background-repeat: no-repeat;

          .ant-tabs-tab-remove {
            padding: 0;
            height: 28px;
            font-size: 12px;
            opacity: 0;
            margin-left: 6px;
            margin-right: -14px;
            transition: all 0.2s ease;

            &:hover {
              transform: scale(1.2);
            }
          }

          .anticon {
            margin-right: 6px;
          }
        }

        .ant-tabs-tab:not(.ant-tabs-tab-active) {
          &:hover {
            z-index: 1;
            background-image: v-bind(hoverImage);

            .ant-tabs-tab-remove {
              opacity: 1;
            }
          }
        }

        .ant-tabs-tab-active {
          z-index: 5;
          background-image: v-bind(activeImage);
          cursor: default;

          .ant-tabs-tab-remove {
            opacity: 1;
          }

          span {
            color: @main-color;
          }
        }
      }
    }

    .ant-tabs-tab:not(.ant-tabs-tab-active) {
      .anticon-close {
        font-size: 12px;
      }
    }

    .ant-dropdown-trigger {
      display: inline-flex;
    }

    &--hide-close {
      .ant-tabs-tab-remove {
        opacity: 0 !important;
      }
    }

    &-content {
      &__extra-quick,
      &__extra-redo,
      &__extra-fold {
        margin-right: 6px;
        width: 26px;
        text-align: center;
        cursor: pointer;

        &:hover {
          color: rgba(0, 0, 0, 0.6);
        }

        span[role="img"] {
          transform: rotate(90deg);
        }
      }

      &__extra-redo {
        span[role="img"] {
          transform: rotate(0deg);
        }
      }

      &__info {
        margin-left: -10px;
        font-size: 12px;
        user-select: none;
      }
    }
  }

  .ant-tabs-dropdown-menu {
    &-title-content {
      display: flex;
      align-items: center;

      .@{prefix-cls} {
        &-content__info {
          width: auto;
          margin-left: 0;
          line-height: 28px;
        }
      }
    }

    &-item-remove {
      margin-left: auto;
    }
  }
</style>
