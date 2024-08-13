<!--
 @description: 帐号选择
 @author: mfish
 @date: 2023/7/4
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="添加成员" @ok="handleSubmit" cancel-text="关闭">
    <BasicForm @register="registerForm" @submit="handleSubmit">
      <template #userSearch>
        <ASelect
          v-model:value="accountList.userId"
          show-search
          allow-clear
          placeholder="检索成员"
          :filter-option="false"
          :not-found-content="accountList.fetching ? undefined : null"
          :options="accountList.userList"
          @search="fetchUser"
          @change="changeUser"
        >
          <template v-if="accountList.fetching" #notFoundContent>
            <ASpin size="small" />
          </template>
        </ASelect>
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { Spin as ASpin, Select as ASelect } from "ant-design-vue";
  import { BasicForm, RenderCallbackParams, useForm } from "@/components/general/Form";
  import { BasicModal, useModalInner } from "@/components/general/Modal";
  import { bindUserOrg, getTenantOrgTree } from "@/api/sys/SsoTenant";
  import { reactive } from "vue";
  import { debounce } from "lodash-es";
  import { searchUserList } from "@/api/sys/User";
  import { TreeItem } from "@/components/general/Tree";

  const emit = defineEmits(["success", "register"]);
  const [registerForm, { setFieldsValue, validate, updateSchema, resetFields }] = useForm({
    name: "model_form_item",
    baseColProps: { span: 24 },
    schemas: [
      {
        field: "userId",
        label: "成员",
        component: "Input",
        slot: "userSearch",
        required: true
      },
      {
        field: "orgId",
        label: "所属部门",
        component: "TreeSelect",
        componentProps: {
          maxTagCount: 8,
          fieldNames: {
            label: "orgName",
            key: "id",
            value: "id"
          },
          getPopupContainer: () => document.body
        },
        colProps: { span: 24 },
        dynamicDisabled: (renderCallbackParams: RenderCallbackParams) => renderCallbackParams.values.id === "1",
        required: true
      }
    ],
    labelWidth: 100,
    showActionButtonGroup: false,
    autoSubmitOnEnter: true
  });
  const accountList = reactive({
    userList: [] as { label: string; value: string }[],
    userId: undefined,
    fetching: false
  });
  const [registerModal, { closeModal }] = useModalInner(async (data) => {
    resetFields().then();
    accountList.userId = undefined;
    const treeData: TreeItem[] = (await getTenantOrgTree()) as unknown as TreeItem[];
    updateSchema({
      field: "orgId",
      componentProps: { treeData }
    }).then();
    if (data.orgId) {
      setFieldsValue({
        orgId: data.orgId
      }).then();
    }
  });
  const fetchUser = debounce((value) => {
    accountList.userList = [];
    accountList.fetching = true;
    searchUserList(value).then((res) => {
      accountList.userList = res.map((user) => ({
        label: user.account + (user.nickname ? `-${user.nickname}` : ""),
        value: user.id
      }));
      accountList.fetching = false;
    });
  }, 300);

  function changeUser(id) {
    if (!id) {
      id = "";
    }
    setFieldsValue({ userId: id }).then();
  }

  async function handleSubmit() {
    const values = await validate();
    bindUserOrg(values).then(() => {
      emit("success");
      closeModal();
    });
  }
</script>
