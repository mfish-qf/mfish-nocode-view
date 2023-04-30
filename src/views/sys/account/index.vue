<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <OrgTree class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/5" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="hasPermission('sys:account:insert')">新增账号</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
                tooltip: '编辑用户资料',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:account:update'
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                tooltip: '删除此账号',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
                ifShow: record.id === '1'? false:true,
                auth: 'sys:account:delete'
              },
              {
                icon: 'ant-design:key-outlined',
                color: 'warning',
                tooltip: '重置密码',
                onClick: handleChangePwd.bind(null,record.id),
                ifShow: hasRole(SUPER_ROLE),
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <AccountModal @register="registerModal" @success="handleSuccess" />
    <PasswordModal @register="registerPwdModal" />
  </PageWrapper>
</template>
<script lang="ts">
import { reactive } from "vue";
import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
import { deleteUser, getUserList } from "/@/api/sys/User";
import { PageWrapper } from "/@/components/general/Page";
import OrgTree from "./OrgTree.vue";
import { useModal } from "/@/components/general/Modal";
import AccountModal from "./AccountModal.vue";
import { columns, searchFormSchema } from "./account.data";
import { usePermission } from "/@/hooks/web/UsePermission";
import PasswordModal from "/@/views/sys/account/PasswordModal.vue";

export default {
  name: "AccountManagement",
  components: { PasswordModal, BasicTable, PageWrapper, OrgTree, AccountModal, TableAction },
  setup() {
    const { hasPermission, hasRole, SUPER_ROLE } = usePermission();
    const [registerModal, { openModal }] = useModal();
    const [registerPwdModal, { openModal: openPwdModal }] = useModal();
    const searchInfo = reactive<Recordable>({});
    const [registerTable, { reload }] = useTable({
      title: "账号列表",
      api: getUserList,
      columns,
      formConfig: {
        name: "search_form_item",
        labelWidth: 80,
        schemas: searchFormSchema,
        autoSubmitOnEnter: true
      },
      useSearchForm: true,
      showTableSetting: true,
      bordered: true,
      actionColumn: {
        width: 120,
        title: "操作",
        dataIndex: "action"
      }
    });

    function handleCreate() {
      openModal(true, {
        isUpdate: false
      });
    }

    function handleEdit(record: Recordable) {
      openModal(true, {
        record,
        isUpdate: true
      });
    }

    function handleDelete(record: Recordable) {
      deleteUser(record.id).then(() => {
        handleSuccess();
      });
    }

    function handleChangePwd(id: string) {
      openPwdModal(true, { userId: id });
    }

    function handleSuccess() {
      reload();
    }

    function handleSelect(orgId = "") {
      searchInfo.orgId = orgId;
      reload();
    }

    return {
      registerTable,
      registerModal,
      handleCreate,
      handleEdit,
      handleDelete,
      handleSuccess,
      handleSelect,
      searchInfo,
      hasPermission,
      hasRole,
      SUPER_ROLE,
      registerPwdModal,
      openPwdModal,
      handleChangePwd
    };
  }
};
</script>
