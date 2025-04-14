import type { EChartsOption } from "echarts";
import type { Ref } from "vue";
import { useTimeoutFn } from "@mfish/core/src/hooks/core/UseTimeout";
import { tryOnUnmounted } from "@vueuse/core";
import { unref, nextTick, watch, computed, ref } from "vue";
import { useDebounceFn } from "@vueuse/core";
import { useEventListener } from "@mfish/core/src/hooks/event/UseEventListener";
import { useBreakpoint } from "@mfish/core/src/hooks/event/UseBreakpoint";
import echarts from "@/utils/lib/Echarts";
import { useRootSetting } from "@mfish/core";
import { useMenuSetting } from "@mfish/core/src/hooks/setting/UseMenuSetting";

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
