<template>
  <div :style="active ? { padding: '3px 4px 3px 3px' } : {}">
    <div :class="getClass" @click.stop="handleClickItem" :style="getCollapse ? {} : getItemStyle">
      <Tooltip placement="right" v-if="showTooltip">
        <template #title>
          <slot name="title"></slot>
        </template>
        <div :class="`${prefixCls}-tooltip`">
          <slot></slot>
        </div>
      </Tooltip>
      <template v-else>
        <slot></slot>
        <slot name="title"></slot>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, getCurrentInstance, PropType, ref, unref, useSlots, watch } from "vue";
  import { useDesign } from "@mfish/core/hooks";
  import { propTypes } from "@mfish/core/utils/PropTypes";
  import { useMenuItem } from "./UseMenu";
  import { Tooltip } from "ant-design-vue";
  import { useSimpleRootMenuContext } from "./UseSimpleMenuContext";

  defineOptions({
    name: "MenuItem"
  });
  const props = defineProps({
    name: {
      type: [String, Number] as PropType<string | number>,
      required: true
    },
    disabled: propTypes.bool
  });

  const instance = getCurrentInstance();
  const active = ref(false);
  const { getItemStyle, getParentList, getParentMenu, getParentRootMenu, MFISH_MENU } = useMenuItem(instance);
  const { prefixCls } = useDesign("menu");
  const { rootMenuEmitter, activeName } = useSimpleRootMenuContext();
  const slots = useSlots();
  const getClass = computed(() => {
    return [
      `${prefixCls}-item`,
      {
        [`${prefixCls}-item-active`]: unref(active),
        [`${prefixCls}-item-selected`]: unref(active),
        [`${prefixCls}-item-disabled`]: !!props.disabled
      }
    ];
  });
  const getCollapse = computed(() => unref(getParentRootMenu)?.props.collapse);
  const showTooltip = computed(() => {
    return unref(getParentMenu)?.type.name === MFISH_MENU && unref(getCollapse) && slots.title;
  });

  function handleClickItem() {
    const { disabled } = props;
    if (disabled) {
      return;
    }
    rootMenuEmitter.emit("on-menu-item-select", props.name);
    if (unref(getCollapse)) {
      return;
    }
    const { uidList } = getParentList();

    rootMenuEmitter.emit("on-update-opened", {
      opened: false,
      parent: instance?.parent,
      uidList
    });
  }

  watch(
    () => activeName.value,
    (name: string | number) => {
      if (name === props.name) {
        const { list, uidList } = getParentList();
        active.value = true;
        list.forEach((item) => {
          if (item.proxy) {
            (item.proxy as any).active = true;
          }
        });
        rootMenuEmitter.emit("on-update-active-name:submenu", uidList);
      } else {
        active.value = false;
      }
    },
    { immediate: true }
  );
</script>
