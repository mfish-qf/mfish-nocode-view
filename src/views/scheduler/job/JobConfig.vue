<!--
 @description:任务配置
 @author: mfish
 @date: 2023/2/23 11:23
-->
<template>
  <BasicForm @register="registerForm">
    <template #params="{ model, field }">
      <CodeEditor v-model:value="model[field]" :mode="MODE.JSON" />
    </template>
  </BasicForm>
</template>
<script lang="ts" setup>
  import { watch } from "vue";
  import { BasicForm, useForm } from "@mfish/core/components/Form";
  import { jobFormSchema } from "./job.data";
  import { CodeEditor, MODE } from "@mfish/core/components/CodeEditor";

  const props = defineProps({
    jobInfo: {
      type: Object,
      default: () => {
        return null;
      }
    }
  });
  const getValue = async () => {
    return await validate();
  };
  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    labelWidth: 120,
    baseColProps: { span: 12 },
    schemas: jobFormSchema,
    showActionButtonGroup: false
  });
  watch(
    () => props.jobInfo,
    (newVal) => {
      if (newVal) {
        setFieldsValue(newVal).then();
      } else {
        resetFields().then();
      }
    }
  );
  defineExpose({ getValue });
</script>
