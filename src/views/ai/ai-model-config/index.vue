<!--
 @description: AI模型配置信息
 @author: mfish
 @date: 2026-07-03
 @version: V2.4.1
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <AButton type="primary" @click="handleCreate" v-auth="'ai:aiModelConfig:insert'">新增</AButton>
        <AButton color="warning" @click="handleExport" v-auth="'ai:aiModelConfig:export'">导出</AButton>
        <AButton color="error" @click="handleBatchDelete" v-auth="'ai:aiModelConfig:delete'">批量删除</AButton>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:info-circle-outlined',
                onClick: handleQuery.bind(null, record),
                auth: 'ai:aiModelConfig:query',
                color: 'success',
                tooltip: '查看'
              },
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'ai:aiModelConfig:update',
                tooltip: '修改'
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record)
                },
                auth: 'ai:aiModelConfig:delete',
                tooltip: '删除'
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <AiModelConfigModal @register="registerModal" @success="handleSuccess" />
    <AiModelConfigViewModal @register="registerViewModal" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from "@mfish/core/components/Table";
  import { useModal } from "@mfish/core/components/Modal";
  import { Button as AButton } from "@mfish/core/components/Button";
  import {
    deleteBatchAiModelConfig,
    deleteAiModelConfig,
    exportAiModelConfig,
    getAiModelConfigList
  } from "@/api/ai/AiModelConfig";
  import AiModelConfigModal from "./AiModelConfigModal.vue";
  import AiModelConfigViewModal from "./AiModelConfigViewModal.vue";
  import { columns, searchFormSchema } from "./aiModelConfig.data";
  import { AiModelConfig } from "@/api/ai/model/AiModelConfigModel";
  import { ref } from "vue";
  import { useMessage } from "@mfish/core/hooks";

  defineOptions({ name: "AiModelConfigManagement" });
  const [registerModal, { openModal }] = useModal();
  const [registerViewModal, { openModal: openViewModal }] = useModal();
  const selectedRowKeys = ref<any[]>([]);
  const [registerTable, { reload, getForm }] = useTable({
    title: "AI模型配置信息列表",
    api: getAiModelConfigList,
    rowKey: "id",
    columns,
    formConfig: {
      name: "search_form_item",
      labelWidth: 100,
      schemas: searchFormSchema,
      autoSubmitOnEnter: true
    },
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    showIndexColumn: false,
    rowSelection: {
      onChange: (rowKeys: any[]) => {
        selectedRowKeys.value = rowKeys;
      }
    },
    actionColumn: {
      width: 120,
      title: "操作",
      dataIndex: "action"
    }
  });
  const { createMessage } = useMessage();
  /**
   * 新建
   */
  function handleCreate() {
    openModal(true, {
      isUpdate: false
    });
  }

  /**
   *  导出自动生成支持导出1000条可自行修改
   */
  function handleExport() {
    exportAiModelConfig({ ...getForm().getFieldsValue(), pageNum: 1, pageSize: 1000 });
  }

  /**
   * 查看
   * @param aiModelConfig AI模型配置信息对象
   */
  function handleQuery(aiModelConfig: AiModelConfig) {
    openViewModal(true, { record: aiModelConfig });
  }

  /**
   * 修改
   * @param aiModelConfig AI模型配置信息对象
   */
  function handleEdit(aiModelConfig: AiModelConfig) {
    openModal(true, {
      record: aiModelConfig,
      isUpdate: true
    });
  }

  /**
   * 删除
   * @param aiModelConfig AI模型配置信息对象
   */
  function handleDelete(aiModelConfig: AiModelConfig) {
    if (aiModelConfig.id) {
      deleteAiModelConfig(aiModelConfig.id).then(() => {
        handleSuccess();
      });
    }
  }

  /**
   * 批量删除
   */
  function handleBatchDelete() {
    if (selectedRowKeys.value.length > 0) {
      deleteBatchAiModelConfig(selectedRowKeys.value.join(",")).then(() => {
        handleSuccess();
      });
    } else {
      createMessage.warning("请勾选要删除的数据");
    }
  }

  /**
   * 处理完成
   */
  function handleSuccess() {
    reload();
  }
</script>
