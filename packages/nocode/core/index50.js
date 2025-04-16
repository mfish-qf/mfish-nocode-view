import { defineComponent, useTemplateRef, onMounted, createElementBlock, openBlock, mergeProps, toHandlers, unref } from "vue";
import { u as useEcharts } from "./UseEcharts.js";
import { h as useChartEventHandle } from "./index.js";
import { cloneDeep } from "lodash-es";
import { u as useEchartsMap, g as geoCoordinate } from "./UseEchartsMap.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "MfMapLine" },
  __name: "index",
  props: {
    chart: { type: Object, required: true },
    chartContain: { type: Object, required: true }
  },
  setup(__props) {
    const props = __props;
    const mfMapLineRef = useTemplateRef("mfMapLineRef");
    const { commonEvents } = useChartEventHandle(props.chart);
    useEchartsMap(props.chart.options.geo);
    onMounted(() => {
      useEcharts(mfMapLineRef.value, props.chart, props.chartContain, setOption);
    });
    const convertData = (data) => {
      const rippleDataArray = [];
      const lineDataArray = [];
      const set = /* @__PURE__ */ new Set();
      let max = 0;
      let min = data && data.length > 1 && data[1].length > 2 ? data[1][2] : 0;
      const addData = (data2, value) => {
        if (set.has(data2)) {
          const index = rippleDataArray.findIndex((item) => item.name === data2);
          rippleDataArray[index].value[2] += value;
          if (max < rippleDataArray[index].value[2]) {
            max = rippleDataArray[index].value[2];
          }
          if (min > rippleDataArray[index].value[2]) {
            min = rippleDataArray[index].value[2];
          }
        } else {
          rippleDataArray.push({
            name: data2,
            value: [...geoCoordinate[data2], value]
          });
          if (max < value) {
            max = value;
          }
          if (min > value) {
            min = value;
          }
          set.add(data2);
        }
      };
      for (const [i, item] of data.entries()) {
        if (i > 0) {
          const from = geoCoordinate[item[0]];
          const to = geoCoordinate[item[1]];
          const val = Number.parseFloat(item[2]) || 0;
          lineDataArray.push({
            fromName: item[0],
            toName: item[1],
            coords: [from, to],
            value: val
          });
          addData(item[1], val);
          addData(item[0], 0);
        }
      }
      return { lineDataArray, rippleDataArray, max, min };
    };
    function setOption(eChart, dataSet) {
      const options = {
        ...cloneDeep(props.chart.options),
        backgroundColor: "transparent"
      };
      const data = convertData(dataSet.source);
      options.series[0].data = data.lineDataArray;
      options.series[0].tooltip = {
        trigger: "item",
        formatter: (params) => {
          return `${params.data.fromName} → ${params.data.toName}<br>值: ${params.data.value}`;
        }
      };
      if (options.series.length > 1) {
        options.series[1].data = data.rippleDataArray;
        options.series[1].tooltip = {
          trigger: "item",
          formatter: (params) => {
            return `${params.name}<br>合计: ${params.value[2]}`;
          }
        };
      }
      options.visualMap.min = data.min;
      options.visualMap.max = data.max;
      eChart == null ? void 0 : eChart.setOption(options, true);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps({
        ref_key: "mfMapLineRef",
        ref: mfMapLineRef,
        style: { "width": "100%", "height": "100%" }
      }, toHandlers(unref(commonEvents), true)), null, 16);
    };
  }
});
export {
  _sfc_main as default
};
