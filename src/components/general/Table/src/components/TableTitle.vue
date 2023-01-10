<template>
  <BasicTitle :class="prefixCls" v-if="getTitle" :helpMessage="helpMessage">
    {{ getTitle }}
  </BasicTitle>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { BasicTitle } from "/@/components/general/Basic";
import { useDesign } from "/@/hooks/web/UseDesign";
import { isFunction } from "/@/utils/Is";

export default defineComponent({
  name: "BasicTableTitle",
  components: { BasicTitle },
  props: {
    title: {
      type: [Function, String] as PropType<string | ((data: Recordable) => string)>
    },
    getSelectRows: {
      type: Function as PropType<() => Recordable[]>
    },
    helpMessage: {
      type: [String, Array] as PropType<string | string[]>
    }
  },
  setup(props) {
    const { prefixCls } = useDesign("basic-table-title");

    const getTitle = computed(() => {
      const {
        title, getSelectRows = () => {
        }
      } = props;
      let tit = title;

      if (isFunction(title)) {
        tit = title({
          selectRows: getSelectRows()
        });
      }
      return tit;
    });

    return { getTitle, prefixCls };
  }
});
</script>
<style lang="less">
@prefix-cls: ~'@{namespace}-basic-table-title';

.@{prefix-cls} {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
