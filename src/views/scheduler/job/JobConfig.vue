<!--
 @description:任务配置
 @author: mfish
 @date: 2023/2/23 11:23
-->
<template>
  <BasicForm @register="registerForm">
    <template #params="{ model, field }">
      <CodeEditor style="border: 1px solid #d9d9d9;" v-model:value="model[field]" mode="application/json" />
    </template>
  </BasicForm>
</template>

<script>
import { watch } from "vue";
import { BasicForm, useForm } from "../../../components/general/Form";
import { jobFormSchema } from "./job.data";
import { CodeEditor } from "/@/components/general/CodeEditor";

export default {
  name: "JobConfig",
  emits: ["next"],
  props: {
    jobInfo: { type: Object, default: {} }
  },
  components: {
    BasicForm, CodeEditor
  },
  setup(props, { emit }) {
    const customSubmitFunc = async () => {
      const values = await validate();
      emit("next", values);
    };
    const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
      labelWidth: 100,
      baseColProps: { span: 12 },
      schemas: jobFormSchema,
      showResetButton: false,
      submitButtonOptions: {
        text: "下一步"
      },
      actionColOptions: {
        offset: 11
      },
      submitFunc: customSubmitFunc
    });
    watch(() => props.jobInfo
      , (newVal) => {
        if (newVal === null) {
          resetFields().then();
        } else {
          setFieldsValue(newVal).then();
        }
      });



    return {
      registerForm,
      customSubmitFunc
    };
  }
};
</script>

<style scoped>

</style>