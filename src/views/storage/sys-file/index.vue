<!--
 @description: 文件存储
 @author: mfish
 @date: 2023-03-02
 @version: V1.2.0
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
          />
        </template>
      </template>
    </BasicTable>
    <SysFileModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from "@/components/general/Table";
  import { deleteSysFile, getSysFileList } from "@/api/storage/SysFile";
  import { useModal } from "@/components/general/Modal";
  import SysFileModal from "./SysFileModal.vue";
  import { columns, searchFormSchema } from "./sysFile.data";
  import { uploadApi } from "@/api/storage/Upload";
  import BasicUpload from "@/components/general/Upload/src/BasicUpload.vue";
  import { SysFile } from "@/api/storage/model/SysFileModel";
  import { Recordable } from "@mfish/types";
  defineOptions({ name: "SysFileManagement" });

  const [registerModal] = useModal();
  const [registerTable, { reload, insertTableDataRecord }] = useTable({
    title: "文件列表",
    api: getSysFileList,
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
</script>
