<!--
 @description: 流程配置
 @author: mfish
 @date: 2026/3/30
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm">
      <template #flowKeyConfig>
        <FlowKeyConfig :value="flowKey" @flow-key-change="flowKeyChange" />
      </template>
    </BasicForm>
    <BpmnConfig ref="bpmnRef" style="height: calc(100% - 50px)" />
  </BasicModal>
</template>
<script setup lang="ts">
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { computed, ref, unref, useTemplateRef } from "vue";
  import { BpmnConfig } from "@mfish/workflow";
  import { BasicForm, useForm } from "@mfish/core/components/Form";
  import { flowManageFormSchema } from "@/views/workflow/flow-manage/flowManage.data";
  import FlowKeyConfig from "@/views/workflow/flow-manage/FlowKeyConfig.vue";
  import { DictItem } from "@mfish/core/api";
  import { insertFlowManage, updateFlowManage } from "@/api/workflow/FlowManage";

  const emit = defineEmits(["success", "register"]);
  const isUpdate = ref(true);
  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    name: "model_form_item",
    labelWidth: 100,
    baseColProps: { span: 24 },
    schemas: flowManageFormSchema,
    showActionButtonGroup: false,
    autoSubmitOnEnter: true
  });
  const flowKey = ref<string>();
  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    setModalProps({
      confirmLoading: false,
      width: "1200px",
      defaultFullscreen: true,
      canFullscreen: false,
      keyboard: false
    });

    isUpdate.value = !!data?.isUpdate;
    if (unref(isUpdate)) {
      flowKey.value = data.record.flowKey;
      setFieldsValue({
        ...data.record
      }).then();
      if (data.record?.flowConfig) {
        unref(bpmnRef)?.initConfig(JSON.parse(data.record.flowConfig));
      }
    } else {
      resetFields().then();
      flowKey.value = "";
      unref(bpmnRef)?.clearHistory();
    }
  });

  const bpmnRef = useTemplateRef("bpmnRef");
  const getTitle = computed(() => (unref(isUpdate) ? "编辑流程配置" : "新增流程配置"));
  function flowKeyChange(e: DictItem) {
    setFieldsValue({
      flowKey: e.dictValue,
      name: e.dictLabel,
      remark: e.remark
    }).then();
  }
  async function handleSubmit() {
    const values = await validate();
    const config = unref(bpmnRef)?.getConfig();
    if (config) {
      values.flowConfig = JSON.stringify(config);
    }
    setModalProps({ confirmLoading: true });
    if (unref(isUpdate)) {
      saveFlowManage(updateFlowManage, values);
    } else {
      saveFlowManage(insertFlowManage, values);
    }
  }

  function saveFlowManage(save, values) {
    save(values)
      .then(() => {
        emit("success");
        closeModal();
      })
      .finally(() => {
        setModalProps({ confirmLoading: false });
      });
  }
</script>
<style scoped lang="less"></style>
