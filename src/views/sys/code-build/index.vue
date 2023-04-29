<!--
 @description: 代码构建
 @author: mfish
 @date: 2023-04-11
 @version: V1.0.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="hasPermission('sys:codeBuild:insert')">构建代码</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:search-outlined',
                onClick: handleQuery.bind(null, record),
                auth: 'sys:codeBuild:query',
                tooltip: '查看代码',
              },
              {
                icon: 'ant-design:download-outlined',
                onClick: handleDownload.bind(null, record),
                auth: 'sys:codeBuild:query',
                tooltip: '下载代码',
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
                auth: 'sys:codeBuild:delete',
                tooltip: '删除',
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <CodeBuildModal @register="registerModal" @success="handleSuccess" />
    <CodeQueryModal @register="registerQueryModal" />
  </div>
</template>
<script lang="ts">
import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
import { deleteCodeBuild, downloadCode, getCodeBuildList } from "/@/api/sys/CodeBuild";
import { useModal } from "/@/components/general/Modal";
import CodeBuildModal from "./CodeBuildModal.vue";
import { columns, searchFormSchema } from "./codeBuild.data";
import { usePermission } from "/@/hooks/web/UsePermission";
import DataBaseModal from "/@/views/sys/database/DataBaseModal.vue";
import { Button } from "ant-design-vue";
import CodeQueryModal from "/@/views/sys/code-build/CodeQueryModal.vue";
import { CodeBuild } from "/@/api/sys/model/CodeBuildModel";

export default {
  name: "CodeBuildManagement",
  components: { CodeQueryModal, DataBaseModal, BasicTable, CodeBuildModal, TableAction, Button },
  setup() {
    const { hasPermission } = usePermission();
    const [registerModal, { openModal }] = useModal();
    const [registerQueryModal, { openModal: openQueryModal }] = useModal();
    const [registerTable, { reload }] = useTable({
      title: "代码构建列表",
      api: getCodeBuildList,
      columns,
      formConfig: {
        labelWidth: 100,
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

    function handleQuery(record: Recordable) {
      openQueryModal(true, {
        ...record
      });
    }

    function handleDownload(record: CodeBuild) {
      downloadCode(record).then();
    }

    function handleDelete(record: Recordable) {
      deleteCodeBuild(record.id).then(() => {
        handleSuccess();
      });
    }

    function handleSuccess() {
      reload();
    }

    return {
      registerTable,
      registerModal,
      registerQueryModal,
      handleCreate,
      handleQuery,
      handleDownload,
      handleDelete,
      handleSuccess,
      hasPermission
    };
  }
};
</script>
