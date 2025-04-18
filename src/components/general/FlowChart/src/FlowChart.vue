<template>
  <div class="h-full" :class="prefixCls">
    <FlowChartToolbar :prefix-cls="prefixCls" v-if="toolbar" @view-data="handlePreview" />
    <div ref="lfElRef" class="h-full"></div>
    <BasicModal @register="register" title="流程数据" width="50%">
      <JsonPreview :data="graphData" />
    </BasicModal>
  </div>
</template>
<script lang="ts">
  import type { PropType, Ref } from "vue";
  import { computed, defineComponent, nextTick, onMounted, ref, unref, watch } from "vue";
  import type { Definition } from "@logicflow/core";
  import LogicFlow from "@logicflow/core";
  import FlowChartToolbar from "./FlowChartToolbar.vue";
  import { BpmnElement, DndPanel, Menu, SelectionSelect, Snapshot } from "@logicflow/extension";
  import { useDesign } from "@mfish/core/hooks";
  import { useAppStore } from "@mfish/stores/modules";
  import { createFlowChartContext } from "./UseFlowContext";
  import { toLogicFlowData } from "./AdpterForTurbo";
  import { BasicModal, useModal } from "@mfish/core/components/Modal";
  import { JsonPreview } from "@mfish/core/components/CodeEditor";
  import { configDefaultDndPanel } from "./Config";
  import "@logicflow/core/dist/style/index.css";
  import "@logicflow/extension/lib/style/index.css";

  export default defineComponent({
    name: "FlowChart",
    components: { BasicModal, FlowChartToolbar, JsonPreview },
    props: {
      flowOptions: {
        type: Object as PropType<Definition>,
        default: () => ({})
      },

      data: {
        type: Object as PropType<any>,
        default: () => ({})
      },

      toolbar: {
        type: Boolean,
        default: true
      },
      patternItems: {
        type: Array
      }
    },
    setup(props) {
      const lfElRef = ref(null);
      const graphData = ref({});

      const lfInstance = ref(null) as Ref<LogicFlow | null>;

      const { prefixCls } = useDesign("flow-chart");
      const appStore = useAppStore();
      const [register, { openModal }] = useModal();
      createFlowChartContext({
        logicFlow: lfInstance as unknown as LogicFlow
      });

      const getFlowOptions = computed(() => {
        const { flowOptions } = props;

        const defaultOptions: Partial<Definition> = {
          grid: true,
          background: {
            color: appStore.getDarkMode === "light" ? "#f7f9ff" : "#151515"
          },
          keyboard: {
            enabled: true
          },
          ...flowOptions
        };
        return defaultOptions as Definition;
      });

      watch(
        () => props.data,
        () => {
          onRender();
        }
      );

      watch(
        () => unref(getFlowOptions),
        (options) => {
          unref(lfInstance)?.updateEditConfig(options);
        }
      );

      // init logicFlow
      async function init() {
        await nextTick();

        const lfEl = unref(lfElRef);
        if (!lfEl) {
          return;
        }
        LogicFlow.use(DndPanel);

        // Canvas configuration
        LogicFlow.use(Snapshot);
        // Use the bpmn plug-in to introduce bpmn elements, which can be used after conversion in turbo
        LogicFlow.use(BpmnElement);
        // Start the right-click menu
        LogicFlow.use(Menu);
        LogicFlow.use(SelectionSelect);

        lfInstance.value = new LogicFlow({
          ...unref(getFlowOptions),
          container: lfEl
        });
        const lf = unref(lfInstance)!;
        lf?.setDefaultEdgeType("line");
        onRender().then();
        lf?.setPatternItems(props.patternItems || configDefaultDndPanel(lf));
      }

      async function onRender() {
        await nextTick();
        const lf = unref(lfInstance);
        if (!lf) {
          return;
        }
        const lFData = toLogicFlowData(props.data);
        lf.render(lFData);
      }

      function handlePreview() {
        const lf = unref(lfInstance);
        if (!lf) {
          return;
        }
        graphData.value = unref(lf).getGraphData();
        openModal();
      }

      onMounted(init);

      return {
        register,
        prefixCls,
        lfElRef,
        handlePreview,
        graphData
      };
    }
  });
</script>
