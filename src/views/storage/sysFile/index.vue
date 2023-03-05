<!--
 @description: 文件存储
 @author: mfish
 @date: 2023-03-02
 @version: V1.0.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <BasicUpload
          :maxSize="10"
          @change="handleChange"
          :api="uploadApi"
        />
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
                auth: 'sys:sysFile:delete',
                tooltip: '删除',
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <SysFileModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
import { deleteSysFile, getSysFileList } from "/@/api/storage/SysFile";
import { useModal } from "/@/components/general/Modal";
import SysFileModal from "./SysFileModal.vue";
import { columns, searchFormSchema } from "./sysFile.data";
import { usePermission } from "/@/hooks/web/UsePermission";
import { uploadApi } from "/@/api/storage/Upload";
import BasicUpload from "/@/components/general/Upload/src/BasicUpload.vue";
import { SysFile } from "/@/api/storage/model/SysFileModel";

export default {
  name: "SysFileManagement",
  components: { BasicUpload, BasicTable, SysFileModal, TableAction },
  setup() {
    const { hasPermission } = usePermission();
    const [registerModal, { openModal }] = useModal();
    const [registerTable, { reload, insertTableDataRecord }] = useTable({
      title: "文件列表",
      api: getSysFileList,
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
      deleteSysFile(record.id).then(() => {
        handleSuccess();
      });
    }

    function handleSuccess() {
      reload();
    }

    return {
      handleChange: (files: SysFile[]) => {
        files.forEach((file) => {
          insertTableDataRecord(file, 0);
        });
      },
      registerTable,
      registerModal,
      handleCreate,
      handleEdit,
      handleDelete,
      handleSuccess,
      hasPermission,
      uploadApi
    };
  }
};
</script>
