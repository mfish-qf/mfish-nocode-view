<!--
 @description: 自定义API HTTP请求参数设置
 @author: mfish
 @date: 2025-08-05
 @version: V2.1.1
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="设置HTTP请求初始参数" @ok="handleSubmit">
    <HttpParams ref="httpParamsRef" :header="header" :body="body" :hide-page="true" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { HttpParams } from "@mfish/custom-api";
  import { ref, useTemplateRef } from "vue";

  const emit = defineEmits(["success", "register"]);
  let isUpdate = false;
  const httpParamsRef = useTemplateRef("httpParamsRef");
  const header = ref<string>();
  const body = ref<string>();
  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    isUpdate = data.isUpdate;
    if (data.header) {
      header.value = data.header;
    }
    if (data.body) {
      body.value = data.body;
    }
    setModalProps({ confirmLoading: false, width: "1000px", canFullscreen: false, maskClosable: false });
  });

  async function handleSubmit() {
    const params = httpParamsRef.value?.getValue();
    emit("success", { params, isUpdate });
    closeModal();
  }
</script>
