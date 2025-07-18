<!--
 @description: 文件存储
 @author: mfish
 @date: 2023-03-02
 @version: V2.0.1
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <BasicUpload :max-size="10" @change="handleChange" :api="uploadApi" v-auth="'sys:file:upload'" />
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                slot: 'update',
                auth: 'sys:file:upload'
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认彻底删除，删除后将无法恢复',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record)
                },
                auth: 'sys:file:delete',
                tooltip: '彻底删除'
              }
            ]"
          >
            <template #update>
              <BasicUpload
                button-size="small"
                button-type="link"
                button-tooltip="更新文件"
                button-text=""
                :is-update="true"
                :max-size="10"
                @change="handleUpdate"
                :api="uploadUpdateApi"
                :upload-params="{
                  fileKey: record.fileKey
                }"
                v-auth="'sys:file:upload'"
              />
            </template>
          </TableAction>
        </template>
      </template>
    </BasicTable>
    <SysFileModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, TableAction, useTable } from "@mfish/core/components/Table";
  import { deleteSysFile, getSysFileList, SysFile, uploadApi, uploadUpdateApi } from "@mfish/core/api";
  import { useModal } from "@mfish/core/components/Modal";
  import SysFileModal from "./SysFileModal.vue";
  import { columns, searchFormSchema } from "./sysFile.data";
  import { BasicUpload } from "@mfish/core/components/Upload";
  import { Recordable } from "@mfish/types";

  defineOptions({ name: "SysFileManagement" });

  const [registerModal] = useModal();
  const [registerTable, { reload, insertTableDataRecord, updateTableDataRecord }] = useTable({
    title: "文件列表",
    api: getSysFileList,
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
    actionColumn: {
      width: 80,
      title: "操作",
      dataIndex: "action"
    }
  });

  function handleDelete(record: Recordable) {
    deleteSysFile(record.id).then(() => {
      handleSuccess();
    });
  }

  function handleSuccess() {
    reload();
  }

  const handleChange = (files: SysFile[]) => {
    files.forEach((file) => {
      insertTableDataRecord(file, 0);
    });
  };

  const handleUpdate = (files: SysFile[]) => {
    files.forEach((file) => {
      updateTableDataRecord(file.id, file);
    });
  };
</script>
