<template>
  <div :class="bem()" class="flex px-2 py-1.5 items-center">
    <slot name="headerTitle" v-if="slots.headerTitle"></slot>
    <BasicTitle :help-message="helpMessage" v-if="!slots.headerTitle && title">
      {{ title }}
    </BasicTitle>
    <div class="flex items-center flex-1 cursor-pointer justify-self-stretch" v-if="search || toolbar">
      <div :class="getInputSearchCls" v-if="search">
        <InputSearch
          :placeholder="t('common.searchText')"
          size="small"
          allow-clear
          v-model:value="searchValue"
          @search="enterSearch"
          :enter-button="props.enterButton"
        />
      </div>
      <div class="flex">
        <slot name="headerTools"></slot>
      </div>
      <Dropdown @click.prevent v-if="toolbar">
        <Icon icon="ion:ellipsis-vertical" />
        <template #overlay>
          <Menu @click="handleMenuClick">
            <template v-for="item in toolbarList" :key="item.value">
              <MenuItem v-bind="{ key: item.value }">
                {{ item.label }}
              </MenuItem>
              <MenuDivider v-if="item.divider" />
            </template>
          </Menu>
        </template>
      </Dropdown>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { computed, PropType, ref, useSlots, watch } from "vue";
  import { Dropdown, Menu, MenuDivider, MenuItem } from "ant-design-vue";
  import { Icon } from "../../../Icon";
  import { BasicTitle } from "../../../Basic";
  import { useI18n } from "@core/hooks";
  import { useDebounceFn } from "@vueuse/core";
  import { createBEM } from "@core/utils/Bem.ts";
  import { ToolbarEnum } from "../types/Tree";
  import InputSearch from "../../../InputSearch/index.vue";

  const props = defineProps({
    helpMessage: {
      type: [String, Array] as PropType<string | string[]>,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    toolbar: {
      type: Boolean,
      default: false
    },
    checkable: {
      type: Boolean,
      default: false
    },
    search: {
      type: Boolean,
      default: false
    },
    searchText: {
      type: String,
      default: ""
    },
    checkAll: {
      type: Function,
      default: undefined
    },
    expandAll: {
      type: Function,
      default: undefined
    },
    enterButton: {
      type: Boolean,
      default: true
    }
  } as const);
  const emit = defineEmits(["strictly-change", "search", "enterSearch"]);
  const searchValue = ref("");

  const [bem] = createBEM("tree-header");

  const slots = useSlots();
  const { t } = useI18n();

  const getInputSearchCls = computed(() => {
    const titleExists = slots.headerTitle || props.title;
    return [
      "mr-1",
      "w-full",
      {
        "ml-3": titleExists
      }
    ];
  });

  const toolbarList = computed(() => {
    const { checkable } = props;
    const defaultToolbarList = [
      { label: t("component.tree.expandAll"), value: ToolbarEnum.EXPAND_ALL },
      {
        label: t("component.tree.unExpandAll"),
        value: ToolbarEnum.UN_EXPAND_ALL,
        divider: checkable
      }
    ];

    return checkable
      ? [
          { label: t("component.tree.selectAll"), value: ToolbarEnum.SELECT_ALL },
          {
            label: t("component.tree.unSelectAll"),
            value: ToolbarEnum.UN_SELECT_ALL,
            divider: checkable
          },
          ...defaultToolbarList,
          { label: t("component.tree.checkStrictly"), value: ToolbarEnum.CHECK_STRICTLY },
          { label: t("component.tree.checkUnStrictly"), value: ToolbarEnum.CHECK_UN_STRICTLY }
        ]
      : defaultToolbarList;
  });

  function handleMenuClick(e: any) {
    const { key } = e;
    switch (key) {
      case ToolbarEnum.SELECT_ALL: {
        props.checkAll?.(true);
        break;
      }
      case ToolbarEnum.UN_SELECT_ALL: {
        props.checkAll?.(false);
        break;
      }
      case ToolbarEnum.EXPAND_ALL: {
        props.expandAll?.(true);
        break;
      }
      case ToolbarEnum.UN_EXPAND_ALL: {
        props.expandAll?.(false);
        break;
      }
      case ToolbarEnum.CHECK_STRICTLY: {
        emit("strictly-change", false);
        break;
      }
      case ToolbarEnum.CHECK_UN_STRICTLY: {
        emit("strictly-change", true);
        break;
      }
    }
  }

  function enterSearch(value) {
    emit("enterSearch", value);
  }

  function emitChange(value?: string): void {
    emit("search", value);
  }

  const debounceEmitChange = useDebounceFn(emitChange, 200);

  watch(
    () => searchValue.value,
    (v) => {
      debounceEmitChange(v);
    }
  );

  watch(
    () => props.searchText,
    (v) => {
      if (v !== searchValue.value) {
        searchValue.value = v;
      }
    }
  );
</script>
