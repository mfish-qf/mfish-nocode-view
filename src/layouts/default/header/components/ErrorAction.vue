<template>
  <Tooltip
    :title="t('layout.header.tooltipErrorLog')"
    placement="bottom"
    :mouse-enter-delay="0.5"
    @click="handleToErrorList"
  >
    <Badge :count="getCount" :offset="[0, 10]" :overflow-count="99">
      <Icon icon="ion:bug-outline" />
    </Badge>
  </Tooltip>
</template>
<script lang="ts">
  import { computed, defineComponent } from "vue";
  import { Badge, Tooltip } from "ant-design-vue";
  import { Icon } from "@mfish/core/components/Icon";
  import { useI18n } from "@mfish/core/hooks";
  import { useErrorLogStore } from "@mfish/stores/modules";
  import { PageEnum } from "@mfish/core/enums";
  import { useRouter } from "vue-router";

  export default defineComponent({
    name: "ErrorAction",
    components: { Icon, Tooltip, Badge },

    setup() {
      const { t } = useI18n();
      const { push } = useRouter();
      const errorLogStore = useErrorLogStore();

      const getCount = computed(() => errorLogStore.getErrorLogListCount);

      function handleToErrorList() {
        push(PageEnum.ERROR_LOG_PAGE).then(() => {
          errorLogStore.setErrorLogListCount(0);
        });
      }

      return {
        t,
        getCount,
        handleToErrorList
      };
    }
  });
</script>
