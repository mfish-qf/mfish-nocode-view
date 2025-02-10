<template>
  <PageWrapper content-class="flex">
    <OrgTree class="w-1/4 xl:w-1/5" @select="handleSelect" :source="$props.source" />
    <BasicTable
      @register="registerTable"
      class="w-3/4 xl:w-4/5"
      :search-info="searchInfo"
      :class="$props.source === 1 ? prefixCls : ''"
    >
      <template #toolbar>
        <a-button
          type="primary"
          @click="handleCreate"
          v-if="
            (source === 1 && hasPermission('sys:tenantUser:insert')) ||
            (source !== 1 && hasPermission('sys:account:insert'))
          "
        >
          新建账号
        </a-button>
        <a-button
          type="primary"
          @click="handleSelectAccount"
          v-if="source === 1 && hasPermission('sys:tenantUser:insert')"
        >
          添加成员
        </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:info-circle-outlined',
                onClick: handleQuery.bind(null, record),
                auth: ['sys:account:query', 'sys:tenantUser:query'],
                color: 'success',
                tooltip: '查看'
              },
              {
                icon: 'ant-design:edit-outlined',
                tooltip: '编辑用户资料',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:account:update',
                ifShow: source !== 1
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
                auth: 'sys:tenantUser:delete',
                ifShow: source === 1
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <AccountModal
      @register="registerModal"
      @success="handleSuccess"
      :source="$props.source"
      :org-id="searchInfo.orgId"
    />
    <AccountSelectModal @register="registerSelectModal" @success="handleSuccess" />
    <PasswordModal @register="registerPwdModal" />
    <AccountViewModal @register="registerViewModal" :source="source" />
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { reactive, ref } from "vue";
  import { BasicTable, useTable, TableAction, BasicColumn } from "@/components/general/Table";
  import { deleteUser, getUserList } from "@/api/sys/User";
  import { PageWrapper } from "@/components/general/Page";
  import OrgTree from "./OrgTree.vue";
  import { useModal } from "@/components/general/Modal";
  import AccountModal from "./AccountModal.vue";
  import { columns, searchFormSchema } from "./account.data";
  import { usePermission } from "@/hooks/web/UsePermission";
  import PasswordModal from "@/views/sys/account/PasswordModal.vue";
  import { deleteUserOrg, getTenantUserList } from "@/api/sys/SsoTenant";
  import { useDesign } from "@/hooks/web/UseDesign";
  import AccountSelectModal from "@/views/sys/account/AccountSelectModal.vue";
  import { useMessage } from "@/hooks/web/UseMessage";
  import { Recordable } from "@mfish/types";
  import AccountViewModal from "@/views/sys/account/AccountViewModal.vue";
  defineOptions({ name: "AccountManagement" });
  const props = defineProps({
    source: {
      type: Number,
      default: 0
    }
  });
  const { hasRole, SUPER_ROLE, hasPermission } = usePermission();
  const [registerModal, { openModal }] = useModal();
  const [registerSelectModal, { openModal: openSelectModal }] = useModal();
  const [registerPwdModal, { openModal: openPwdModal }] = useModal();
  const [registerViewModal, { openModal: openViewModal }] = useModal();
  const { createMessage } = useMessage();
  const searchInfo = reactive<Recordable>({});
  const { prefixCls } = useDesign("account");
  const api = ref();
  let newColumns: BasicColumn[];
  if (props.source === 1) {
    api.value = getTenantUserList;
    newColumns = columns.filter((col) => col.dataIndex !== "status");
  } else {
    api.value = getUserList;
    newColumns = columns;
  }
  const [registerTable, { reload }] = useTable({
    title: "账号列表",
    api,
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
    resizeHeightOffset: props.source === 1 ? 26 : 0,
    actionColumn: {
      width: props.source === 1 ? 120 : 150,
      title: "操作",
      dataIndex: "action"
    }
  });

  function handleCreate() {
    openModal(true, {
      isUpdate: false
    });
  }

  /**
   * 查看
   * @param account 用户表对象
   */
  function handleQuery(account: Recordable) {
    openViewModal(true, { record: account });
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
    openSelectModal(true, { orgId: searchInfo.orgId });
  }

  function handleSuccess() {
    reload();
  }

  function handleRemoveUser(record: Recordable) {
    if (searchInfo.orgId === undefined || searchInfo.orgId === "") {
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
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-account";
  [data-theme="dark"] {
    .@{prefix-cls} {
      border-left: 1px solid #303030;
    }
  }
  .@{prefix-cls} {
    padding: 0 0 0 5px;
    border-left: 1px solid #d9d9d9;
    height: calc(100vh - 175px);
  }
</style>
