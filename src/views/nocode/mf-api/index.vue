<!--
 @description: 自定义API
 @author: mfish
 @date: 2023-07-28
 @version: V1.1.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <AInputSearch placeholder="输入API名称或编号" @search="onSearch" style="width: 200px" />
        <a-button class="left" type="primary" @click="handleCreate" v-auth="'sys:mfApi:insert'"> 新增 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:mfApi:update',
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
                auth: 'sys:mfApi:delete',
                tooltip: '删除'
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <MfApiModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import { deleteMfApi, exportMfApi } from "/@/api/nocode/MfApi";
  import { useModal } from "/@/components/general/Modal";
  import MfApiModal from "./MfApiModal.vue";
  import { columns, searchFormSchema } from "./mfApi.data";
  import { usePermission } from "/@/hooks/web/UsePermission";
  import { MfApi } from "/@/api/nocode/model/MfApiModel";
  import { Input as AInput } from "ant-design-vue";
  import { ref, watch } from "vue";
  import { getApiFolderAndFile } from "/@/api/nocode/ApiFolder";

  export default {
    name: "MfApiManagement",
    components: { AInputSearch: AInput.Search, BasicTable, MfApiModal, TableAction },
    props: {
      folderId: { type: String, default: "" }
    },
    setup(props) {
      const { hasPermission } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const folderId = ref("");
      watch(
        () => props.folderId,
        (value) => {
          folderId.value = value;
          queryFolder();
        }
      );
      const [registerTable, { reload, getForm }] = useTable({
        title: "",
        api: getApiFolderAndFile,
        searchInfo: { parentId: folderId },
        columns,
        formConfig: {
          name: "search_form_item",
          labelWidth: 100,
          schemas: searchFormSchema,
          autoSubmitOnEnter: true
        },
        useSearchForm: false,
        showTableSetting: true,
        bordered: false,
        showIndexColumn: false,
        actionColumn: {
          width: 80,
          title: "操作",
          dataIndex: "action"
        }
      });

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
        exportMfApi({ ...getForm().getFieldsValue(), pageNum: 1, pageSize: 1000 });
      }

      /**
       * 修改
       * @param mfApi
       */
      function handleEdit(mfApi: MfApi) {
        openModal(true, {
          record: mfApi,
          isUpdate: true
        });
      }

      /**
       * 删除
       * @param mfApi
       */
      function handleDelete(mfApi: MfApi) {
        if (mfApi.id) {
          deleteMfApi(mfApi.id).then(() => {
            handleSuccess();
          });
        }
      }

      /**
       * 处理完成
       */
      function handleSuccess() {
        queryFolder();
      }

      function queryFolder() {
        reload({ searchInfo: { parentId: folderId.value } });
      }
      function onSearch(val) {
        console.log(val, "aaa");
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleExport,
        handleSuccess,
        hasPermission,
        onSearch
      };
    }
  };
</script>
