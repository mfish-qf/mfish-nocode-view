import type LogicFlow from "@logicflow/core";
import { inject, provide } from "vue";

const key = Symbol("flow-chart");

interface Instance {
  logicFlow: LogicFlow;
}

export function createFlowChartContext(instance: Instance) {
  provide(key, instance);
}

export function useFlowChartContext(): Instance {
  return inject(key) as Instance;
}
