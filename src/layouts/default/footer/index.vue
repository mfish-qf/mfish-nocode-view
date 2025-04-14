<template>
  <AFooter :class="prefixCls" v-if="getShowLayoutFooter" ref="footerRef">
    <div :class="`${prefixCls}__links`">
      <a @click="openWindow(SITE_URL)">{{ t("layout.footer.onlinePreview") }}</a>
      <GithubFilled @click="openWindow(GITHUB_URL)" :class="`${prefixCls}__github`" />
      <a @click="openWindow(DOC_URL)">{{ t("layout.footer.onlineDocument") }}</a>
    </div>
    <div>Copyright &copy; 2023 &mdash; {{ shortName }} {{ title }}</div>
  </AFooter>
</template>

<script lang="ts" setup>
  import { computed, defineComponent, unref, ref } from "vue";
  import { Layout } from "ant-design-vue";
  import { GithubFilled } from "@ant-design/icons-vue";
  import { DOC_URL, GITHUB_URL, SITE_URL } from "@mfish/core/src/settings/SiteSetting";
  import { openWindow } from "@mfish/core/src/utils";
  import { useI18n } from "@mfish/core/src/hooks/web/UseI18n";
  import { useRootSetting } from "@mfish/core";
  import { useRouter } from "vue-router";
  import { useDesign } from "@mfish/core";
  import { useLayoutHeight } from "../content/UseContentViewHeight";
  import { ComponentRef } from "@mfish/types";
  import { useGlobSetting } from "@mfish/core/src/hooks/setting";

  defineComponent({ name: "LayoutFooter" });
  const AFooter = Layout.Footer;

  const { t } = useI18n();
  const { title, shortName } = useGlobSetting();
  const { getShowFooter } = useRootSetting();
  const { currentRoute } = useRouter();
  const { prefixCls } = useDesign("layout-footer");

  const footerRef = ref<ComponentRef>(null);
  const { setFooterHeight } = useLayoutHeight();

  const getShowLayoutFooter = computed(() => {
    if (unref(getShowFooter)) {
      const footerEl = unref(footerRef)?.$el;
      setFooterHeight(footerEl?.offsetHeight || 0);
    } else {
      setFooterHeight(0);
    }
    return unref(getShowFooter) && !unref(currentRoute).meta?.hiddenFooter;
  });
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-layout-footer";

  @normal-color: rgba(0, 0, 0, 0.45);

  @hover-color: rgba(0, 0, 0, 0.85);

  .@{prefix-cls} {
    color: @normal-color;
    text-align: center;

    &__links {
      margin-bottom: 8px;

      a {
        color: @normal-color;

        &:hover {
          color: @hover-color;
        }
      }
    }

    &__github {
      margin: 0 30px;

      &:hover {
        color: @hover-color;
      }
    }
  }
</style>
