<template>
  <div :class="getClass" @click="toggleDarkMode">
    <div :class="`${prefixCls}-inner`">
      <SvgIcon :class="`${prefixCls}-icon`" size="14" :name="isDark ? 'moon' : 'sun'" />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { computed, unref } from "vue";
  import { SvgIcon } from "@/components/general/Icon";
  import { useDesign } from "@/hooks/web/UseDesign";
  import { useRootSetting } from "@/hooks/setting/UseRootSetting";
  import { ThemeEnum } from "@/enums/AppEnum";
  import { setDarkTheme } from "@/logics/InitAppConfig";
  import { saveSysConfig } from "@/api/sys/SysConfig";
  import { useAppStore } from "@/store/modules/App";

  const { prefixCls } = useDesign("dark-switch");
  const { getDarkMode, setDarkMode } = useRootSetting();
  const appStore = useAppStore();
  const isDark = computed(() => getDarkMode.value === ThemeEnum.DARK);
  const getClass = computed(() => [
    prefixCls,
    {
      [`${prefixCls}--dark`]: unref(isDark)
    }
  ]);

  async function toggleDarkMode(event: MouseEvent) {
    const darkMode = getDarkMode.value === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK;
    const isAppearanceTransition =
      // @ts-expect-error
      document.startViewTransition && !globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isAppearanceTransition || !event) {
      setTheme(darkMode);
      return;
    }
    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    // @ts-expect-error: Transition API
    const transition = document.startViewTransition(() => {
      setTheme(darkMode);
    });
    transition.ready.then(() => {
      const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];
      document.documentElement.animate(
        {
          clipPath
        },
        {
          duration: 1000,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)"
        }
      );
    });
  }

  function setTheme(darkMode: ThemeEnum) {
    setDarkMode(darkMode);
    setDarkTheme(darkMode);
    saveSysConfig({ config: JSON.stringify(unref(appStore.getProjectConfig)), type: 0 }, false).then();
  }
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-dark-switch";
  [data-theme="dark"] {
    .@{prefix-cls} {
      border: 1px solid @border-color-dark;
    }
  }
  .@{prefix-cls} {
    border: 1px solid @border-color-base;
    position: relative;
    display: flex;
    width: 46px;
    height: 24px;
    margin: 2px;
    cursor: pointer;
    border-radius: 30px;
    justify-content: space-between;
    align-items: center;
    transition: background 0.5s ease;
    &:hover {
      background-color: @header-bg-hover-color;
    }
    &-inner {
      position: absolute;
      z-index: 1;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      transition:
        transform 0.5s,
        background-color 0.5s;
      will-change: transform;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-icon {
      position: absolute;
    }

    &--dark {
      .@{prefix-cls}-inner {
        transform: translateX(calc(100% + 6px));
      }
    }
  }
</style>
