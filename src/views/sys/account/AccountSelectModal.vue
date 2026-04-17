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
          @search="fetchUser"
          @change="changeUser"
        >
          <template v-if="accountList.fetching" #notFoundContent>
            <ASpin size="small" />
          </template>
          <template #dropdownRender="{ menuNode }">
            <div :class="`${prefixCls}-select-option`" class="header">
              <span>账号</span>
              <span>昵称</span>
              <span>手机号</span>
            </div>
            <VNodes :vnodes="menuNode" />
          </template>
          <!-- 手写 option -->
          <ASelectOption v-for="(item, index) in accountList.userList" :key="index" :value="item.id">
            <div :class="`${prefixCls}-select-option`">
              <span>{{ item.account }}</span>
              <span>{{ item.nickname }}</span>
              <span>{{ item.phone }}</span>
            </div>
          </ASelectOption>
        </ASelect>
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { Select as ASelect, SelectOption as ASelectOption, Spin as ASpin } from "ant-design-vue";
  import { BasicForm, RenderCallbackParams, useForm } from "@mfish/core/components/Form";
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { bindUserOrg, getTenantOrgTree, searchUserList, SsoUser } from "@mfish/core/api";
  import { reactive } from "vue";
  import { debounce } from "lodash-es";
  import { TreeItem } from "@mfish/core/components/Tree";
  import { useDesign } from "@mfish/core/hooks";

  const emit = defineEmits(["success", "register"]);
  const { prefixCls } = useDesign("account-select");
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
          showSearch: true,
          treeNodeFilterProp: "orgName",
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
  const VNodes = (_: any, { attrs }: any) => {
    return attrs.vnodes;
  };

  const accountList = reactive({
    userList: [] as SsoUser[],
    userId: undefined,
    fetching: false
  });
  const [registerModal, { closeModal }] = useModalInner(async (data) => {
    resetFields().then();
    accountList.userId = undefined;
    const treeData: TreeItem[] = (await getTenantOrgTree()) as unknown as TreeItem[];
    fetchUser("");
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
    searchUserList(value)
      .then((res: SsoUser[]) => {
        accountList.userList = res;
      })
      .finally(() => {
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
<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-account-select";
  .@{prefix-cls}-select-option {
    &.header {
      padding: 0 16px 4px 16px;
      border-bottom: 1px solid @border-color-base;
    }
    display: flex;
    align-items: center;
    > span {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0 4px 0 4px;
    }
    > span:last-child {
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
