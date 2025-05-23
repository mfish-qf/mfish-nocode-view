<script lang="ts">
  import { computed, defineComponent, h, unref } from "vue";
  import BasicButton from "./BasicButton.vue";
  import { Popconfirm } from "ant-design-vue";
  import { extendSlots } from "../../../utils/helper/TsxHelper";
  import { omit } from "lodash-es";
  import { useAttrs } from "@core/hooks";
  import { useI18n } from "@core/hooks";
  import { Recordable } from "@mfish/types";

  const props = {
    /**
     * Whether to enable the drop-down menu
     * @default: true
     */
    enable: {
      type: Boolean,
      default: true
    }
  };

  export default defineComponent({
    name: "PopButton",
    inheritAttrs: false,
    props,
    setup(props, { slots }) {
      const { t } = useI18n();
      const attrs = useAttrs();

      // get inherit binding value
      const getBindValues = computed(() => {
        return Object.assign(
          {
            okText: t("common.okText"),
            cancelText: t("common.cancelText")
          },
          { ...props, ...unref(attrs) }
        );
      });

      return () => {
        const bindValues = omit(unref(getBindValues), "icon");
        const btnBind = omit(bindValues, "title") as Recordable;
        if (btnBind.disabled) btnBind.color = "";
        const Button = h(BasicButton, btnBind, extendSlots(slots));

        // If it is not enabled, it is a normal button
        if (!props.enable) {
          return Button;
        }
        return h(Popconfirm, bindValues, { default: () => Button });
      };
    }
  });
</script>
