import type { EChartsOption } from "echarts";
import type { Ref } from "vue";
import { computed, nextTick, ref, unref, watch } from "vue";
import { useBreakpoint, useEventListener, useMenuSetting, useRootSetting, useTimeoutFn } from "@mfish/core/hooks";
import { tryOnUnmounted, useDebounceFn } from "@vueuse/core";
import * as echarts from "echarts/core";
import { BarChart, LineChart, MapChart, PictorialBarChart, PieChart, RadarChart, ScatterChart } from "echarts/charts";
import {
  AriaComponent,
  CalendarComponent,
  DataZoomComponent,
  GraphicComponent,
  GridComponent,
  LegendComponent,
  ParallelComponent,
  PolarComponent,
  RadarComponent,
  TimelineComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent
} from "echarts/components";
import { SVGRenderer } from "echarts/renderers";

echarts.use([
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PolarComponent,
  AriaComponent,
  ParallelComponent,
  BarChart,
  LineChart,
  PieChart,
  MapChart,
  RadarChart,
  SVGRenderer,
  PictorialBarChart,
  RadarComponent,
  ToolboxComponent,
  DataZoomComponent,
  VisualMapComponent,
  TimelineComponent,
  CalendarComponent,
  GraphicComponent,
  ScatterChart
]);

export function useECharts(elRef: Ref<HTMLDivElement>, theme: "light" | "dark" | "default" = "default") {
  const { getDarkMode: getSysDarkMode } = useRootSetting();
  const { getCollapsed } = useMenuSetting();
  const getDarkMode = computed(() => {
    return theme === "default" ? getSysDarkMode.value : theme;
  });
  let chartInstance: echarts.ECharts | null = null;
  let resizeFn: Fn = resize;
  const cacheOptions = ref({}) as Ref<EChartsOption>;
  let removeResizeFn: Fn = () => {};

  resizeFn = useDebounceFn(resize, 200);

  const getOptions = computed(() => {
    if (getDarkMode.value !== "dark") {
      return cacheOptions.value as EChartsOption;
    }
    return {
      backgroundColor: "transparent",
      ...cacheOptions.value
    } as EChartsOption;
  });

  function initCharts(t = theme) {
    const el = unref(elRef);
    if (!el || !unref(el)) {
      return;
    }

    chartInstance = echarts.init(el, t);
    const { removeEvent } = useEventListener({
      el: globalThis,
      name: "resize",
      listener: resizeFn
    });
    removeResizeFn = removeEvent;
    const { widthRef, screenEnum } = useBreakpoint();
    if (unref(widthRef) <= screenEnum.MD || el.offsetHeight === 0) {
      useTimeoutFn(() => {
        resizeFn();
      }, 30);
    }
  }

  function setOptions(options: EChartsOption, clear = true) {
    cacheOptions.value = options;
    if (unref(elRef)?.offsetHeight === 0) {
      useTimeoutFn(() => {
        setOptions(unref(getOptions));
      }, 30);
      return;
    }
    nextTick(() => {
      useTimeoutFn(() => {
        if (!chartInstance) {
          initCharts(getDarkMode.value as "default");

          if (!chartInstance) return;
        }
        clear && chartInstance?.clear();

        chartInstance?.setOption(unref(getOptions));
      }, 30);
    }).then();
  }

  function resize() {
    chartInstance?.resize({
      animation: {
        duration: 300,
        easing: "quadraticIn"
      }
    });
  }

  watch(
    () => getDarkMode.value,
    (theme) => {
      if (chartInstance) {
        chartInstance.dispose();
        initCharts(theme as "default");
        setOptions(cacheOptions.value);
      }
    }
  );

  watch(getCollapsed, (_) => {
    useTimeoutFn(() => {
      resizeFn();
    }, 300);
  });

  tryOnUnmounted(() => {
    if (!chartInstance) return;
    removeResizeFn();
    chartInstance.dispose();
    chartInstance = null;
  });

  function getInstance(): echarts.ECharts | null {
    if (!chartInstance) {
      initCharts(getDarkMode.value as "default");
    }
    return chartInstance;
  }

  return {
    setOptions,
    resize,
    echarts,
    getInstance
  };
}
