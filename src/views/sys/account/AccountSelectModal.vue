<!--
 @description: 帐号选择
 @author: mfish
 @date: 2023/7/4
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="添加成员" @ok="handleSubmit" cancelText="关闭">
    <BasicForm @register="registerForm" @submit="handleSubmit">
      <template #userSearch>
        <a-select
          v-model:value="accountList.userId"
          show-search
          allowClear
          placeholder="检索成员"
          :filter-option="false"
          :not-found-content="accountList.fetching ? undefined : null"
          :options="accountList.userList"
          @search="fetchUser"
          @change="changeUser"
        >
          <template v-if="accountList.fetching" #notFoundContent>
            <a-spin size="small" />
          </template>
        </a-select>
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { Spin as ASpin, Select as ASelect } from "ant-design-vue";
  import { BasicForm, useForm } from "/@/components/general/Form";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { bindUserOrg } from "/@/api/sys/SsoTenant";
  import { reactive } from "vue";
  import { debounce } from "lodash-es";
  import { useMessage } from "/@/hooks/web/UseMessage";
  import { getUserList } from "/@/api/sys/User";
  defineOptions({ name: "AccountSelectModal" });

  const emit = defineEmits(["success", "register"]);
  const props = defineProps({
    orgId: {
      type: String,
      default: null
    }
  });
  const [registerForm, { setFieldsValue, validate }] = useForm({
    name: "model_form_item",
    baseColProps: { span: 24 },
    schemas: [
      {
        field: "userId",
        label: "",
        component: "Input",
        slot: "userSearch"
      }
    ],
    showActionButtonGroup: false,
    autoSubmitOnEnter: true
  });
  const accountList = reactive({
    userList: [] as { label: string; value: string }[],
    userId: undefined,
    fetching: false
  });
  const { createMessage } = useMessage();
  const [registerModal, { closeModal }] = useModalInner();
  const fetchUser = debounce((value) => {
    accountList.userList = [];
    accountList.fetching = true;
    getUserList({ account: value, pageNum: 1, pageSize: 20 }).then((res) => {
      accountList.userList = res.list.map((user) => ({
        label: user.account,
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
    let values = await validate();
    if (props.orgId == undefined || props.orgId === "") {
      createMessage.error("错误:请先选择用户所属组织");
      return;
    }
    bindUserOrg({ orgId: props.orgId, userId: values.userId }).then(() => {
      emit("success");
      closeModal();
    });
  }
</script>
