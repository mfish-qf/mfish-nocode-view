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
        <a-button type="primary" @click="handleCreate" v-if="hasPermission('sys:ssoTenant:insert')">新增</a-button>
        <a-button type="error" @click="handleExport" v-if="hasPermission('sys:ssoTenant:export')">导出</a-button>
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
                tooltip: '删除'
              }
            ]"
          />
        </template>
        <template v-if="column.key === 'corpSize'">
          <Tag
            v-for="item in corpSize"
            :key="item.dictCode + item.dictValue"
            v-show="record.corpSize == item.dictValue"
            :color="item.color"
          >
            {{ item.dictLabel }}
          </Tag>
        </template>
        <template v-if="column.key === 'corpYears'">
          <Tag
            v-for="item in corpYears"
            :key="item.dictCode + item.dictValue"
            v-show="record.corpYears == item.dictValue"
            :color="item.color"
          >
            {{ item.dictLabel }}
          </Tag>
        </template>
        <template v-if="column.key === 'trade'">
          <Tag
            v-for="item in trade"
            :key="item.dictCode + item.dictValue"
            v-show="record.trade == item.dictValue"
            :color="item.color"
          >
            {{ item.dictLabel }}
          </Tag>
        </template>
        <template v-if="column.key === 'tenantType'">
          <Tag
            v-for="item in tenantType"
            :key="item.dictCode + item.dictValue"
            v-show="record.tenantType == item.dictValue"
            :color="item.color"
          >
            {{ item.dictLabel }}
          </Tag>
        </template>
      </template>
    </BasicTable>
    <SsoTenantModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import { deleteSsoTenant, exportSsoTenant, getSsoTenantList } from "/@/api/sys/SsoTenant";
  import { useModal } from "/@/components/general/Modal";
  import SsoTenantModal from "./SsoTenantModal.vue";
  import { columns, searchFormSchema } from "./ssoTenant.data";
  import { usePermission } from "/@/hooks/web/UsePermission";
  import { SsoTenant } from "/@/api/sys/model/SsoTenantModel";
  import { Tag } from "ant-design-vue";
  import { onBeforeMount, ref } from "vue";
  import { DictItem } from "/@/api/sys/model/DictItemModel";
  import { getDictItems } from "/@/api/sys/DictItem";

  export default {
    name: "SsoTenantManagement",
    components: { Tag, BasicTable, SsoTenantModal, TableAction },
    setup() {
      const { hasPermission } = usePermission();
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
      const corpSize = ref<DictItem[]>([]);
      const corpYears = ref<DictItem[]>([]);
      const trade = ref<DictItem[]>([]);
      const tenantType = ref<DictItem[]>([]);
      onBeforeMount(() => {
        getCorpSize();
        getCorpYears();
        getTrade();
        getTenantType();
      });

      function getCorpSize() {
        getDictItems("tenant_corp_size").then((res) => {
          corpSize.value = res;
        });
      }

      function getCorpYears() {
        getDictItems("tenant_corp_years").then((res) => {
          corpYears.value = res;
        });
      }

      function getTrade() {
        getDictItems("tenant_corp_trade").then((res) => {
          trade.value = res;
        });
      }
      function getTenantType() {
        getDictItems("tenant_corp_type").then((res) => {
          tenantType.value = res;
        });
      }

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
       * @param
       */
      function handleEdit(ssoTenant: SsoTenant) {
        openModal(true, {
          record: ssoTenant,
          isUpdate: true
        });
      }

      /**
       * 删除
       * @param
       */
      function handleDelete(ssoTenant: SsoTenant) {
        deleteSsoTenant(ssoTenant.id).then(() => {
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
        hasPermission,
        corpSize,
        corpYears,
        trade,
        tenantType
      };
    }
  };
</script>
