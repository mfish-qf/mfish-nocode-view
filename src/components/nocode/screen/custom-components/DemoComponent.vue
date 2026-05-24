<!--
 @description: 自定义组件示例 - 用户可以参考此示例创建自己的组件
 @author: mfish
 @date: 2025/5/22
 @note: 这是一个示例组件,展示如何在自定义组件中接收属性和使用
-->
<template>
  <div class="demo-custom-component">
    <h3>{{ title }}</h3>
    <p>这是一个自定义组件示例</p>
    <p>当前类型: {{ type }}</p>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  defineOptions({ name: "DemoCustomComponent" });

  // 定义组件属性
  const props = defineProps({
    title: {
      type: String,
      default: "自定义组件"
    },
    type: {
      type: String,
      default: "default"
    }
  });
</script>

<style scoped lang="less">
  .demo-custom-component {
    padding: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 8px;
    color: white;

    h3 {
      margin: 0 0 12px 0;
      font-size: 20px;
    }

    p {
      margin: 8px 0;
      font-size: 14px;
      opacity: 0.9;
    }
  }
</style>
