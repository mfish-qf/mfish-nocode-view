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

**新增文件约束：**
- 新建 `SKILL.md`、`.vue`、`.ts` 文件时统一保存为 **UTF-8 without BOM**
- 如果文件开头带 BOM，某些解析器会把 frontmatter 或源码首行识别失败
- 新增源码默认使用 ASCII；只有项目已有同类中文注释/文案且确有必要时再写中文

---

## Step 1：在 ComUtils.ts 中注册枚举

文件：`packages/nocode/src/screen/charts/coms/ComUtils.ts`

在 `ComType` 枚举末尾追加新类型：

```ts
MfXxx = "MfXxx",
```

**先检查再追加：**
- 先确认 `ComType` 里是否已经存在该枚举，避免重复定义
- 若仓库中已存在空目录 `MfXxx/`，不要假设组件已实现，要继续检查其中是否真的有 `index.vue`、`mfXxx.data.ts` 等源文件

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
- `<MfishColorPicker />` — 颜色选择器（见下方详细说明）
- `<IconPicker />` — 图标选择
- `<AInput />` — 文本输入
- `<ACheckbox />` — 复选框
- `<ARadioGroup />` + `<ARadioButton />` — 单选组

通过 `screenEditStore.getCurConfigComponent.chart.options.xxx` 读写配置，通过 `screenEditStore.getCurConfigComponent.chart.data.dataSet.xxx` 读写数据。

### MfishColorPicker 颜色选择器使用规范

大屏组件中所有涉及颜色配置的地方，统一使用 `MfishColorPicker` 组件，不要使用 `AInput` 等文本输入来代替。

**引入方式：**

```ts
import { MfishColorPicker } from "@nocode/common";
```

> 注意：`MfishColorPicker` 从 `@nocode/common` 导出（定义在 `packages/nocode/src/common/index.ts`），不要使用相对路径引用。

**type 属性规则：**
- `type` 不设置（默认 `3`）：同时支持单色和渐变色
- `type` 设置为 `1`：仅支持单色选择，适用于背景色、边框色、图标色等无需渐变的场景
- `type` 设置为 `2`：仅支持渐变色

**模板用法：**

```vue
<!-- 仅单色 -->
<MfishColorPicker
  placeholder="设置背景色，格式#FFFFFF"
  :type="1"
  :value="bgColor"
  @confirm-change="bgColorChange"
  @input-change="bgColorChange"
/>

<!-- 支持单色和渐变色 -->
<MfishColorPicker
  placeholder="设置颜色，格式#FFFFFF"
  :value="color"
  @confirm-change="colorChange"
  @input-change="colorChange"
/>
```

**事件处理：**

`MfishColorPicker` 通过 `confirmChange` 和 `inputChange` 两个事件向外传递颜色值，回调函数签名为 `(displayedColor: string, hex: string)`。`displayedColor` 为 rgba 格式的完整颜色值（含透明度），`hex` 为十六进制颜色值。通常只需使用第一个参数。

```ts
function bgColorChange(val: string) {
  bgColor.value = val;
  updateOption("bgColor", val);
}
```

**完整示例（参考 MfTag、MfCarousel）：**

```vue
<template>
  <StyleConfig :class="prefixCls">
    <div class="title">
      背景色
      <div>
        <MfishColorPicker
          placeholder="设置背景色，格式#FFFFFF"
          :type="1"
          :value="bgColor"
          @confirm-change="bgColorChange"
          @input-change="bgColorChange"
        />
      </div>
    </div>
  </StyleConfig>
</template>
<script setup lang="ts">
  import { ref, watch } from "vue";
  import { useDesign } from "@mfish/core/hooks";
  import { useScreenEditStore } from "@nocode/stores";
  import StyleConfig from "../../../frame/FrameConfig/BaseConfig/StyleConfig.vue";
  import { MfishColorPicker } from "@nocode/common";

  const screenEditStore = useScreenEditStore();
  const { prefixCls } = useDesign("xxx-config");
  const bgColor = ref("");

  watch(
    () => screenEditStore.getCurConfigComponent,
    (val) => {
      if (!val) return;
      const options = val.chart.options || {};
      bgColor.value = options.bgColor || "";
    },
    { immediate: true }
  );

  function updateOption(key: string, value: any) {
    screenEditStore.getCurConfigComponent.chart.options[key] = value;
  }

  function bgColorChange(val: string) {
    bgColor.value = val;
    updateOption("bgColor", val);
  }
</script>
```

---

## Step 4：创建 MfXxxDataConfig.vue（数据配置面板，仅数据驱动组件需要）

数据驱动组件（需要绑定 API 数据）才需要此文件。可参考 `MfDataTag/MfDataTagDataConfig.vue`。

### 数据配置参考选择规则

- **单值组件**：参考 `MfInput/MfInputDataConfig.vue`
  - 例：输入框、数字框、单个状态值
- **选项数组组件**：参考 `MfSelect/MfSelectDataConfig.vue`、`MfSegmented/MfSegmentedDataConfig.vue`
  - 例：下拉、分段器、轮播图、卡片列表
- **表格类组件**：参考 `MfTable/MfTableDataConfig.vue`
  - 例：表格、滚动表格、多列数据展示
- **纯静态展示组件**：不要为了“形式统一”硬加数据面板
  - 例：`MfPicture` 当前不支持动态绑定，不能把它当成动态数据组件模板

### 图片/轮播类组件的动态数据约定

如果组件本质上是“多张图片 + 可选文案”的数组数据，优先按数组模式设计：

```ts
defaultData: [
  { key: "", title: "", link: "" }
]
```

推荐字段含义：

- `key`: 本地文件 key 或直接图片 URL
- `title`: 图片标题
- `link`: 点击跳转链接（可选）

推荐 `defaultHeaders`：

```ts
{
  key: { colName: "key", dataType: "string", rename: "Image key/url" },
  title: { colName: "title", dataType: "string", rename: "Image title" },
  link: { colName: "link", dataType: "string", rename: "Link" }
}
```

`initData` / `setDynamicData` 要求：
- 从 `result.list` 遍历生成数组，而不是只取第一条
- 字段映射通过 `chart.data.fields?.xxx` 读取
- 动态数据无有效结果时，回退到 `defaultData`
- 展示层同时兼容本地文件 key 与外部 URL

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

## 自定义事件实现规则

新增组件如果需要支持大屏事件联动，按 `MfSelect` 的 `selectChange` 模式实现。

1. 在 `index.vue` 中注册自定义事件 key：

```ts
const { commonEvents, emitEvent } = useChartEventHandle(props.chart, undefined, ["eventKey"]);
```

多个事件时传入多个 key：

```ts
const { commonEvents, emitEvent } = useChartEventHandle(props.chart, undefined, ["cardChange", "cardClick"]);
```

2. 在交互回调中触发事件：

```ts
function eventHandler(payload: any) {
  emitEvent("eventKey", payload);
}
```

数组/选项类组件应优先按索引返回原始数据项，参考 `MfSelect`：

```ts
import { getChartData } from "../../../common/ScreenUtils.ts";

function getItemData(index: number) {
  const data = getChartData(props.chart);
  return data?.length > index ? data[index] : props.chart.data?.dataSet?.[index];
}

function itemClick(index: number) {
  emitEvent("itemClick", getItemData(index));
}
```

3. 在 `mfXxx.data.ts` 中声明可配置事件：

```ts
customEvents: [
  { name: "事件显示名称", value: "eventKey" }
]
```

约定：
- `value` 必须和 `useChartEventHandle`、`emitEvent` 使用的事件 key 完全一致。
- `name` 是配置面板展示名称，使用清晰中文，例如 `卡片点击`、`卡片切换`、`行点击`。
- 选项/数组/表格类组件的事件 payload 优先返回当前数据项，不要只返回 DOM 事件。
- 如果组件同时保留通用点击事件 `v-on="commonEvents"`，自定义点击事件可以并存；需要阻止冒泡时在模板上显式使用 `.stop`。

---

## Step 6：在 index.ts 注册（仅需全局导出时）

如果组件需要被其他地方直接 import 使用（如 `MfCombine`、`MfTag`），在 `index.ts` 中添加：

```ts
export { default as MfXxx } from "../../charts/coms/MfXxx/index.vue";
```

> 注意：`.data.ts` 文件通过 `import.meta.glob("./**/*.data.ts")` 自动扫描注册，无需手动在 `index.ts` 中添加。

**很重要：**
- 大部分新组件只需要补 `mfXxx.data.ts`，会被 `import.meta.glob("./**/*.data.ts", { eager: true })` 自动注册
- **不要默认修改** `packages/nocode/src/screen/charts/coms/index.ts`
- 只有当组件确实需要像 `MfCombine`、`MfTag` 那样被其他源码直接 `import` 时，才额外加 `export`

---

## 常见组件模式参考

| 模式 | 参考组件 | 特征 |
|------|----------|------|
| 纯静态文本/标签 | `MfTag` | `data.show=false`，`initData: ()=>{}` |
| 静态+可交互按钮 | `MfButton` | `data.show=false`，含 `customEvents` |
| 动态数据驱动 | `MfDataTag`、`MfScrollTable` | 有 `DataConfig.vue`，`initData` 解析数据 |
| 选项/数组驱动 | `MfSelect`、`MfSegmented` | `dataSet` 为数组，字段拖拽绑定多个属性 |
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
- [ ] 验证：如果只是普通组件，是否已避免无意义修改 `charts/coms/index.ts`
- [ ] 验证：动态组件的 `initData` 是否真的按 `result.list` 做了字段映射
- [ ] 验证：图片类组件是否兼容 fileKey 和外部 URL
- [ ] 验证：新增文件是否为 UTF-8 without BOM
```
