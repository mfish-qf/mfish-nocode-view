<script lang="tsx">
  import { defineComponent, ref, unref } from "vue";
  import { Tooltip } from "ant-design-vue";
  import { SearchOutlined } from "@ant-design/icons-vue";
  import AppSearchModal from "./AppSearchModal.vue";
  import { useI18n } from "@mfish/core/src/hooks/web/UseI18n";
  import { useDesign } from "@mfish/core";

  export default defineComponent({
    name: "AppSearch",
    setup() {
      const showModal = ref(false);
      const { t } = useI18n();
      const { prefixCls } = useDesign("app-search");
      function changeModal(show: boolean) {
        showModal.value = show;
      }

      return () => {
        return (
          <div class='p-1' onClick={changeModal.bind(null, true)}>
            <Tooltip>
              {{
                title: () => t("common.searchText"),
                default: () => <SearchOutlined class={prefixCls} />
              }}
            </Tooltip>
            <AppSearchModal onClose={changeModal.bind(null, false)} visible={unref(showModal)} />
          </div>
        );
      };
    }
  });
</script>
<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-app-search";

  .@{prefix-cls} {
    transition: all 0.2s ease-in;
    &:hover {
      transform: scale(1.2);
    }
  }
</style>
