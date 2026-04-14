---
name: add-screen-component
description: 在摸鱼低代码自助大屏中新增自定义组件，包括创建组件 Vue 文件、数据定义文件、配置面板文件，并在 ComUtils.ts 中注册枚举、在 index.ts 中注册导出。当用户提到"大屏新增组件"、"自助大屏添加组件"、"screen 新增组件"、"添加大屏自定义组件"时使用此 skill。
---

# 自助大屏新增自定义组件

## 目录结构

组件位于：`packages/nocode/src/screen/charts/coms/`

每个组件对应一个子目录，包含：

```
MfXxx/
├── index.vue            # 组件展示逻辑
├── MfXxxConfig.vue      # 样式/配置面板（可选）
├── MfXxxDataConfig.vue  # 数据配置面板（可选）
└── mfXxx.data.ts        # 组件数据定义（必须）
```

---

## Step 1：在 ComUtils.ts 中注册枚举

文件：`packages/nocode/src/screen/charts/coms/ComUtils.ts`

在 `ComType` 枚举末尾追加新类型：

```ts
MfXxx = "MfXxx",
```

---

## Step 2：创建 index.vue（组件展示）

```vue
<!--
 @description: [组件描述]
 @author: mfish
 @date: [日期]
-->
<template>
  <div :style="containerStyle" v-on="commonEvents">
    <!-- 组件内容 -->
  </div>
</template>
<script setup lang="ts">
  import { PropType } from "vue";
  import { Chart, ChartContain } from "../../../common/Constants.ts";
  import { useChartEventHandle } from "../../../common/ChartEventUtils.ts";

  defineOptions({ name: "MfXxx" });
  const props = defineProps({
    chart: { type: Object as PropType<Chart>, required: true },
    chartContain: { type: Object as PropType<ChartContain>, required: true }
  });
  const { commonEvents } = useChartEventHandle(props.chart);
</script>
<style scoped lang="less"></style>
```

**关键约定：**
- `defineOptions({ name: "MfXxx" })` name 必须与组件目录名一致
- props 固定两个：`chart: Chart` 和 `chartContain: ChartContain`
- 如需自定义事件，加 `emit("eventHandler", e)` 并在 `useChartEventHandle` 第三参数传入事件名数组
- 如需字体样式，使用 `getFontStyle(props.chart)` 获取计算样式

---

## Step 3：创建 MfXxxConfig.vue（样式配置面板，可选）

```vue
<!--
 @description: [组件]配置
 @author: mfish
 @date: [日期]
-->
<template>
  <StyleConfig :class="prefixCls">
    <slot></slot>
    <!-- 配置项 -->
  </StyleConfig>
</template>
<script setup lang="ts">
  import { useDesign } from "@mfish/core/hooks";
  import { useScreenEditStore } from "@nocode/stores";
  import StyleConfig from "../../../frame/FrameConfig/BaseConfig/StyleConfig.vue";

  const screenEditStore = useScreenEditStore();
  const { prefixCls } = useDesign("xxx-config");
</script>
<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-xxx-config";
  @import "../../../common/index";
</style>
```

**常用配置子组件：**
- `<TitleConfig />` — 文字样式（字体/大小/颜色/对齐）
- `<MfishColorPicker />` — 颜色选择器
- `<IconPicker />` — 图标选择
- `<AInput />` — 文本输入
- `<ACheckbox />` — 复选框
- `<ARadioGroup />` + `<ARadioButton />` — 单选组

通过 `screenEditStore.getCurConfigComponent.chart.options.xxx` 读写配置，通过 `screenEditStore.getCurConfigComponent.chart.data.dataSet.xxx` 读写数据。

---

## Step 4：创建 MfXxxDataConfig.vue（数据配置面板，仅数据驱动组件需要）

数据驱动组件（需要绑定 API 数据）才需要此文件。可参考 `MfDataTag/MfDataTagDataConfig.vue`。

---

## Step 5：创建 mfXxx.data.ts（组件数据定义）

这是最核心的注册文件：

```ts
import { createAsyncComponent } from "@mfish/core/utils/factory/CreateAsyncComponent";
import { cloneDeep } from "lodash-es";
import { Chart, MfComponent } from "../../../common/Constants.ts";
import { comConfigDisplay, ComponentData, ComType, DisplayConfig } from "../ComUtils.ts";
import { shallowRef } from "vue";

/**
 * @description: [组件描述]
 * @author: mfish
 * @date: [日期]
 */
function mfXxxCreate(chart: MfComponent) {
  chart.chart.data.dataSet = cloneDeep(mfXxxData.defaultData);
  chart.chart.data.headers = mfXxxData.defaultHeaders && mfXxxData.defaultHeaders();
  chart.chart.data.limit = 1;
  chart.chart.data.maxLimit = 1;
  chart.chartContain.dropInfo.width = 200;   // 初始宽度（像素）
  chart.chartContain.dropInfo.height = 100;  // 初始高度（像素）
  return chart;
}

const getConfig = () => {
  const config = cloneDeep(comConfigDisplay) as DisplayConfig;
  // 不需要数据配置时：config.data.show = false;
  config.style.payload.component = shallowRef(
    createAsyncComponent(() => import("./MfXxxConfig.vue"), {
      loading: true,
      size: "large"
    })
  );
  // 有数据配置时：
  // config.data.payload.component = shallowRef(
  //   createAsyncComponent(() => import("./MfXxxDataConfig.vue"), { loading: true, size: "large" })
  // );
  return config;
};

const mfXxxData: ComponentData = {
  type: ComType.MfXxx,
  component: createAsyncComponent(() => import("./index.vue"), { loading: true }),
  create: mfXxxCreate,
  config: getConfig(),
  defaultData: { /* 静态默认数据 */ },
  defaultHeaders: () => {
    return cloneDeep({
      fieldName: { colName: "fieldName", dataType: "string", rename: "字段名" }
    });
  },
  initData: (chart: Chart, data?: any) => {
    // 处理动态数据加载逻辑，静态组件直接留空 () => {}
  },
  // 可选：自定义事件
  customEvents: [{ name: "事件名", value: "eventKey" }]
};

export default mfXxxData;
```

**关键说明：**
- `type` 必须与 `ComType` 枚举值匹配
- `create` 中设置组件初始宽高和默认数据
- `config.data.show = false` 表示不显示数据配置 Tab
- 静态纯展示组件 `initData: () => {}` 即可
- 数据驱动组件需在 `initData` 中解析 API 返回数据并写入 `chart.data.dataSet`

---

## Step 6：在 index.ts 注册（仅需全局导出时）

如果组件需要被其他地方直接 import 使用（如 `MfCombine`、`MfTag`），在 `index.ts` 中添加：

```ts
export { default as MfXxx } from "../../charts/coms/MfXxx/index.vue";
```

> 注意：`.data.ts` 文件通过 `import.meta.glob("./**/*.data.ts")` 自动扫描注册，无需手动在 `index.ts` 中添加。

---

## 常见组件模式参考

| 模式 | 参考组件 | 特征 |
|------|----------|------|
| 纯静态文本/标签 | `MfTag` | `data.show=false`，`initData: ()=>{}` |
| 静态+可交互按钮 | `MfButton` | `data.show=false`，含 `customEvents` |
| 动态数据驱动 | `MfDataTag`、`MfScrollTable` | 有 `DataConfig.vue`，`initData` 解析数据 |
| ECharts 图表 | `MfBar`、`MfLine` | 使用 `useEchartsData()`，含 series/grid 配置 |
| DataV 装饰 | `MfBorder*`、`MfDecoration*` | 无数据，样式配置简单 |

---

## 完整流程 Checklist

```
- [ ] Step 1: ComUtils.ts 枚举中添加 MfXxx = "MfXxx"
- [ ] Step 2: 创建 MfXxx/index.vue
- [ ] Step 3: 创建 MfXxx/MfXxxConfig.vue（如有样式配置）
- [ ] Step 4: 创建 MfXxx/MfXxxDataConfig.vue（如有数据配置）
- [ ] Step 5: 创建 MfXxx/mfXxx.data.ts
- [ ] Step 6: index.ts 添加导出（如需全局引用）
- [ ] 验证：ComType.MfXxx 枚举值与 mfXxx.data.ts 中 type 一致
- [ ] 验证：组件 defineOptions.name 与目录名一致
```
