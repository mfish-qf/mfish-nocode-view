<template>
  <div class="anticon" :class="getAppLogoClass" @click="allowGoHome ? goHome : ''">
    <img src="@mfish/core/src/assets/images/logo.png" alt="logo" />
    <div class="ml-2 truncate md:opacity-100" :class="getTitleClass" v-show="showTitle">
      <slot v-if="titleSlot" name="title"></slot>
      <span v-else>{{ shortName }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { computed, unref } from "vue";
  import { useGlobSetting } from "@mfish/core/src/hooks/setting";
  import { useGo } from "@mfish/core/src/hooks/web/UsePage";
  import { useMenuSetting } from "@mfish/core/src/hooks/setting/UseMenuSetting";
  import { useDesign } from "@mfish/core";
  import { usePermissionStore } from "@mfish/stores/modules";

  const props = defineProps({
    allowGoHome: { type: Boolean, default: true },
    /**
     * The theme of the current parent component
     */
    theme: { type: String, validator: (v: string) => ["light", "dark"].includes(v) },
    /**
     * Whether to show title
     */
    showTitle: { type: Boolean, default: true },
    /**
     * 标题外部挂载
     */
    titleSlot: { type: Boolean, default: false },
    /**
     * The title is also displayed when the menu is collapsed
     */
    alwaysShowTitle: { type: Boolean }
  });

  const { prefixCls } = useDesign("app-logo");
  const { getCollapsedShowTitle } = useMenuSetting();
  const permissionStore = usePermissionStore();
  const { shortName } = useGlobSetting();
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
  @prefix-cls: ~"@{namespace}-app-logo";

  .@{prefix-cls} {
    display: flex;
    align-items: center;
    padding-left: 7px;
    cursor: pointer;
    transition: all 0.2s ease;

    &.collapsed-show-title {
      padding-left: 20px;
    }

    &__title {
      color: @button-primary-color;
      font-size: 16px;
      font-weight: 700;
      transition: all 0.5s;
      line-height: normal;
    }
  }
</style>
