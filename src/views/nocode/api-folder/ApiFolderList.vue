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
        <AInputSearch placeholder="输入文件名称" @search="onSearch" style="width: 200px" allowClear />
        <AButton class="left" type="primary" @click="handleCreate" v-auth="'sys:mfApi:insert'">新建API</AButton>
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
        <template v-if="column.key === 'name'">
          <div style="display: flex; align-items: center; cursor: pointer" @click="folderClick(record)">
            <Icon icon="ant-design:api-outlined" v-if="record?.fType === 1" />
            <Icon v-else icon="ant-design:folder-filled" :color="iconColor" />
            <div style="margin-left: 12px">{{ record.name }}</div>
          </div>
        </template>
      </template>
    </BasicTable>
    <DataBaseModal @register="registerModal">
      <template #button="{ data }">
        <AButton type="primary" @click="ApiCreate(data)" v-auth="'sys:mfApi:insert'">新建API</AButton>
      </template>
    </DataBaseModal>
  </div>
</template>
<script lang="ts">
  import { onMounted, onUnmounted, ref, watch, defineComponent } from "vue";
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import { deleteMfApi, exportMfApi } from "/@/api/nocode/MfApi";
  import { usePermission } from "/@/hooks/web/UsePermission";
  import { MfApi } from "/@/api/nocode/model/MfApiModel";
  import { Input as AInput } from "ant-design-vue";
  import { getApiFolderAndFile } from "/@/api/nocode/ApiFolder";
  import Icon from "/@/components/general/Icon/src/Icon.vue";
  import { useRootSetting } from "/@/hooks/setting/UseRootSetting";
  import { propTypes } from "/@/utils/PropTypes";
  import { FolderVo } from "/@/api/nocode/model/ApiFolderModel";
  import { API_SAVE, columns } from "/@/views/nocode/api-folder/apiFolder.data";
  import DataBaseModal from "/@/views/sys/database/DataBaseModal.vue";
  import { useModal } from "/@/components/general/Modal";
  import { router } from "/@/router";

  export default defineComponent({
    name: "ApiFolderList",
    components: {
      DataBaseModal,
      Icon,
      AInputSearch: AInput.Search,
      BasicTable,
      TableAction
    },
    props: {
      folderId: propTypes.string.def("")
    },
    emits: ["folderClick", "folderDelete"],
    setup(props, { emit }) {
      const { hasPermission } = usePermission();
      const folderId = ref("");
      const iconColor = useRootSetting().getThemeColor;
      const [registerModal, { openModal, closeModal }] = useModal();
      watch(
        () => props.folderId,
        (value) => {
          folderId.value = value;
          queryFolder();
        }
      );
      onMounted(() => {
        window.addEventListener("storage", onStorageHandle);
      });
      onUnmounted(() => {
        window.removeEventListener("storage", onStorageHandle);
      });
      const [registerTable, { reload, getForm }] = useTable({
        title: "",
        api: getApiFolderAndFile,
        searchInfo: { parentId: folderId },
        columns,
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
        openModal(true);
      }

      function ApiCreate(data) {
        if (!data.key) return;
        const values = data.key.split(",");
        if (values?.length < 2) return;
        const connectId = values[0];
        const tableName = values[1];
        const routeData = router.resolve({
          path: "/low-code/mf-api/config",
          query: { connectId, tableName, sourceType: 0 }
        });
        localStorage.setItem(API_SAVE, "0");
        window.open(routeData.href, "_blank");
        closeModal();
      }

      function onStorageHandle(e) {
        if (e.key !== API_SAVE) return;
        console.log(e, "sssss");
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
      function handleEdit(mfApi: MfApi) {}

      /**
       * 删除
       * @param folderVo
       */
      function handleDelete(folderVo: FolderVo) {
        if (folderVo.fType === 0) {
          emit("folderDelete", folderVo);
          reload();
          return;
        }
        if (folderVo.id) {
          deleteMfApi(folderVo.id).then(() => {
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
        reload({ searchInfo: { parentId: null, name: val } });
      }

      function folderClick(record) {
        emit("folderClick", record);
      }

      return {
        registerTable,
        handleCreate,
        handleEdit,
        handleDelete,
        handleExport,
        handleSuccess,
        hasPermission,
        ApiCreate,
        onSearch,
        iconColor,
        folderClick,
        registerModal
      };
    }
  });
</script>
