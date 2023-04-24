<template>
  <div :class="getClass" @click="toggleDarkMode">
    <div :class="`${prefixCls}-inner`">
      <SvgIcon :class="`${prefixCls}-icon`" v-if="isDark" size="14" name="moon" />
      <SvgIcon :class="`${prefixCls}-icon`" v-else size="14" name="sun" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, unref } from "vue";
import { SvgIcon } from "/@/components/general/Icon";
import { useDesign } from "/@/hooks/web/UseDesign";
import { useRootSetting } from "/@/hooks/setting/UseRootSetting";
import { updateHeaderBgColor, updateSidebarBgColor } from "/@/logics/theme/UpdateBackground";
import { updateDarkTheme } from "/@/logics/theme/Dark";
import { ThemeEnum } from "/@/enums/AppEnum";

const { prefixCls } = useDesign("dark-switch");
const { getDarkMode, setDarkMode, getShowDarkModeToggle } = useRootSetting();

const isDark = computed(() => getDarkMode.value === ThemeEnum.DARK);

const getClass = computed(() => [
  prefixCls,
  {
    [`${prefixCls}--dark`]: unref(isDark)
  }
]);

function toggleDarkMode() {
  const darkMode = getDarkMode.value === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK;
  setDarkMode(darkMode);
  updateDarkTheme(darkMode);
  updateHeaderBgColor();
  updateSidebarBgColor();
}
</script>
<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-dark-switch';

.@{prefix-cls} {
  border: 1px solid rgb(196 188 188);
  position: relative;
  display: flex;
  width: 50px;
  height: 26px;
  padding: 0 6px;
  margin-left: auto;
  cursor: pointer;
  border-radius: 30px;
  justify-content: space-between;
  align-items: center;

  &-inner {
    position: absolute;
    z-index: 1;
    width: 18px;
    height: 18px;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.5s, background-color 0.5s;
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
      transform: translateX(calc(100% + 2px));
      background-color: #151515;
    }
  }
}
</style>
