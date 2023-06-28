<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <OrgTree class="w-1/4 xl:w-1/5" @select="handleSelect" :source="$props.source" />
    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/5" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="$props.source !== 1 && hasPermission('sys:account:insert')"
          >新增账号
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
                tooltip: '编辑用户资料',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:account:update',
                ifShow: $props.source !== 1
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                tooltip: '删除此账号',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record)
                },
                ifShow: record.id !== '1' && $props.source !== 1,
                auth: 'sys:account:delete'
              },
              {
                icon: 'ant-design:key-outlined',
                color: 'warning',
                tooltip: '重置密码',
                onClick: handleChangePwd.bind(null, record.id),
                ifShow: hasRole(SUPER_ROLE) && $props.source !== 1
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <AccountModal @register="registerModal" @success="handleSuccess" :source="$props.source" />
    <PasswordModal @register="registerPwdModal" />
  </PageWrapper>
</template>
<script lang="ts">
  import { reactive, ref } from "vue";
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import { deleteUser, getUserList } from "/@/api/sys/User";
  import { PageWrapper } from "/@/components/general/Page";
  import OrgTree from "./OrgTree.vue";
  import { useModal } from "/@/components/general/Modal";
  import AccountModal from "./AccountModal.vue";
  import { columns, searchFormSchema } from "./account.data";
  import { usePermission } from "/@/hooks/web/UsePermission";
  import PasswordModal from "/@/views/sys/account/PasswordModal.vue";
  import { getTenantUserList } from "/@/api/sys/SsoTenant";

  export default {
    name: "AccountManagement",
    components: { PasswordModal, BasicTable, PageWrapper, OrgTree, AccountModal, TableAction },
    props: {
      source: {
        type: Number,
        default: null
      }
    },
    setup(props) {
      const { hasPermission, hasRole, SUPER_ROLE } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const [registerPwdModal, { openModal: openPwdModal }] = useModal();
      const searchInfo = reactive<Recordable>({});
      const api = ref();
      if (props.source === 1) {
        api.value = getTenantUserList;
      } else {
        api.value = getUserList;
      }
      const [registerTable, { reload }] = useTable({
        title: "账号列表",
        api: api,
        columns,
        formConfig: {
          name: "search_form_item",
          labelWidth: 60,
          schemas: searchFormSchema,
          autoSubmitOnEnter: true
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
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
