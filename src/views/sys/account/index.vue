<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <OrgTree class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/5" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增账号</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                tooltip: '编辑用户资料',
                onClick: handleEdit.bind(null, record),
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
                ifShow: record.account === 'admin'? false:true
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <AccountModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { BasicTable, useTable, TableAction } from "/@/components/Table";
import { deleteUser, getUserList } from "/@/api/sys/User";
import { PageWrapper } from "/@/components/Page";
import OrgTree from "./OrgTree.vue";
import { useModal } from "/@/components/Modal";
import AccountModal from "./AccountModal.vue";
import { columns, searchFormSchema } from "./account.data";

export default defineComponent({
  name: "AccountManagement",
  components: { BasicTable, PageWrapper, OrgTree, AccountModal, TableAction },
  setup() {
    const [registerModal, { openModal }] = useModal();
    const searchInfo = reactive<Recordable>({});
    const [registerTable, { reload }] = useTable({
      title: "账号列表",
      api: getUserList,
      rowKey: "id",
      columns,
      formConfig: {
        labelWidth: 80,
        schemas: searchFormSchema,
        autoSubmitOnEnter: true
      },
      useSearchForm: true,
      showTableSetting: true,
      bordered: true,
      handleSearchInfoFn(info) {
        console.log("handleSearchInfoFn", info);
        return info;
      },
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
      searchInfo
    };
  }
});
</script>
