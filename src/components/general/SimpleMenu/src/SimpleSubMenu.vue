<template>
  <MenuItem :name="item.path" v-if="!menuHasChildren(item) && getShowMenu" v-bind="$props" :class="getLevelClass">
    <Icon v-if="getIcon" :icon="getIcon" :size="16" />
    <div v-if="collapsedShowTitle && getIsCollapseParent" class="mt-1 collapse-title">
      {{ getI18nName }}
    </div>
    <template #title>
      <span class="ml-2" :class="[`${prefixCls}-sub-title`]">
        {{ getI18nName }}
      </span>
      <SimpleMenuTag :item="item" :collapse-parent="getIsCollapseParent" />
    </template>
  </MenuItem>
  <SubMenu
    :name="item.path"
    v-if="menuHasChildren(item) && getShowMenu"
    :class="[getLevelClass, theme]"
    :collapsed-show-title="collapsedShowTitle"
  >
    <template #title>
      <Icon v-if="getIcon" :icon="getIcon" :size="16" />

      <div v-if="collapsedShowTitle && getIsCollapseParent" class="mt-2 collapse-title">
        {{ getI18nName }}
      </div>

      <span v-show="getShowSubTitle" class="ml-2" :class="[`${prefixCls}-sub-title`]">
        {{ getI18nName }}
      </span>
      <SimpleMenuTag :item="item" :collapse-parent="!!collapse && !!parent" />
    </template>
    <template v-for="childrenItem in item.children || []" :key="childrenItem.paramPath || childrenItem.path">
      <SimpleSubMenu v-bind="$props" :item="childrenItem" :parent="false" />
    </template>
  </SubMenu>
</template>
<script lang="ts" setup>
  import type { PropType } from "vue";
  import { computed } from "vue";
  import type { Menu } from "@mfish/core/router";
  import { useDesign, useI18n } from "@mfish/core/hooks";
  import { Icon } from "@mfish/core/components/Icon";
  import MenuItem from "./components/MenuItem.vue";
  import SubMenu from "./components/SubMenuItem.vue";
  import { propTypes } from "@mfish/core/utils/PropTypes";
  import { createAsyncComponent } from "@mfish/core/utils/factory/CreateAsyncComponent";

  defineOptions({ name: "SimpleSubMenu" });

  const props = defineProps({
    item: {
      type: Object as PropType<Menu>,
      default: () => ({})
    },
    parent: propTypes.bool,
    collapsedShowTitle: propTypes.bool,
    collapse: propTypes.bool,
    theme: propTypes.oneOf(["dark", "light"])
  });

  const SimpleMenuTag = createAsyncComponent(() => import("./SimpleMenuTag.vue"));

  const { t } = useI18n();
  const { prefixCls } = useDesign("simple-menu");

  const getShowMenu = computed(() => !props.item?.meta?.hideMenu);
  const getIcon = computed(() => props.item?.icon);
  const getI18nName = computed(() => t(props.item?.name));
  const getShowSubTitle = computed(() => !props.collapse || !props.parent);
  const getIsCollapseParent = computed(() => !!props.collapse && !!props.parent);
  const getLevelClass = computed(() => {
    return [
      {
        [`${prefixCls}__parent`]: props.parent,
        [`${prefixCls}__children`]: !props.parent
      }
    ];
  });

  function menuHasChildren(menuTreeItem: Menu): boolean {
    return (
      !menuTreeItem.meta?.hideChildrenInMenu &&
      Reflect.has(menuTreeItem, "children") &&
      !!menuTreeItem.children &&
      menuTreeItem.children.length > 0
    );
  }
</script>
