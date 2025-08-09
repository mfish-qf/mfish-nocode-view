<!--
 @description: API测试窗口
 @author: mfish
 @date: 2023/9/13
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="接口测试" :show-ok-btn="false" cancel-text="关闭">
    <BasicForm @register="registerForm">
      <template #apiUrl>
        <AInput v-model:value="url" disabled />
      </template>
      <template #execute>
        <AButton color="error" @click="execute" class="mr-2">执行</AButton>
        <AButton @click="copyUrl" :color="copied ? 'success' : 'primary'">
          <span v-if="!copied">拷贝</span>
          <span v-else>已拷贝</span>
        </AButton>
      </template>
      <template #apiResult>
        <CodeEditor style="height: 300px" v-model:value="result" :mode="MODE.JSON" :readonly="true" />
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicForm, FormSchema, useForm } from "@mfish/core/components/Form";
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { ref } from "vue";
  import { Input as AInput } from "ant-design-vue";
  import { getApiParamsList, getApiUrl } from "@mfish/custom-api";
  import { CodeEditor, MODE } from "@mfish/core/components/CodeEditor";
  import { defHttp } from "@mfish/core/utils/http/axios";
  import { useGlobSetting } from "@mfish/core/hooks";
  import { useClipboard } from "@vueuse/core";
  import { getToken } from "@mfish/core/utils/auth";
  import { getMfHttpByApiId } from "@mfish/nocode";

  const [registerForm, { resetFields, setFieldsValue, resetSchema, validate }] = useForm({
    name: "model_form_item",
    labelWidth: 100,
    baseColProps: { span: 24 },
    showActionButtonGroup: false,
    autoSubmitOnEnter: true
  });
  const result = ref();
  const url = ref("");
  const { oauth2Url } = useGlobSetting();
  const { copy, copied } = useClipboard({ legacy: true });
  const regexpNames = /(?<url>http:\/\/.+?)\//g;
  const match: any = regexpNames.exec(oauth2Url || "");
  const urlPrefix = ref("");
  const id = ref<string>("");
  if (match !== null) {
    urlPrefix.value = match.groups.url + getApiUrl();
  }
  const [registerModal, { setModalProps }] = useModalInner(async (data) => {
    setModalProps({ confirmLoading: false, width: "800px" });
    id.value = data.id;
    url.value = `${urlPrefix.value}/${data.id}`;
    const variables: FormSchema[] = [];
    const page = [
      {
        field: "pageNum",
        label: "pageNum",
        component: "InputNumber",
        helpMessage: "第几页",
        required: true,
        defaultValue: 1,
        colProps: { span: 12 }
      },
      {
        field: "pageSize",
        label: "pageSize",
        component: "InputNumber",
        helpMessage: "每页条数",
        required: true,
        defaultValue: 10,
        colProps: { span: 12 }
      }
    ];
    result.value = "";
    if (data.paramFlag === 1) {
      const params = await getApiParamsList({ apiId: data.id, pageNum: 1, pageSize: 10_000 });
      variables.push(
        ...(params.list
          .filter((item) => item.isUse === 1)
          .map((item) => {
            return {
              field: item.name,
              label: item.name,
              component: "Input",
              required: item.required || false,
              helpMessage: item.remark || "",
              defaultValue: item.defaultValue
            };
          }) as FormSchema[])
      );
      const addVariables = (item: any) => {
        variables.push({
          field: item.key,
          label: item.key,
          component: "Input",
          required: item.isRequired,
          helpMessage: item.remark || "",
          defaultValue: item.value,
          colProps: item.colProps || {}
        });
      };
      const httpInfo = await getMfHttpByApiId(data.id);
      if (httpInfo) {
        const header = httpInfo.headerParams ? JSON.parse(httpInfo.headerParams) : [];
        const body = httpInfo.bodyParams ? JSON.parse(httpInfo.bodyParams) : {};
        header?.forEach((item: any) => {
          addVariables(item);
        });
        body?.other?.forEach((item: any) => {
          addVariables(item);
        });
        if (body?.page?.checked) {
          addVariables({ ...body.page.pageNum, remark: "当前页", colProps: { span: 12 } });
          addVariables({ ...body.page.pageSize, remark: "每页条数", colProps: { span: 12 } });
          //如果pageNum和pageSize都有值，就从page中删除
          const numIndex = page.findIndex((item) => item.field === body?.page?.pageNum?.key);
          if (numIndex !== -1) {
            page.splice(numIndex, 1);
          }
          const sizeIndex = page.findIndex((item) => item.field === body?.page?.pageSize?.key);
          if (sizeIndex !== -1) {
            page.splice(sizeIndex, 1);
          }
        }
      }
    }

    resetSchema([
      {
        field: "apiUrl",
        label: "API地址",
        component: "Input",
        slot: "apiUrl"
      },
      ...variables,
      ...page,
      {
        field: "execute",
        label: " ",
        component: "Input",
        slot: "execute"
      },
      { field: "result", label: "执行结果", component: "Input", slot: "apiResult" }
    ]).then(() => {
      resetFields().then();
      setFieldsValue(
        variables.reduce((prev, next: FormSchema) => {
          if (next) {
            prev[next.field] = next.defaultValue;
          }
          return prev;
        }, {} as object)
      ).then();
    });
  });

  async function execute() {
    try {
      const values = await validate();
      defHttp.get({ url: `${getApiUrl()}/${id.value}`, params: values }, { completeResult: true }).then((res) => {
        result.value = res;
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function copyUrl() {
    try {
      const values = await validate();
      delete values.apiUrl;
      delete values.execute;
      delete values.result;
      let params = Object.keys(values).reduce((prev, next) => {
        if (next) {
          prev += `${(prev ? "&" : "?") + next}=${values[next]}`;
        }
        return prev;
      }, "");
      params += `${params ? "&" : ""}access_token=${getToken()}`;
      copy(url.value + params).then();
    } catch (error) {
      console.log(error);
    }
  }
</script>
