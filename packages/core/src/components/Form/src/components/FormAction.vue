<template>
  <ACol v-bind="actionColOpt" v-if="showActionButtonGroup">
    <div style="width: 100%" :style="{ textAlign: actionColOpt.style.textAlign }">
      <Form.Item>
        <slot name="submitBefore"></slot>
        <AButton type="primary" class="ml-2" v-bind="getSubmitBtnOptions" @click="submitAction" v-if="showSubmitButton">
          {{ getSubmitBtnOptions.text }}
        </AButton>
        <slot name="resetBefore"></slot>
        <AButton type="default" class="ml-2" v-bind="getResetBtnOptions" @click="resetAction" v-if="showResetButton">
          {{ getResetBtnOptions.text }}
        </AButton>
        <slot name="advanceBefore"></slot>
        <AButton type="link" size="small" @click="toggleAdvanced" v-if="showAdvancedButton && !hideAdvanceBtn">
          {{ isAdvanced ? t("component.form.putAway") : t("component.form.unfold") }}
          <BasicArrow class="ml-1" :expand="!isAdvanced" up />
        </AButton>
        <slot name="advanceAfter"></slot>
      </Form.Item>
    </div>
  </ACol>
</template>
<script lang="ts" setup>
  import type { ColEx } from "../types";
  import { computed, PropType } from "vue";
  import { Button as AButton, Col as ACol, Form } from "ant-design-vue";
  import { ButtonProps } from "@core/components/Button";
  import { BasicArrow } from "@core/components/Basic";
  import { useFormContext } from "../hooks/UseFormContext";
  import { useI18n } from "@core/hooks";
  import { propTypes } from "@core/utils/PropTypes";

  defineOptions({ name: "BasicFormAction" });

  const props = defineProps({
    showActionButtonGroup: propTypes.bool.def(true),
    showResetButton: propTypes.bool.def(true),
    showSubmitButton: propTypes.bool.def(true),
    showAdvancedButton: propTypes.bool.def(true),
    resetButtonOptions: {
      type: Object as PropType<ButtonProps>,
      default: () => ({})
    },
    submitButtonOptions: {
      type: Object as PropType<ButtonProps>,
      default: () => ({})
    },
    actionColOptions: {
      type: Object as PropType<Partial<ColEx>>,
      default: () => ({})
    },
    actionSpan: propTypes.number.def(4),
    isAdvanced: propTypes.bool,
    hideAdvanceBtn: propTypes.bool
  });

  const emit = defineEmits(["toggle-advanced"]);

  const { t } = useI18n();
  const { resetAction, submitAction } = useFormContext();

  const actionColOpt = computed(() => {
    const { showAdvancedButton, actionSpan, actionColOptions } = props;
    const advancedSpanObj = showAdvancedButton ? { span: actionSpan < 4 ? 24 : actionSpan } : {};
    const actionColOpt: Partial<ColEx> = {
      style: { textAlign: "left" },
      span: showAdvancedButton ? 6 : 4,
      ...advancedSpanObj,
      ...actionColOptions
    };
    return actionColOpt;
  });

  const getResetBtnOptions = computed((): ButtonProps => {
    return Object.assign(
      {
        text: t("common.resetText")
      },
      props.resetButtonOptions
    );
  });

  const getSubmitBtnOptions = computed((): ButtonProps => {
    return Object.assign(
      {
        text: t("common.queryText")
      },
      props.submitButtonOptions
    );
  });

  function toggleAdvanced() {
    emit("toggle-advanced");
  }
</script>
