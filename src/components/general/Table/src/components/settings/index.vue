<template>
  <div class="table-settings">
    <RedoSetting v-if="getSetting.redo" :get-popup-container="getTableContainer" />
    <SizeSetting v-if="getSetting.size > 0" :get-popup-container="getTableContainer" />
    <ColumnSetting
      v-if="getSetting.setting"
      @columns-change="handleColumnChange"
      :get-popup-container="getTableContainer"
    />
    <FullScreenSetting v-if="getSetting.fullScreen" :get-popup-container="getTableContainer" />
  </div>
</template>
<script lang="ts">
  import type { PropType } from "vue";
  import type { TableSetting, ColumnChangeParam } from "../../types/Table";
  import { defineComponent, computed, unref } from "vue";
  import ColumnSetting from "./ColumnSetting.vue";
  import SizeSetting from "./SizeSetting.vue";
  import RedoSetting from "./RedoSetting.vue";
  import FullScreenSetting from "./FullScreenSetting.vue";
  import { useI18n } from "@/hooks/web/UseI18n";
  import { useTableContext } from "../../hooks/UseTableContext";

  export default defineComponent({
    name: "TableSetting",
    components: {
      ColumnSetting,
      SizeSetting,
      RedoSetting,
      FullScreenSetting
    },
    props: {
      setting: {
        type: Object as PropType<TableSetting>,
        default: () => ({})
      }
    },
    emits: ["columnsChange"],
    setup(props, { emit }) {
      const { t } = useI18n();
      const table = useTableContext();

      const getSetting = computed((): TableSetting => {
        return {
          redo: true,
          size: true,
          setting: true,
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

      return { getSetting, t, handleColumnChange, getTableContainer };
    }
  });
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
