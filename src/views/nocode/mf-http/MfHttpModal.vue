<!--
 @description: HTTP请求数据源表
 @author: mfish
 @date: 2025-07-22
 @version: V2.1.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @height-change="modalHeightChange">
    <template #appendFooter>
      <APopconfirm @confirm="handleSubmit" placement="topRight" :open="nameOpen" @cancel="nameOpen = false">
        <template #title>
          <span>请求名称</span>
          <AInput size="small" v-model:value="formData.name" :status="nameStatus" />
        </template>
        <AButton type="primary" @click="handleOk">确认</AButton>
      </APopconfirm>
    </template>
    <div :class="prefixCls">
      <AInputGroup compact>
        <ASelect disabled style="width: 100px" v-model:value="formData.requestMethod">
          <ASelect.Option v-for="item in requestMethods" :key="item.dictValue" :value="item.dictValue">
            <ATag :color="item.color" style="width: 100%; text-align: center">{{ item.dictLabel }}</ATag>
          </ASelect.Option>
        </ASelect>
        <AInput
          v-model:value="formData.requestUrl"
          :status="inputStatus"
          placeholder="请输入请求地址，格式http[s]://host:port/path"
          style="width: calc(100% - 180px)"
          @change="verifyUrl"
        />
        <AButton style="width: 80px" type="primary" @click="httpTest">发送</AButton>
      </AInputGroup>
    </div>
    <NLayout has-sider sider-placement="right" :class="prefixCls">
      <NLayoutContent>
        <ACollapse collapsible="icon" ghost v-model:active-key="activeKey">
          <template #expandIcon="{ isActive }">
            <CaretRightOutlined :rotate="isActive ? 90 : 0" />
          </template>
          <ACollapse.Panel :key="1" header="头部参数">
            <HttpParamConfig ref="headerParamRef" :http-params="headerParams" />
          </ACollapse.Panel>
          <ACollapse.Panel :key="2" header="请求体参数">
            <template #extra>
              <span style="margin-right: 10px; font-weight: 700">Content-Type</span>
              <ASelect
                disabled
                style="width: 280px"
                v-model:value="formData.contentType"
                :field-names="{ label: 'dictLabel', value: 'dictValue' }"
                :options="contentTypes"
              />
            </template>
            <HttpBodyParam ref="bodyParamRef" :params="bodyParams" @page-check-change="requestPageCheckChange" />
          </ACollapse.Panel>
          <ACollapse.Panel :key="3">
            <template #header>
              <div class="header-title">
                <div>返回结果映射</div>
                <ATooltip
                  placement="top"
                  title="设置返回结果到哪个字段取值。如果不设置，取整个返回结果。如果值在返回结果子字段中，需要使用点号分隔。例如：data.pageNum"
                >
                  <Icon icon="ant-design:info-circle-outlined" color="red" style="cursor: pointer" />
                </ATooltip>
              </div>
            </template>
            <ResponseConfig
              ref="responseConfigRef"
              :response-map="formData.responseMap"
              @page-check-change="responsePageCheckChange"
            />
          </ACollapse.Panel>
        </ACollapse>
      </NLayoutContent>
      <NLayoutSider
        :collapsed="resultCollapsed"
        :collapsed-width="0"
        collapse-mode="transform"
        :width="500"
        show-trigger="bar"
        @contextmenu.stop
        @collapse="resultCollapsed = true"
        @expand="resultCollapsed = false"
      >
        <JsonPreview :height="modalHeight" :virtual="true" :data="httpResult" :deep="3" />
      </NLayoutSider>
    </NLayout>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { computed, reactive, ref, unref, useTemplateRef } from "vue";
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { getMfHttpById, insertMfHttp, testMfHttp, updateMfHttp, MfHttp } from "@mfish/nocode";
  import {
    Collapse as ACollapse,
    Input as AInput,
    InputGroup as AInputGroup,
    Popconfirm as APopconfirm,
    Select as ASelect,
    Tag as ATag,
    Tooltip as ATooltip
  } from "ant-design-vue";
  import { CaretRightOutlined } from "@ant-design/icons-vue";
  import { useDesign } from "@mfish/core/hooks";
  import { HttpParamConfig, HttpBodyParam } from "@mfish/custom-api";
  import { getDictItems } from "@mfish/core/api";
  import { JsonPreview } from "@mfish/core/components/CodeEditor";
  import { NLayout, NLayoutContent, NLayoutSider } from "naive-ui";
  import ResponseConfig from "@/views/nocode/mf-http/ResponseConfig.vue";
  import { Icon } from "@mfish/core/components/Icon";

  defineOptions({ name: "MfHttpModal" });
  const emit = defineEmits(["success", "register"]);
  const isUpdate = ref(false);
  const formData = reactive<MfHttp>({
    name: "",
    requestMethod: "GET",
    contentType: "application/x-www-form-urlencoded; charset=utf-8",
    requestUrl: "",
    headerParams: "",
    bodyParams: "",
    responseMap: "",
    folderId: ""
  });
  const activeKey = ref<number[]>([1, 2, 3]);
  const requestMethods = ref<any[]>([]);
  const contentTypes = ref<any[]>([]);
  const { prefixCls } = useDesign("http-modal");
  const headerParamRef = useTemplateRef("headerParamRef");
  const responseConfigRef = useTemplateRef("responseConfigRef");
  const bodyParamRef = useTemplateRef("bodyParamRef");
  const headerParams = ref();
  const bodyParams = ref();
  const httpResult = ref();
  const resultCollapsed = ref(true);
  const inputStatus = ref<"" | "error">("");
  const modalHeight = ref();
  const nameStatus = computed(() => (formData.name ? "" : "error"));
  const nameOpen = ref<boolean>(false);

  function modalHeightChange(height: number) {
    modalHeight.value = height - 52;
  }

  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    setModalProps({ confirmLoading: false, width: "1200px", showOkBtn: false });
    clearFormData();
    formData.folderId = data.folderId;
    isUpdate.value = data.isUpdate || false;
    getDictItems("http_request_method").then((res: any) => {
      requestMethods.value = res;
    });
    getDictItems("http_content_type").then((res: any) => {
      contentTypes.value = res;
    });
    if (data.isUpdate) {
      getMfHttpById(data.id).then((res: any) => {
        Object.assign(formData, res);
        headerParams.value = formData.headerParams ? JSON.parse(formData.headerParams) : [];
        bodyParams.value = formData.bodyParams ? JSON.parse(formData.bodyParams) : {};
      });
    }
  });

  function clearFormData() {
    formData.id = undefined;
    formData.folderId = undefined;
    formData.tenantId = undefined;
    formData.delFlag = undefined;
    formData.createTime = undefined;
    formData.updateTime = undefined;
    formData.createBy = undefined;
    formData.updateBy = undefined;
    formData.requestMethod = "GET";
    formData.contentType = "application/x-www-form-urlencoded; charset=utf-8";
    formData.requestUrl = "";
    formData.headerParams = "";
    formData.bodyParams = "";
    formData.name = "";
    formData.responseMap = "";
    headerParams.value = [];
    bodyParams.value = undefined;
    httpResult.value = undefined;
    resultCollapsed.value = true;
    inputStatus.value = "";
  }

  function verifyUrl() {
    if (!formData.requestUrl) {
      inputStatus.value = "error";
      return;
    }
    const regex = /https?:\/\/.+/;
    if (regex.test(formData.requestUrl)) {
      inputStatus.value = "";
    } else {
      inputStatus.value = "error";
    }
  }

  const getTitle = computed(() => (unref(isUpdate) ? "编辑HTTP请求数据源" : "新增HTTP请求数据源"));

  function handleOk() {
    verifyUrl();
    if (inputStatus.value === "error") {
      return;
    }
    nameOpen.value = true;
  }

  async function handleSubmit() {
    verifyUrl();
    if (inputStatus.value === "error" || nameStatus.value === "error") {
      return;
    }
    nameOpen.value = false;
    setModalProps({ confirmLoading: true });
    formData.headerParams = JSON.stringify(headerParamRef.value?.getValue());
    formData.bodyParams = JSON.stringify(bodyParamRef.value?.getValue());
    formData.responseMap = JSON.stringify(responseConfigRef.value?.getValue());
    if (unref(isUpdate)) {
      saveMfHttp(updateMfHttp, formData);
    } else {
      saveMfHttp(insertMfHttp, formData);
    }
  }

  function saveMfHttp(save, values) {
    save(values)
      .then(() => {
        emit("success");
        closeModal();
      })
      .finally(() => {
        setModalProps({ confirmLoading: false });
      });
  }

  function httpTest() {
    verifyUrl();
    if (inputStatus.value === "error") {
      return;
    }
    formData.headerParams = JSON.stringify(headerParamRef.value?.getValue());
    formData.bodyParams = JSON.stringify(bodyParamRef.value?.getValue());
    httpResult.value = undefined;
    resultCollapsed.value = false;
    testMfHttp(formData).then((res: any) => {
      httpResult.value = res;
    });
  }

  function requestPageCheckChange(check: boolean) {
    responseConfigRef.value?.pageCheckChange(check);
  }

  function responsePageCheckChange(check: boolean) {
    bodyParamRef.value?.pageCheck(check);
  }
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-http-modal";

  .@{prefix-cls} {
    margin: 10px 10px 0 10px;

    .header-title {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .ant-collapse-header {
      align-items: center !important;
      padding: 4px 24px 4px 0 !important;
    }

    .ant-collapse-content-box {
      padding-top: 4px !important;
      padding-bottom: 4px !important;
    }

    .ant-collapse-header-text {
      font-weight: bold;
    }

    .ant-select .ant-select-selection-item {
      text-overflow: unset;
    }
  }
</style>
