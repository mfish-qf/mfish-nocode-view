<template>
  <Button v-bind="$attrs" :disabled="isStart" @click="handleStart" :loading="loading">
    {{ getButtonText }}
  </Button>
</template>
<script lang="ts" setup>
  import { ref, watchEffect, computed, unref, PropType } from "vue";
  import { Button } from "ant-design-vue";
  import { useCountdown } from "./UseCountdown";
  import { isFunction } from "@core/utils/Is";
  import { useI18n } from "@core/hooks/web/UseI18n";

  const props = {
    value: { type: [Object, Number, String, Array] },
    count: { type: Number, default: 60 },
    beforeStartFunc: {
      type: Function as PropType<() => Promise<boolean>>,
      default: null
    }
  };

  const loading = ref(false);

  const { currentCount, isStart, start, reset } = useCountdown(props.count);
  const { t } = useI18n();

  const getButtonText = computed(() => {
    return unref(isStart)
      ? t("component.countdown.sendText", [unref(currentCount)])
      : t("component.countdown.normalText");
  });

  watchEffect(() => {
    props.value === undefined && reset();
  });

  /**
   * @description: Judge whether there is an external function before execution, and decide whether to start after execution
   */
  async function handleStart() {
    const { beforeStartFunc } = props;
    if (beforeStartFunc && isFunction(beforeStartFunc)) {
      loading.value = true;
      try {
        const canStart = await beforeStartFunc();
        canStart && start();
      } finally {
        loading.value = false;
      }
    } else {
      start();
    }
  }
</script>
