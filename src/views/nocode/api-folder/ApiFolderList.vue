<!--
 @description: 自定义API
 @author: mfish
 @date: 2023-07-28
 @version: V1.1.0
-->
<template>
  <BasicTable @register="registerTable">
    <template #toolbar>
      <AInputSearch placeholder="输入文件名称" @search="onSearch" style="width: 200px" allowClear />
      <a-button class="left" type="primary" @click="handleCreate" v-auth="'sys:mfApi:insert'">新建API</a-button>
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
</template>
<script lang="ts">
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import { deleteMfApi, exportMfApi } from "/@/api/nocode/MfApi";
  import { usePermission } from "/@/hooks/web/UsePermission";
  import { MfApi } from "/@/api/nocode/model/MfApiModel";
  import { Input as AInput } from "ant-design-vue";
  import { onMounted, onUnmounted, ref, watch } from "vue";
  import { getApiFolderAndFile } from "/@/api/nocode/ApiFolder";
  import Icon from "/@/components/general/Icon/src/Icon.vue";
  import { useRootSetting } from "/@/hooks/setting/UseRootSetting";
  import { propTypes } from "/@/utils/PropTypes";
  import { FolderVo } from "/@/api/nocode/model/ApiFolderModel";
  import { API_SAVE, columns } from "/@/views/nocode/api-folder/apiFolder.data";
  import { router } from "/@/router";

  export default {
    name: "ApiFolderList",
    components: { Icon, AInputSearch: AInput.Search, BasicTable, TableAction },
    props: {
      folderId: propTypes.string.def("")
    },
    emits: ["folderClick", "folderDelete"],
    setup(props, { emit }) {
      const { hasPermission } = usePermission();
      const folderId = ref("");
      const iconColor = useRootSetting().getThemeColor;
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
        const routeData = router.resolve({
          path: "/low-code/mf-api/config"
        });
        localStorage.setItem(API_SAVE, "0");
        window.open(routeData.href, "_blank");
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
        onSearch,
        iconColor,
        folderClick
      };
    }
  };
</script>
