<!--
 @description: 客户端信息
 @author: mfish
 @date: 2023-05-12
 @version: V1.0.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="hasPermission('sys:ssoClientDetails:insert')">新增</a-button>
        <a-button type="error" @click="handleExport" v-if="hasPermission('sys:ssoClientDetails:export')">导出</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:ssoClientDetails:update',
                tooltip: '修改',
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
                auth: 'sys:ssoClientDetails:delete',
                tooltip: '删除',
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <SsoClientDetailsModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
import { deleteSsoClientDetails, exportSsoClientDetails, getSsoClientDetailsList } from "/@/api/oauth2/SsoClientDetails";
import { useModal } from "/@/components/general/Modal";
import SsoClientDetailsModal from "./SsoClientDetailsModal.vue";
import { columns, searchFormSchema } from "./ssoClientDetails.data";
import { usePermission } from "/@/hooks/web/UsePermission";
import { SsoClientDetails } from "/@/api/oauth2/model/SsoClientDetails";

export default {
  name: "SsoClientDetailsManagement",
  components: { BasicTable, SsoClientDetailsModal, TableAction },
  setup() {
    const { hasPermission } = usePermission();
    const [registerModal, { openModal }] = useModal();
    const [registerTable, { reload, getForm }] = useTable({
      title: "客户端信息列表",
      api: getSsoClientDetailsList,
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
     *  导出
     */
    function handleExport() {
      exportSsoClientDetails(getForm().getFieldsValue());
    }

    /**
     * 修改
     * @param
     */
    function handleEdit(ssoClientDetails: SsoClientDetails) {
      openModal(true, {
        ssoClientDetails,
        isUpdate: true
      });
    }

    /**
     * 删除
     * @param
     */
    function handleDelete(ssoClientDetails: SsoClientDetails) {
      deleteSsoClientDetails(ssoClientDetails.id).then(() => {
        handleSuccess();
      });
    }

    /**
     * 处理完成
     */
    function handleSuccess() {
      reload();
    }

    return {
      registerTable,
      registerModal,
      handleCreate,
      handleEdit,
      handleDelete,
      handleExport,
      handleSuccess,
      hasPermission
    };
  }
};
</script>
