<template>
  <div class="anticon" :class="getAppLogoClass" @click="goHome">
    <img src="../../../../assets/images/logo.png" />
    <div class="ml-2 truncate md:opacity-100" :class="getTitleClass" v-show="showTitle">
      {{ title }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, unref } from "vue";
import { useGlobSetting } from "/@/hooks/setting";
import { useGo } from "/@/hooks/web/UsePage";
import { useMenuSetting } from "/@/hooks/setting/UseMenuSetting";
import { useDesign } from "/@/hooks/web/UseDesign";
import { usePermissionStore } from "/@/store/modules/Permission";

const props = defineProps({
  /**
   * The theme of the current parent component
   */
  theme: { type: String, validator: (v: string) => ["light", "dark"].includes(v) },
  /**
   * Whether to show title
   */
  showTitle: { type: Boolean, default: true },
  /**
   * The title is also displayed when the menu is collapsed
   */
  alwaysShowTitle: { type: Boolean }
});

const { prefixCls } = useDesign("app-logo");
const { getCollapsedShowTitle } = useMenuSetting();
const permissionStore = usePermissionStore();
const { title } = useGlobSetting();
const go = useGo();

const getAppLogoClass = computed(() => [
  prefixCls,
  props.theme,
  { "collapsed-show-title": unref(getCollapsedShowTitle) }
]);

const getTitleClass = computed(() => [
  `${prefixCls}__title`,
  {
    "xs:opacity-0": !props.alwaysShowTitle
  }
]);

function goHome() {
  go(permissionStore.homePath);
}
</script>
<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-app-logo';

.@{prefix-cls} {
  display: flex;
  align-items: center;
  padding-left: 7px;
  cursor: pointer;
  transition: all 0.2s ease;

  &.light {
    border-bottom: 0px solid @border-color-base;
  }

  &.collapsed-show-title {
    padding-left: 20px;
  }

  &.light &__title {
    color: @primary-color;
  }

  &.dark &__title {
    color: @white;
  }

  &__title {
    font-size: 16px;
    font-weight: 700;
    transition: all 0.5s;
    line-height: normal;
  }
}
</style>
