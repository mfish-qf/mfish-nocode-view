<!--
 @description: 代码构建
 @author: mfish
 @date: 2023-04-11
 @version: V1.2.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-auth="'sys:codeBuild:insert'">构建代码</a-button>
        <a-button color="error" @click="handleBatchDelete" v-auth="'sys:codeBuild:delete'">批量删除</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:search-outlined',
                color: 'success',
                onClick: handleQuery.bind(null, record),
                auth: 'sys:codeBuild:query',
                tooltip: '查看代码'
              },
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:codeBuild:insert',
                tooltip: '编辑信息'
              }
            ]"
            :dropDownActions="[
              {
                icon: 'ant-design:download-outlined',
                color: '#1677ff',
                label: '下载代码',
                onClick: handleDownload.bind(null, record),
                auth: 'sys:codeBuild:query'
              },
              {
                icon: 'ant-design:save-outlined',
                label: '保存代码到IDE',
                color: 'warning',
                popConfirm: {
                  title: '是否确认保存，保存后回覆盖原有代码',
                  placement: 'left',
                  confirm: handleSaveLocal.bind(null, record)
                },
                auth: 'sys:codeBuild:query'
              },
              {
                icon: 'ant-design:menu-unfold-outlined',
                color: 'blue',
                label: '创建菜单',
                onClick: handleCreateMenu.bind(null, record),
                auth: 'sys:codeBuild:insert'
              },
              {
                icon: 'ant-design:delete-outlined',
                label: '删除',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record)
                },
                auth: 'sys:codeBuild:delete'
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <CodeBuildModal @register="registerModal" @success="handleSuccess" />
    <CodeQueryModal @register="registerQueryModal" />
    <CodeMenuModal @register="registerMenuModal" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import {
    deleteBatchCodeBuild,
    deleteCodeBuild,
    downloadCode,
    getCodeBuildList,
    saveCodeLocal
  } from "/@/api/sys/CodeBuild";
  import { useModal } from "/@/components/general/Modal";
  import CodeBuildModal from "./CodeBuildModal.vue";
  import { columns, searchFormSchema } from "./codeBuild.data";
  import { TableProps } from "ant-design-vue";
  import CodeQueryModal from "/@/views/sys/code-build/CodeQueryModal.vue";
  import { CodeBuild } from "/@/api/sys/model/CodeBuildModel";
  import { isProdMode } from "/@/utils/Env";
  import { useMessage } from "/@/hooks/web/UseMessage";
  import CodeMenuModal from "/@/views/sys/code-build/CodeMenuModal.vue";
  import { ref } from "vue";

  defineOptions({ name: "CodeBuildManagement" });
  const selectedRowKeys = ref<number[]>([]);
  const rowSelection: TableProps["rowSelection"] = {
    onChange: (rowKeys: number[]) => {
      selectedRowKeys.value = rowKeys;
    }
  };
  const [registerModal, { openModal }] = useModal();
  const [registerQueryModal, { openModal: openQueryModal }] = useModal();
  const [registerMenuModal, { openModal: openMenuModal }] = useModal();
  const [registerTable, { reload }] = useTable({
    title: "代码构建列表",
    api: getCodeBuildList,
    rowKey: "id",
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
    rowSelection: rowSelection,
    actionColumn: {
      width: 120,
      title: "操作",
      dataIndex: "action"
    }
  });
  const { createMessage } = useMessage();

  function handleCreate() {
    openModal(true, {
      isUpdate: false
    });
  }

  function handleQuery(record: Recordable) {
    openQueryModal(true, {
      ...record
    });
  }

  function handleDownload(record: CodeBuild) {
    downloadCode(record).then();
  }

  function handleSaveLocal(record: CodeBuild) {
    if (isProdMode()) {
      createMessage.warning("该操作只允许开发环境使用");
      return;
    }
    saveCodeLocal(record).then();
  }

  function handleEdit(record: CodeBuild) {
    openModal(true, {
      record,
      isUpdate: true
    });
  }

  function handleDelete(record: Recordable) {
    deleteCodeBuild(record.id).then(() => {
      handleSuccess();
    });
  }

  /**
   * 批量删除
   * @param tMallOrder 销售订单对象
   */
  function handleBatchDelete() {
    if (selectedRowKeys.value.length > 0) {
      deleteBatchCodeBuild(selectedRowKeys.value.join(",")).then(() => {
        handleSuccess();
      });
    } else {
      createMessage.warning("请勾选要删除的数据");
    }
  }

  function handleCreateMenu(record: Recordable) {
    openMenuModal(true, { id: record.id });
  }

  function handleSuccess() {
    reload();
  }
</script>
