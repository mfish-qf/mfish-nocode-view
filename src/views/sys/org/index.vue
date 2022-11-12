<template>
  <div>
    <BasicTable @register="registerTable" @fetch-success="onFetchSuccess">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增组织</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <DeptModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
import { defineComponent, nextTick } from "vue";
import { BasicTable, useTable, TableAction } from "/@/components/Table";
import { deleteSsoOrg, getSsoOrgTree } from "/@/api/sys/SsoOrg";
import { useModal } from "/@/components/Modal";
import DeptModal from "./OrgModal.vue";
import { columns, searchFormSchema } from "./org.data";

export default defineComponent({
  name: "DeptManagement",
  components: { BasicTable, DeptModal, TableAction },
  setup() {
    const [registerModal, { openModal }] = useModal();
    const [registerTable, { reload, expandAll }] = useTable({
      title: "部门列表",
      api: getSsoOrgTree,
      columns,
      formConfig: {
        labelWidth: 100,
        schemas: searchFormSchema
      },
      pagination: false,
      striped: false,
      useSearchForm: true,
      showTableSetting: true,
      bordered: true,
      showIndexColumn: false,
      canResize: false,
      actionColumn: {
        width: 80,
        title: "操作",
        dataIndex: "action",
        fixed: undefined
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
      deleteSsoOrg(record.id).then(() => {
        handleSuccess();
      });
    }

    function handleSuccess() {
      reload();
    }

    function onFetchSuccess() {
      nextTick(expandAll)
    }

    return {
      registerTable,
      registerModal,
      handleCreate,
      handleEdit,
      handleDelete,
      handleSuccess,
      onFetchSuccess
    };
  }
});
</script>
