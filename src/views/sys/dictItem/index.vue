<!--
 @description: 字典项
 @author     ：mfish
 @date: 2023-01-03
-->
<template>
  <PageWrapper :title="`字典${dictCode}`" @back="goBack">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="hasPermission('sys:dictItem:insert')">新增字典项</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:dictItem:update'
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
                auth: 'sys:dictItem:delete'
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <DictItemModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
import { unref, ref } from "vue";
import { useRoute } from "vue-router";
import { PageWrapper } from "/@/components/Page";
import { BasicTable, useTable, TableAction } from "/@/components/Table";
import { deleteDictItem, getDictItemList } from "/@/api/sys/DictItem";
import { useModal } from "/@/components/Modal";
import DictItemModal from "./DictItemModal.vue";
import { columns, searchFormSchema } from "./dictItem.data";
import { usePermission } from "/@/hooks/web/UsePermission";
import { useGo } from "/@/hooks/web/UsePage";
import { useTabs } from "/@/hooks/web/UseTabs";

export default {
  name: "DictItemManagement",
  components: { BasicTable, DictItemModal, TableAction, PageWrapper },
  setup() {
    const { hasPermission } = usePermission();
    const [registerModal, { openModal }] = useModal();
    const go = useGo();
    const route = useRoute();
    const dictCode = ref(route.params?.dictCode);
    const [registerTable, { reload }] = useTable({
      title: "字典项列表",
      api: getDictItemList,
      searchInfo: { dictCode: dictCode },
      columns,
      formConfig: {
        labelWidth: 100,
        schemas: searchFormSchema
      },
      useSearchForm: true,
      showTableSetting: true,
      bordered: true,
      showIndexColumn: false,
      actionColumn: {
        width: 80,
        title: "操作",
        dataIndex: "action",
        fixed: undefined
      }
    });

    const { setTitle } = useTabs();
    setTitle(`字典项: ${unref(dictCode)}`);

    function handleCreate() {
      openModal(true, {
        record: { dictCode: dictCode },
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
      deleteDictItem(record.id).then(() => {
        handleSuccess();
      });
    }

    function handleSuccess() {
      reload();
    }

    function goBack() {
      go("/system/dict");
    }

    return {
      registerTable,
      registerModal,
      handleCreate,
      handleEdit,
      handleDelete,
      handleSuccess,
      hasPermission,
      dictCode,
      goBack
    };
  }
};
</script>
