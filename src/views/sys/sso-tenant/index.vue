<!--
 @description: 租户信息表
 @author: mfish
 @date: 2023-05-31
 @version: V1.0.1
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-auth="'sys:ssoTenant:insert'">新增</a-button>
        <a-button type="error" @click="handleExport" v-auth="'sys:ssoTenant:export'">导出</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:ssoTenant:update',
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
                auth: 'sys:ssoTenant:delete',
                ifShow: record.id !== '1',
                tooltip: '删除'
              }
            ]"
          />
        </template>
        <template v-if="column.key === 'corpSize'">
          <dict-tag code="tenant_corp_size" :value="record.corpSize" />
        </template>
        <template v-if="column.key === 'corpYears'">
          <dict-tag code="tenant_corp_years" :value="record.corpYears" />
        </template>
        <template v-if="column.key === 'trade'">
          <dict-tag code="tenant_corp_trade" :value="record.trade" />
        </template>
        <template v-if="column.key === 'tenantType'">
          <dict-tag code="tenant_corp_type" :value="record.tenantType" />
        </template>
      </template>
    </BasicTable>
    <SsoTenantModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import { deleteSsoTenant, exportSsoTenant, getSsoTenantList } from "/@/api/sys/SsoTenant";
  import { useModal } from "/@/components/general/Modal";
  import SsoTenantModal from "./SsoTenantModal.vue";
  import { columns, searchFormSchema } from "./ssoTenant.data";
  import { SsoTenant } from "/@/api/sys/model/SsoTenantModel";
  import DictTag from "/@/components/general/DictTag/DictTag.vue";
  defineOptions({ name: "SsoTenantManagement" });
  const [registerModal, { openModal }] = useModal();
  const [registerTable, { reload, getForm }] = useTable({
    title: "租户信息表列表",
    api: getSsoTenantList,
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
    exportSsoTenant({ ...getForm().getFieldsValue(), pageNum: 1, pageSize: 1000 });
  }

  /**
   * 修改
   * @param ssoTenant
   */
  function handleEdit(ssoTenant: SsoTenant) {
    openModal(true, {
      record: ssoTenant,
      isUpdate: true
    });
  }

  /**
   * 删除
   * @param ssoTenant
   */
  function handleDelete(ssoTenant: SsoTenant) {
    if (ssoTenant.id) {
      deleteSsoTenant(ssoTenant.id).then(() => {
        handleSuccess();
      });
    }
  }

  /**
   * 处理完成
   */
  function handleSuccess() {
    reload();
  }
</script>
