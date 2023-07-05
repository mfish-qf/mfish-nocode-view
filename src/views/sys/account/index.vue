<template>
  <PageWrapper contentClass="flex">
    <OrgTree class="w-1/4 xl:w-1/5" @select="handleSelect" :source="$props.source" />
    <BasicTable
      @register="registerTable"
      class="w-3/4 xl:w-4/5"
      :searchInfo="searchInfo"
      :class="$props.source === 1 ? prefixCls : ''"
    >
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="$props.source !== 1 && hasPermission('sys:account:insert')"
          >新增账号
        </a-button>
        <a-button type="primary" @click="handleSelectAccount" v-if="$props.source === 1 && hasTenant()"
          >添加成员
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
              },
              {
                icon: 'ant-design:minus-circle-outlined',
                color: 'error',
                tooltip: '移除成员',
                popConfirm: {
                  title: '是否确认移除',
                  placement: 'left',
                  confirm: handleRemoveUser.bind(null, record)
                },
                ifShow: $props.source === 1 && hasTenant()
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <AccountModal @register="registerModal" @success="handleSuccess" :source="$props.source" />
    <AccountSelectModal @register="registerSelectModal" @success="handleSuccess" :org-id="searchInfo.orgId" />
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
  import { deleteUserOrg, getTenantUserList } from "/@/api/sys/SsoTenant";
  import { useDesign } from "/@/hooks/web/UseDesign";
  import AccountSelectModal from "/@/views/sys/account/AccountSelectModal.vue";
  import { SsoUser } from "/@/api/sys/model/UserModel";
  import { useMessage } from "/@/hooks/web/UseMessage";

  export default {
    name: "AccountManagement",
    components: { AccountSelectModal, PasswordModal, BasicTable, PageWrapper, OrgTree, AccountModal, TableAction },
    props: {
      source: {
        type: Number,
        default: null
      }
    },
    setup(props) {
      const { hasPermission, hasRole, SUPER_ROLE, hasTenant } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const [registerSelectModal, { openModal: openSelectModal }] = useModal();
      const [registerPwdModal, { openModal: openPwdModal }] = useModal();
      const { createMessage } = useMessage();
      const searchInfo = reactive<Recordable>({});
      const { prefixCls } = useDesign("account");
      const api = ref();
      let newColumns;
      if (props.source === 1) {
        api.value = getTenantUserList;
        newColumns = columns.filter((col) => col.dataIndex !== "status");
      } else {
        api.value = getUserList;
        newColumns = columns;
      }
      const [registerTable, { reload }] = useTable({
        title: "账号列表",
        api: api,
        columns: newColumns,
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
        resizeHeightOffset: props.source === 1 ? 18 : 0,
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

      function handleSelectAccount() {
        openSelectModal(true);
      }

      function handleSuccess() {
        reload();
      }

      function handleRemoveUser(record: SsoUser) {
        if (searchInfo.orgId == undefined || searchInfo.orgId == "") {
          if (record.orgIds) {
            if (record.orgIds.length > 1) {
              createMessage.error("错误:请选择组织后再删除");
              return;
            }
            deleteUserOrg({ userId: record.id, orgId: record.orgIds[0] }).then(() => {
              handleSuccess();
            });
            return;
          }
          createMessage.error("错误:请选择组织后再删除");
          return;
        }
        deleteUserOrg({ userId: record.id, orgId: searchInfo.orgId }).then(() => {
          handleSuccess();
        });
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
        handleChangePwd,
        prefixCls,
        hasTenant,
        registerSelectModal,
        handleSelectAccount,
        handleRemoveUser
      };
    }
  };
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-account";
  [data-theme="dark"] {
    .@{prefix-cls}{
      border-left: 1px solid #303030
    }
  }
  .@{prefix-cls} {
    padding: 0 0 0 5px;
    border-left: 1px solid #d9d9d9;
  }
</style>
