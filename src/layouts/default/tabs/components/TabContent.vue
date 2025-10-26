<template>
  <Dropdown
    :drop-menu-list="getDropMenuList"
    :trigger="getTrigger"
    placement="bottom"
    :arrow="{ pointAtCenter: true }"
    :overlay-style="{ width: '150px' }"
    @menu-event="handleMenuEvent"
  >
    <div :class="`${prefixCls}__info`" @contextmenu="handleContext" v-if="getIsTabs">
      <Icon :icon="tabItem.meta.icon" :size="14" />
      <span>{{ getTitle }}</span>
    </div>
    <span :class="`${prefixCls}__extra-quick`" v-else @click="handleContext">
      <Icon icon="ant-design:down-outlined" />
    </span>
  </Dropdown>
</template>
<script lang="ts">
  import type { PropType } from "vue";
  import { computed, defineComponent, unref } from "vue";
  import type { RouteLocationNormalized } from "vue-router";
  import { Dropdown } from "@mfish/core/components/Dropdown";
  import { Icon } from "@mfish/core/components/Icon";
  import { TabContentProps } from "../types";
  import { useDesign, useI18n } from "@mfish/core/hooks";
  import { useTabDropdown } from "../UseTabDropdown";

  export default defineComponent({
    name: "TabContent",
    components: { Dropdown, Icon },
    props: {
      tabItem: {
        type: Object as PropType<RouteLocationNormalized>,
        default: null
      },
      isExtra: Boolean
    },
    setup(props) {
      const { prefixCls } = useDesign("multiple-tabs-content");
      const { t } = useI18n();

      const getTitle = computed(() => {
        const { tabItem: { meta } = {} } = props;
        return meta && t(meta.title as string);
      });

      const getIsTabs = computed(() => !props.isExtra);

      const getTrigger = computed((): ("contextmenu" | "click" | "hover")[] =>
        unref(getIsTabs) ? ["contextmenu"] : ["click"]
      );

      const { getDropMenuList, handleMenuEvent, handleContextMenu } = useTabDropdown(
        props as TabContentProps,
        getIsTabs
      );

      function handleContext(e) {
        props.tabItem && handleContextMenu(props.tabItem)(e);
      }

      return {
        prefixCls,
        getDropMenuList,
        handleMenuEvent,
        handleContext,
        getTrigger,
        getIsTabs,
        getTitle
      };
    }
  });
</script>
