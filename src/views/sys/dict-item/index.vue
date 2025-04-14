<!--
 @description: 字典项
 @author     ：mfish
 @date: 2023-01-03
-->
<template>
  <PageWrapper :title="`字典${dictCode}`" @back="goBack">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-auth="'sys:dict:insert'">新增字典项 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column?.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:dict:update'
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record)
                },
                auth: 'sys:dict:delete'
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <DictItemModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { unref, ref, onBeforeMount } from "vue";
  import { useRoute } from "vue-router";
  import { PageWrapper } from "@/components/general/Page";
  import { BasicTable, useTable, TableAction } from "@mfish/core/src/components/Table";
  import { deleteDictItem, getDictItemList } from "@mfish/core/src/api/sys/DictItem";
  import { useModal } from "@mfish/core/src/components/Modal";
  import DictItemModal from "./DictItemModal.vue";
  import { columns, searchFormSchema } from "./dictItem.data";
  import { useGo } from "@mfish/core/src/hooks/web/UsePage";
  import { useTabs } from "@mfish/core/src/hooks/web/UseTabs";
  import { Recordable } from "@mfish/types";
  defineOptions({ name: "DictItemManagement" });

  const [registerModal, { openModal }] = useModal();
  const go = useGo();
  const route = useRoute();
  const dictCode = ref(route.params?.dictCode);
  const [registerTable, { reload }] = useTable({
    title: "字典项列表",
    api: getDictItemList,
    searchInfo: { dictCode },
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
    showIndexColumn: false,
    actionColumn: {
      width: 80,
      title: "操作",
      dataIndex: "action"
    }
  });
  const { setTitle } = useTabs();
  onBeforeMount(() => {
    if (!dictCode.value) {
      const index = route.fullPath.lastIndexOf("/");
      dictCode.value = route.fullPath.slice(Math.max(0, index + 1));
    }
    setTitle(`字典项: ${unref(dictCode)}`);
  });

  function handleCreate() {
    openModal(true, {
      record: { dictCode },
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
</script>
