<!--
 * @description: It is troublesome to implement radio button group in the form. So it is extracted independently as a separate component
-->
<template>
  <RadioGroup v-bind="attrs" v-model:value="state" button-style="solid" @change="handleChange">
    <template v-for="item in getOptions" :key="`${item.value}`">
      <RadioButton :value="item.value" :disabled="item.disabled">
        {{ item.label }}
      </RadioButton>
    </template>
  </RadioGroup>
</template>
<script lang="ts">
  import { computed, defineComponent, PropType, ref } from "vue";
  import { Radio } from "ant-design-vue";
  import { isString } from "@core/utils/Is";
  import { useAttrs, useRuleFormItem } from "@core/hooks";

  type OptionsItem = { label: string; value: string | number | boolean; disabled?: boolean };
  type RadioItem = string | OptionsItem;

  export default defineComponent({
    name: "RadioButtonGroup",
    components: {
      RadioGroup: Radio.Group,
      RadioButton: Radio.Button
    },
    props: {
      value: {
        type: [String, Number, Boolean] as PropType<string | number | boolean>
      },
      options: {
        type: Array as PropType<RadioItem[]>,
        default: () => []
      }
    },
    emits: ["change"],
    setup(props) {
      const attrs = useAttrs();
      const emitData = ref<any[]>([]);
      // Embedded in the form, just use the hook binding to perform form verification
      const [state] = useRuleFormItem(props);
      // Processing options value
      const getOptions = computed((): OptionsItem[] => {
        const { options } = props;
        if (!options || options?.length === 0) return [];

        const isStringArr = options.some((item) => isString(item));
        if (!isStringArr) return options as OptionsItem[];

        return options.map((item) => ({ label: item, value: item })) as OptionsItem[];
      });

      function handleChange(_, ...args) {
        emitData.value = args;
      }

      return { state, getOptions, attrs, handleChange };
    }
  });
</script>
