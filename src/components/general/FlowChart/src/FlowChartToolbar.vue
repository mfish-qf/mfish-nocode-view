<template>
  <div :class="`${prefixCls}-toolbar`" class="flex items-center px-2 py-1">
    <template v-for="item in toolbarItemList" :key="item.type">
      <Tooltip placement="bottom" v-bind="item.disabled ? { visible: false } : {}">
        <template #title>{{ item.tooltip }}</template>
        <span :class="`${prefixCls}-toolbar__icon`" v-if="item.icon" @click="onControl(item)">
          <Icon :icon="item.icon" :class="item.disabled ? 'cursor-not-allowed disabled' : 'cursor-pointer'" />
        </span>
      </Tooltip>
      <Divider v-if="item.separate" type="vertical" />
    </template>
  </div>
</template>
<script lang="ts">
  import type { ToolbarConfig } from "./Types";
  import { defineComponent, nextTick, onUnmounted, ref, unref, watchEffect } from "vue";
  import { Divider, Tooltip } from "ant-design-vue";
  import { Icon } from "@mfish/core/components/Icon";
  import { useFlowChartContext } from "./UseFlowContext";
  import { ToolbarTypeEnum } from "./Enum";

  export default defineComponent({
    name: "FlowChartToolbar",
    components: { Icon, Divider, Tooltip },
    props: {
      prefixCls: String
    },
    emits: ["view-data"],
    setup(_, { emit }) {
      const toolbarItemList = ref<ToolbarConfig[]>([
        {
          type: ToolbarTypeEnum.ZOOM_IN,
          icon: "codicon:zoom-out",
          tooltip: "缩小"
        },
        {
          type: ToolbarTypeEnum.ZOOM_OUT,
          icon: "codicon:zoom-in",
          tooltip: "放大"
        },
        {
          type: ToolbarTypeEnum.RESET_ZOOM,
          icon: "codicon:screen-normal",
          tooltip: "重置比例"
        },
        { separate: true },
        {
          type: ToolbarTypeEnum.UNDO,
          icon: "ion:arrow-undo-outline",
          tooltip: "后退",
          disabled: true
        },
        {
          type: ToolbarTypeEnum.REDO,
          icon: "ion:arrow-redo-outline",
          tooltip: "前进",
          disabled: true
        },
        { separate: true },
        {
          type: ToolbarTypeEnum.SNAPSHOT,
          icon: "ion:download-outline",
          tooltip: "下载"
        },
        {
          type: ToolbarTypeEnum.VIEW_DATA,
          icon: "carbon:document-view",
          tooltip: "查看数据"
        }
      ]);

      const { logicFlow } = useFlowChartContext();

      function onHistoryChange({ data: { undoAble, redoAble } }) {
        const itemsList = unref(toolbarItemList);
        const undoIndex = itemsList.findIndex((item) => item.type === ToolbarTypeEnum.UNDO);
        const redoIndex = itemsList.findIndex((item) => item.type === ToolbarTypeEnum.REDO);
        if (undoIndex !== -1) {
          unref(toolbarItemList)[undoIndex].disabled = !undoAble;
        }
        if (redoIndex !== -1) {
          unref(toolbarItemList)[redoIndex].disabled = !redoAble;
        }
      }

      const onControl = (item) => {
        const lf = unref(logicFlow);
        if (!lf) {
          return;
        }
        switch (item.type) {
          case ToolbarTypeEnum.ZOOM_IN: {
            lf.zoom();
            break;
          }
          case ToolbarTypeEnum.ZOOM_OUT: {
            lf.zoom(true);
            break;
          }
          case ToolbarTypeEnum.RESET_ZOOM: {
            lf.resetZoom();
            break;
          }
          case ToolbarTypeEnum.UNDO: {
            lf.undo();
            break;
          }
          case ToolbarTypeEnum.REDO: {
            lf.redo();
            break;
          }
          case ToolbarTypeEnum.SNAPSHOT: {
            lf.getSnapshot();
            break;
          }
          case ToolbarTypeEnum.VIEW_DATA: {
            emit("view-data");
            break;
          }
        }
      };

      watchEffect(async () => {
        if (unref(logicFlow)) {
          await nextTick();
          unref(logicFlow)?.on("history:change", onHistoryChange);
        }
      });

      onUnmounted(() => {
        unref(logicFlow)?.off("history:change", onHistoryChange);
      });
      return { toolbarItemList, onControl };
    }
  });
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-flow-chart-toolbar";

  [data-theme="dark"] {
    .lf-graph {
      background: @app-content-background;
    }

    .@{prefix-cls} {
      .disabled {
        color: rgba(255, 255, 255, 0.3);
      }
    }
  }

  .@{prefix-cls} {
    height: 36px;
    background-color: @app-content-background;
    border-bottom: 1px solid @border-color-base;

    .disabled {
      color: rgba(0, 0, 0, 0.3);
    }

    &__icon {
      display: inline-block;
      padding: 2px 4px;
      margin-right: 10px;

      &:hover {
        color: @button-primary-color;
      }
    }
  }
</style>
