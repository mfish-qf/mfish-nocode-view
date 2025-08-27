<template>
  <div :class="[prefixCls, `${prefixCls}--${theme}`]">
    <ABreadcrumb :routes="routes">
      <template #itemRender="{ route, routes: routesMatched }">
        <Icon :icon="getIcon(route)" v-if="getShowBreadCrumbIcon && getIcon(route)" :size="14" />
        <span v-if="!hasRedirect(routesMatched, route)" class="ml-2"> {{ getName(route) }} </span>
        <router-link v-else to="" @click="handleClick(route)" class="ml-2">
          {{ getName(route) }}
        </router-link>
      </template>
    </ABreadcrumb>
  </div>
</template>
<script lang="ts" setup>
  import { useRouter } from "vue-router";
  import { computed, ref, watchEffect } from "vue";
  import { Breadcrumb as ABreadcrumb } from "ant-design-vue";
  import { Icon } from "@mfish/core/components/Icon";
  import { useDesign, useGo, useI18n, useRootSetting } from "@mfish/core/hooks";
  import { isString } from "@mfish/core/utils/Is";
  import { filter } from "@mfish/core/utils/helper/TreeHelper";
  import { getAllParentPath, getMenus, REDIRECT_NAME } from "@mfish/core/router";
  import type { Route } from "ant-design-vue/es/breadcrumb/Breadcrumb";
  import { useAppStore } from "@mfish/stores/modules";

  defineOptions({ name: "LayoutBreadcrumb" });
  const appStore = useAppStore();
  const theme = computed(() => {
    return appStore.getHeaderSetting.theme;
  });

  const routes = ref<Route[]>([]);
  const { currentRoute } = useRouter();
  const { prefixCls } = useDesign("layout-breadcrumb");
  const { getShowBreadCrumbIcon } = useRootSetting();
  const go = useGo();
  const { t } = useI18n();

  watchEffect(async () => {
    if (currentRoute.value.name === REDIRECT_NAME) return;
    const menus = await getMenus();

    const routeMatched = currentRoute.value.matched;
    const cur = routeMatched?.[routeMatched.length - 1];
    let path = currentRoute.value.path;

    if (cur && cur?.meta?.currentActiveMenu) {
      path = cur.meta.currentActiveMenu as string;
    }

    const parent = getAllParentPath(menus, path);
    const filterMenus = menus.filter((item) => item.path === parent[0]);
    const matched = getMatched(filterMenus, parent) as any;

    if (!matched || matched.length === 0) {
      routes.value = [];
      return;
    }

    const breadcrumbList = filterItem(matched);

    if (currentRoute.value.meta?.currentActiveMenu && !currentRoute.value.meta?.hideBreadcrumb) {
      breadcrumbList.push({
        ...currentRoute.value,
        name: currentRoute.value.meta?.title || currentRoute.value.name
      });
    }
    routes.value = breadcrumbList;
  });

  function getMatched(menus, parent: string[]) {
    const matched: any[] = [];
    menus.forEach((item) => {
      if (parent.includes(item.path)) {
        matched.push({
          ...item,
          name: item.meta?.title || item.name
        });
      }
      if (item.children?.length) {
        matched.push(...getMatched(item.children, parent));
      }
    });
    return matched;
  }

  function filterItem(list: any[]) {
    return filter(list, (item) => {
      const { meta, name } = item;
      if (!meta) {
        return !!name;
      }
      const { title, hideBreadcrumb, hideMenu } = meta;
      return !(!title || hideBreadcrumb || hideMenu);
    }).filter((item) => !item.meta?.hideBreadcrumb);
  }

  function handleClick(route) {
    const { children, redirect, meta } = route;

    if (children?.length && !redirect) {
      return;
    }
    if (meta?.carryParam) {
      return;
    }

    if (redirect && isString(redirect)) {
      go(redirect);
    } else {
      let goPath = "";
      if (route.path) {
        goPath = route.path;
      } else {
        const lastPath = "";
        goPath = `${lastPath}`;
      }
      goPath = /^\//.test(goPath) ? goPath : `/${goPath}`;
      go(goPath);
    }
  }

  function hasRedirect(routes, route) {
    return routes.indexOf(route) !== routes.length - 1;
  }

  function getIcon(route: any) {
    return route.icon || route.meta?.icon;
  }

  function getName(route: any) {
    return t(route.meta?.title || route.name);
  }
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-layout-breadcrumb";

  .@{prefix-cls} {
    display: flex;
    align-items: center;
    padding: 0 8px;

    &--dark {
      .ant-breadcrumb-overlay-link {
        .ant-breadcrumb-link {
          color: @header-light-desc-color;
          > a {
            color: @header-light-desc-color;
          }
        }
      }
      .ant-breadcrumb-link {
        color: @header-color;
      }
      .anticon-down {
        color: @header-light-desc-color;
      }
      .ant-breadcrumb-separator {
        color: @header-light-desc-color;
      }
    }
  }
</style>
