<script lang="tsx">
  import type { DescInstance, DescItem, DescriptionProps } from "./Typing";
  import type { DescriptionsProps } from "ant-design-vue/es/descriptions";
  import { computed, CSSProperties, defineComponent, PropType, ref, toRaw, toRefs, unref } from "vue";
  import type { CollapseContainerOptions } from "@core/components/Container";
  import { CollapseContainer } from "@core/components/Container";
  import { get } from "lodash-es";
  import { Descriptions } from "ant-design-vue";
  import { useAttrs, useDesign } from "@core/hooks";
  import { isFunction } from "@core/utils/Is";
  import { getSlot } from "@core/utils/helper/TsxHelper";
  import { Recordable } from "@mfish/types";

  const props = {
    useCollapse: { type: Boolean, default: true },
    title: { type: String, default: "" },
    size: {
      type: String,
      validator: (v) => ["small", "default", "middle", undefined].includes(v),
      default: "small"
    },
    bordered: { type: Boolean, default: true },
    column: {
      type: [Number, Object] as PropType<number | Recordable>,
      default: () => {
        return { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 };
      }
    },
    collapseOptions: {
      type: Object as PropType<CollapseContainerOptions>,
      default: null
    },
    schema: {
      type: Array as PropType<DescItem[]>,
      default: () => []
    },
    data: { type: Object }
  };

  export default defineComponent({
    name: "Description",
    props,
    emits: ["register"],
    setup(props, { slots, emit }) {
      const propsRef = ref<Partial<DescriptionProps> | null>(null);

      const { prefixCls } = useDesign("description");
      const attrs = useAttrs();

      // Custom title component: get title
      const getMergeProps = computed(() => {
        return {
          ...props,
          ...(unref(propsRef) as Recordable)
        } as DescriptionProps;
      });

      const getProps = computed(() => {
        const opt = {
          ...unref(getMergeProps),
          title: undefined
        };
        return opt as DescriptionProps;
      });

      /**
       * @description: Whether to setting title
       */
      const useWrapper = computed(() => !!unref(getMergeProps).title);

      /**
       * @description: Get configuration Collapse
       */
      const getCollapseOptions = computed((): CollapseContainerOptions => {
        return {
          // Cannot be expanded by default
          canExpand: false,
          ...unref(getProps).collapseOptions
        };
      });

      const getDescriptionsProps = computed(() => {
        return { ...unref(attrs), ...unref(getProps) } as DescriptionsProps;
      });

      /**
       * @description: 设置desc
       */
      function setDescProps(descProps: Partial<DescriptionProps>): void {
        // Keep the last setDrawerProps
        propsRef.value = { ...(unref(propsRef) as Recordable), ...descProps } as Recordable;
      }

      // Prevent line breaks
      function renderLabel({ label, labelMinWidth, labelStyle }: DescItem) {
        if (!labelStyle && !labelMinWidth) {
          return label;
        }

        const labelStyles: CSSProperties = {
          ...labelStyle,
          minWidth: `${labelMinWidth}px `
        };
        return <div style={labelStyles}>{label}</div>;
      }

      function renderItem() {
        const { schema, data } = unref(getProps);
        return unref(schema)
          .map((item) => {
            const { render, field, span, show, contentMinWidth, init } = item;
            if (init && isFunction(init)) {
              init(toRaw(data));
            }
            if (show === false || (show && isFunction(show) && !show(data))) {
              return null;
            }
            const getContent = () => {
              const _data = unref(getProps)?.data;
              if (!_data) {
                return null;
              }
              const getField = get(_data, field);
              if (getField && !Object.prototype.hasOwnProperty.call(toRefs(_data), field)) {
                return isFunction(render) ? render("", _data) : "";
              }
              return isFunction(render) ? render(getField, _data) : (getField ?? "");
            };

            const width = contentMinWidth;
            return (
              <Descriptions.Item label={renderLabel(item)} key={field} span={span}>
                {() => {
                  if (!contentMinWidth) {
                    return getContent();
                  }
                  const style: CSSProperties = {
                    minWidth: `${width}px`
                  };
                  return <div style={style}>{getContent()}</div>;
                }}
              </Descriptions.Item>
            );
          })
          .filter((item) => !!item);
      }

      const renderDesc = () => {
        return (
          <Descriptions class={`${prefixCls}`} {...(unref(getDescriptionsProps) as any)}>
            {renderItem()}
          </Descriptions>
        );
      };

      const renderContainer = () => {
        const content = props.useCollapse ? renderDesc() : <div>{renderDesc()}</div>;
        // Reduce the dom level
        if (!props.useCollapse) {
          return content;
        }

        const { canExpand, helpMessage } = unref(getCollapseOptions);
        const { title } = unref(getMergeProps);

        return (
          <CollapseContainer title={title} canExpan={canExpand} helpMessage={helpMessage}>
            {{
              default: () => content,
              action: () => getSlot(slots, "action")
            }}
          </CollapseContainer>
        );
      };

      function getData() {
        return unref(getProps)?.data;
      }

      const methods: DescInstance = {
        setDescProps,
        getData
      };

      emit("register", methods);
      return () => (unref(useWrapper) ? renderContainer() : renderDesc());
    }
  });
</script>
