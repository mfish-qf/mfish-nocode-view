<!--
 @description:任务配置
 @author: mfish
 @date: 2023/2/23 11:23
-->
<template>
  <BasicForm @register="registerForm">
    <template #params="{ model, field }">
      <CodeEditor style="border: 1px solid #d9d9d9" v-model:value="model[field]" mode="application/json" />
    </template>
  </BasicForm>
</template>
<script lang="ts" setup>
  import { watch } from "vue";
  import { BasicForm, useForm } from "../../../components/general/Form";
  import { jobFormSchema } from "./job.data";
  import { CodeEditor } from "/@/components/general/CodeEditor";
  defineOptions({ name: "JobConfig" });

  const props = defineProps({
    jobInfo: { type: Object, default: {} }
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
      if (newVal === null) {
        resetFields().then();
      } else {
        setFieldsValue(newVal).then();
      }
    }
  );
  defineExpose({ getValue });
</script>
