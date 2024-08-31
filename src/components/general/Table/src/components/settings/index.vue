<template>
  <div class="table-settings">
    <RedoSetting v-if="getSetting.redo" :get-popup-container="getTableContainer" />
    <SizeSetting v-if="getSetting.size > 0" :get-popup-container="getTableContainer" />
    <ColumnSetting
      v-if="getSetting.setting"
      @columns-change="handleColumnChange"
      :get-popup-container="getTableContainer"
      :cache="getSetting.settingCache"
      :title="title"
    />
    <FullScreenSetting v-if="getSetting.fullScreen" :get-popup-container="getTableContainer" />
  </div>
</template>
<script lang="ts" setup>
  import type { PropType } from "vue";
  import type { TableSetting, ColumnChangeParam } from "../../types/Table";
  import { computed, unref } from "vue";
  import ColumnSetting from "./ColumnSetting.vue";
  import SizeSetting from "./SizeSetting.vue";
  import RedoSetting from "./RedoSetting.vue";
  import FullScreenSetting from "./FullScreenSetting.vue";

  import { useTableContext } from "../../hooks/UseTableContext";

  defineOptions({ name: "TableSetting" });

  const props = defineProps({
    title: {
      type: String,
      default: ""
    },
    setting: {
      type: Object as PropType<TableSetting>,
      default: () => ({})
    }
  });

  const emit = defineEmits(["columnsChange"]);

  const table = useTableContext();

  const getSetting = computed((): TableSetting => {
    return {
      redo: true,
      size: true,
      setting: true,
      settingCache: false,
      fullScreen: false,
      ...props.setting
    };
  });

  function handleColumnChange(data: ColumnChangeParam[]) {
    emit("columnsChange", data);
  }

  function getTableContainer() {
    return table ? unref(table.wrapRef) : document.body;
  }
</script>
<style lang="less">
  .table-settings {
    & > * {
      margin-right: 12px;
    }

    svg {
      width: 1.3em;
      height: 1.3em;
    }
  }
</style>
