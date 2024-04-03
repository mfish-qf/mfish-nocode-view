<template>
  <PageWrapper title="引导页" content="用于给用户的指引操作">
    <a-button type="primary" @click="handleStart">开始</a-button>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { PageWrapper } from "/@/components/general/Page";
  import { useDesign } from "/@/hooks/web/UseDesign";
  import intro from "intro.js";
  import "intro.js/minified/introjs.min.css";

  const { prefixVar } = useDesign("");

  function handleStart() {
    intro()
      .setOptions({
        nextLabel: "下一步",
        prevLabel: "上一步",
        doneLabel: "立即体验",
        steps: [
          {
            title: "欢迎",
            intro: "欢饮使用摸鱼低代码平台! 👋"
          },
          {
            title: "菜单",
            element: document.querySelector(`.${prefixVar}-layout-sider-wrapper`)!,
            intro: "这是一个菜单栏"
          },
          {
            title: "折叠按钮",
            element: document.querySelector(`.${prefixVar}-layout-header-trigger`)!,
            intro: "这是一个菜单折叠按钮"
          },
          {
            title: "用户功能",
            element: document.querySelector(`.${prefixVar}-layout-header-action`)!,
            intro: "这是用户功能区域"
          }
        ]
      })
      .start();
  }
</script>
