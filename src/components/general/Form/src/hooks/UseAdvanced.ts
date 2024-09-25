import type { ColEx } from "../types";
import type { AdvanceState } from "../types/Hooks";
import { ComputedRef, getCurrentInstance, Ref, shallowReactive } from "vue";
import type { FormProps, FormSchema } from "../types/Form";
import { computed, unref, watch } from "vue";
import { isBoolean, isFunction, isNumber, isObject } from "@/utils/Is";
import { useBreakpoint } from "@/hooks/event/UseBreakpoint";
import { useDebounceFn } from "@vueuse/core";
import { Recordable } from "@mfish/types";

const BASIC_COL_LEN = 24;

interface UseAdvancedContext {
  advanceState: AdvanceState;
  emit: EmitType | any;
  getProps: ComputedRef<FormProps>;
  getSchema: ComputedRef<FormSchema[]>;
  formModel: Recordable;
  defaultValueRef: Ref<Recordable>;
}

export default function useAdvanced({
  advanceState,
  emit,
  getProps,
  getSchema,
  formModel,
  defaultValueRef
}: UseAdvancedContext) {
  const vm = getCurrentInstance();

  const { realWidthRef, screenEnum, screenRef } = useBreakpoint();

  const getEmptySpan = computed((): number => {
    if (!advanceState.isAdvanced) {
      return 0;
    }
    // For some special cases, you need to manually specify additional blank lines
    const emptySpan = unref(getProps).emptySpan || 0;

    if (isNumber(emptySpan)) {
      return emptySpan;
    }
    if (isObject(emptySpan)) {
      const { span = 0 } = emptySpan;
      const screen = unref(screenRef) as string;

      const screenSpan = (emptySpan as any)[screen.toLowerCase()];
      return screenSpan || span || 0;
    }
    return 0;
  });

  const debounceUpdateAdvanced = useDebounceFn(updateAdvanced, 30);

  watch(
    [() => unref(getSchema), () => advanceState.isAdvanced, () => unref(realWidthRef)],
    () => {
      const { showAdvancedButton } = unref(getProps);
      if (showAdvancedButton) {
        debounceUpdateAdvanced().then();
      }
    },
    { immediate: true }
  );

  function getAdvanced(itemCol: Partial<ColEx>, itemColSum = 0, lastRowCol = 0, isLastAction = false) {
    const width = unref(realWidthRef);
    const mdWidth =
      Number.parseInt(itemCol.md as string) ||
      Number.parseInt(itemCol.xs as string) ||
      Number.parseInt(itemCol.sm as string) ||
      (itemCol.span as number) ||
      BASIC_COL_LEN;

    const lgWidth = Number.parseInt(itemCol.lg as string) || mdWidth;
    const xlWidth = Number.parseInt(itemCol.xl as string) || lgWidth;
    const xxlWidth = Number.parseInt(itemCol.xxl as string) || xlWidth;
    const sumRowCol = (width) => {
      itemColSum += width;
      let temp = lastRowCol;
      temp += width;
      if (temp > BASIC_COL_LEN) {
        lastRowCol = 0;
      }
      lastRowCol += width;
    };

    if (width <= screenEnum.LG) {
      sumRowCol(mdWidth);
    } else if (width < screenEnum.XL) {
      sumRowCol(lgWidth);
    } else if (width < screenEnum.XXL) {
      sumRowCol(xlWidth);
    } else {
      sumRowCol(xxlWidth);
    }

    if (isLastAction) {
      advanceState.hideAdvanceBtn = false;
      if (itemColSum <= BASIC_COL_LEN * 2) {
        // When less than or equal to 2 lines, the collapse and expand buttons are not displayed
        advanceState.hideAdvanceBtn = true;
        advanceState.isAdvanced = true;
      } else if (
        itemColSum > BASIC_COL_LEN * 2 &&
        itemColSum <= BASIC_COL_LEN * (unref(getProps).autoAdvancedLine || 3)
      ) {
        advanceState.hideAdvanceBtn = false;

        // More than 3 lines collapsed by default
      } else if (!advanceState.isLoad) {
        advanceState.isLoad = true;
        advanceState.isAdvanced = !advanceState.isAdvanced;
      }
      return { isAdvanced: advanceState.isAdvanced, itemColSum, lastRowCol };
    }
    if (itemColSum > BASIC_COL_LEN * (unref(getProps).alwaysShowLines || 1)) {
      return { isAdvanced: advanceState.isAdvanced, itemColSum, lastRowCol };
    } else {
      // The first line is always displayed
      return { isAdvanced: true, itemColSum, lastRowCol };
    }
  }

  const fieldsIsAdvancedMap = shallowReactive({});

  function updateAdvanced() {
    let itemColSum = 0;
    // 最后一行的列宽度
    let lastRowCol = 0;
    const { baseColProps = {} } = unref(getProps);

    for (const schema of unref(getSchema)) {
      const { show, colProps } = schema;
      let isShow = true;

      if (isBoolean(show)) {
        isShow = show;
      }

      if (isFunction(show)) {
        isShow = show({
          schema,
          model: formModel,
          field: schema.field,
          values: {
            ...unref(defaultValueRef),
            ...formModel
          }
        });
      }
      if (isShow && (colProps || baseColProps)) {
        const {
          itemColSum: sum,
          lastRowCol: rowCol,
          isAdvanced
        } = getAdvanced({ ...baseColProps, ...colProps }, itemColSum, lastRowCol);

        itemColSum = sum || 0;
        lastRowCol = rowCol;
        fieldsIsAdvancedMap[schema.field] = isAdvanced;
      }
    }

    // 确保页面发送更新
    vm?.proxy?.$forceUpdate();
    advanceState.actionSpan = BASIC_COL_LEN - lastRowCol + unref(getEmptySpan);
    getAdvanced(unref(getProps).actionColOptions || { span: BASIC_COL_LEN }, itemColSum, lastRowCol, true);

    emit("advanced-change", advanceState.isAdvanced);
  }

  function handleToggleAdvanced() {
    advanceState.isAdvanced = !advanceState.isAdvanced;
  }

  return { handleToggleAdvanced, fieldsIsAdvancedMap };
}
