# 自定义组件使用说明

## 概述

`MfCustomize` 组件允许用户在自助大屏中加载自定义的 Vue 组件,扩展现有组件库的功能。

## 使用步骤

### 1. 创建自定义组件

在 `/src/components/nocode/screen/custom-components/` 目录下创建你的 Vue 组件,例如:

```vue
<!-- /src/components/nocode/screen/custom-components/MyCustomComponent.vue -->
<template>
  <div class="my-component">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: "MyCustomComponent" });

const props = defineProps({
  title: {
    type: String,
    default: "标题"
  },
  content: {
    type: String,
    default: "内容"
  }
});
</script>

<style scoped lang="less">
.my-component {
  padding: 20px;
  background: #f0f0f0;
  border-radius: 8px;
}
</style>
```

### 2. 在大屏中使用自定义组件

1. 在自助大屏编辑器中添加 `MfCustomize` 组件
2. 在配置面板中设置:
   - **路由地址**: `/src/components/nocode/screen/custom-components/MyCustomComponent.vue`
   - **组件属性**: 
     ```json
     {
       "title": "我的自定义组件",
       "content": "这是自定义的内容"
     }
     ```

### 3. 示例组件

项目中提供了一个示例组件供参考:
- 文件位置: `/src/components/nocode/screen/custom-components/DemoComponent.vue`
- 路由地址: `/src/components/nocode/screen/custom-components/DemoComponent.vue`
- 示例属性:
  ```json
  {
    "title": "示例组件",
    "type": "primary"
  }
  ```

## 注意事项

### ✅ 支持的路径

组件**必须**放在 `/src/components/nocode/screen/custom-components/` 目录下,支持子目录:

- `/src/components/nocode/screen/custom-components/MyComponent.vue` ✅
- `/src/components/nocode/screen/custom-components/sub/MyComponent.vue` ✅
- `/src/components/nocode/screen/custom-components/charts/BarChart.vue` ✅

### ❌ 不支持的路径

- `/src/components/MyComponent.vue` ❌
- `../components/MyComponent.vue` ❌
- 绝对路径或外部URL ❌

### 组件属性传递

- 属性必须是有效的 JSON 格式
- 属性会作为 props 传递给自定义组件
- 自定义组件需要使用 `defineProps` 接收属性

### 开发环境 vs 生产环境

使用 `import.meta.glob` 实现,确保在开发和生产环境都能正常工作:
- ✅ 开发环境 (Vite dev server)
- ✅ 生产环境 (打包后)

## 高级用法

### 使用第三方组件库

你可以在自定义组件中使用项目已安装的所有依赖:

```vue
<template>
  <AButton type="primary">{{ text }}</AButton>
</template>

<script setup lang="ts">
import { Button as AButton } from 'ant-design-vue';
import { Icon } from '@mfish/core/components/Icon';

defineProps({
  text: String
});
</script>
```

### 使用 Hooks

```vue
<script setup lang="ts">
import { useDesign } from '@mfish/core/hooks';

const { prefixCls } = useDesign('my-component');
</script>
```

### 组合式 API

自定义组件完全支持 Vue 3 的组合式 API:

```vue
<script setup lang="ts">
import { ref, computed, watch } from 'vue';

const props = defineProps({
  value: Number
});

const doubledValue = computed(() => props.value * 2);
watch(() => props.value, (newVal) => {
  console.log('值变化了:', newVal);
});
</script>
```

## 故障排查

### 组件加载失败

如果看到 "组件加载失败" 提示,检查:

1. 组件文件是否存在于 `/src/components/nocode/screen/custom-components/` 目录
2. 路由地址是否正确 (必须以 `/src/components/nocode/screen/custom-components/` 开头)
3. 浏览器控制台是否有错误信息

### 属性未生效

检查:
1. JSON 格式是否正确
2. 自定义组件是否使用 `defineProps` 正确定义属性
3. 属性名称是否匹配

## 示例配置

### 简单文本组件

**路由地址**: `/src/components/nocode/screen/custom-components/SimpleText.vue`

**组件属性**:
```json
{
  "text": "Hello World",
  "fontSize": 24,
  "color": "#333"
}
```

### 数据展示组件

**路由地址**: `/src/components/nocode/screen/custom-components/DataDisplay.vue`

**组件属性**:
```json
{
  "title": "销售数据",
  "showIcon": true,
  "theme": "blue"
}
```

### 图表组件

**路由地址**: `/src/components/nocode/screen/custom-components/CustomChart.vue`

**组件属性**:
```json
{
  "chartType": "bar",
  "data": [100, 200, 150, 300],
  "colors": ["#1890ff", "#52c41a", "#faad14", "#f5222d"]
}
```
