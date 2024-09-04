<!--
 @description: 多级菜单样例
 @author: mfish
 @date: 2022/12/14 17:18
-->
<template>
  <div>
    <PageWrapper title="多级菜单" content="多级菜单通过【系统管理->菜单配置】配置多层目录实现">
      <br />
    </PageWrapper>
    <PageWrapper title="菜单隐藏" content="菜单隐藏，通过【系统管理->菜单配置->菜单状态】设置隐藏">
      <br />
    </PageWrapper>
    <PageWrapper title="外部打开" content="新窗口打开，通过【系统管理->菜单配置->新窗口打开】设置是">
      <br />
    </PageWrapper>
    <PageWrapper
      title="外部地址嵌入"
      content="外部地址，通过【系统管理->菜单配置->组件路径】设置外部地址，例如：https://www.baidu.com"
    >
      <br />
    </PageWrapper>
    <PageWrapper
      title="页面缓存"
      content="页面缓存，通过【系统管理->菜单配置->是否缓存】设置是，页面在切换时不会重新加载。
      关闭后下次打开会重新加载。页面缓存会采用defineOptions中name属性进行区分，如果需要缓存尽量保证name唯一性"
    >
      <br />
    </PageWrapper>
    <PageWrapper title="路由路径说明" content="路由路径每层只需要配置当前层路由，最终路由路径会根据层级自动组合">
      <br />
    </PageWrapper>
  </div>
</template>

<script lang="ts" setup>
  import { PageWrapper } from "@/components/general/Page";
</script>
