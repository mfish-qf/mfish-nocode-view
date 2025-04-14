import { defineComponent, useTemplateRef, onMounted, createElementBlock, openBlock, mergeProps, toHandlers, unref } from "vue";
import { u as useEcharts } from "./UseEcharts.js";
import { h as useChartEventHandle } from "./index2.js";
import { cloneDeep } from "lodash-es";
import { u as useEchartsMap, g as geoCoordinate } from "./UseEchartsMap.js";
import { use } from "echarts";
import { Lines3DChart, Scatter3DChart } from "echarts-gl/charts";
import { Geo3DComponent } from "echarts-gl/components";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "MfMapLine3D" },
  __name: "index",
  props: {
    chart: { type: Object, required: true },
    chartContain: { type: Object, required: true }
  },
  setup(__props) {
    const props = __props;
    useEchartsMap(props.chart.options.geo3D);
    use([Lines3DChart, Scatter3DChart, Geo3DComponent]);
    const mfMapLineRef = useTemplateRef("mfMapLineRef");
    const { commonEvents } = useChartEventHandle(props.chart);
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
          rippleDataArray[index].value[3] += value;
          if (max < rippleDataArray[index].value[3]) {
            max = rippleDataArray[index].value[3];
          }
          if (min > rippleDataArray[index].value[3]) {
            min = rippleDataArray[index].value[3];
          }
        } else {
          rippleDataArray.push({
            name: data2,
            value: [...geoCoordinate[data2], 0, value]
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
            coords: [
              [...from, 0],
              [...to, 0]
            ],
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
      const data = convertData(dataSet == null ? void 0 : dataSet.source);
      options.series[0].data = data.lineDataArray;
      if (options.series.length > 1) {
        options.series[1].data = data.rippleDataArray;
        options.series[1].tooltip = {
          trigger: "item",
          formatter: (params) => {
            return `${params.name}<br>合计: ${params.value[3]}`;
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
