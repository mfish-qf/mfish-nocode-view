<!--
 @description: 客户端信息
 @author: mfish
 @date: 2023-05-12
 @version: V2.2.0
-->
<template>
  <div :class="prefixCls">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-auth="'sys:client:insert'">新增</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:info-circle-outlined',
                onClick: handleQuery.bind(null, record),
                auth: 'sys:client:query',
                color: 'success',
                tooltip: '查看'
              },
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:client:update',
                tooltip: '修改'
              },
              {
                icon: 'ant-design:reload-outlined',
                popConfirm: {
                  title: '是否确认重置',
                  placement: 'left',
                  confirm: handleReset.bind(null, record)
                },
                auth: 'sys:client:update',
                tooltip: '重置密钥'
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record)
                },
                auth: 'sys:client:delete',
                tooltip: '删除'
              }
            ]"
          />
        </template>
        <template v-else-if="column.key === 'clientSecret'">
          <div class="secret">
            <TableAction
              v-if="record.clientSecret.startsWith('**********')"
              :actions="[
                {
                  icon: 'ant-design:eye-outlined',
                  onClick: showSecret.bind(null, record),
                  auth: 'sys:ssoClientDetails:query',
                  tooltip: '显示密钥'
                }
              ]"
            />
            <div>{{ record?.clientSecret }}</div>
          </div>
        </template>
        <template v-else-if="column.key === 'grantTypes'">
          <template v-for="(type, index) in record.grantTypes.split(',')">
            <template v-for="item in grantTypes">
              <ATag
                :bordered="false"
                class="ml-1"
                :key="index + item.dictCode"
                v-if="type === item.dictValue"
                :color="item.color"
              >
                {{ item.dictLabel }}
              </ATag>
            </template>
          </template>
        </template>
      </template>
    </BasicTable>
    <SsoClientDetailsModal @register="registerModal" @success="handleSuccess" />
    <SsoClientDetailsViewModal @register="registerViewModal" />
  </div>
</template>
<script lang="ts" setup>
  import { onMounted, ref } from "vue";
  import { BasicTable, TableAction, useTable } from "@mfish/core/components/Table";
  import { deleteSsoClientDetails, getSecret, getSsoClientDetailsList, resetSecret } from "@/api/sys/SsoClientDetails";
  import { useModal } from "@mfish/core/components/Modal";
  import SsoClientDetailsModal from "./SsoClientDetailsModal.vue";
  import { columns, searchFormSchema } from "./ssoClientDetails.data";
  import { DictItem, getDictItems } from "@mfish/core/api";
  import { useDesign } from "@mfish/core/hooks";
  import { Tag as ATag } from "ant-design-vue";
  import { Recordable } from "@mfish/types";
  import SsoClientDetailsViewModal from "@/views/sys/sso-client-details/SsoClientDetailsViewModal.vue";

  defineOptions({ name: "SsoClientDetailsManagement" });

  const [registerModal, { openModal }] = useModal();
  const [registerViewModal, { openModal: openViewModal }] = useModal();
  const [registerTable, { reload }] = useTable({
    title: "客户端信息列表",
    api: getSsoClientDetailsList,
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
      width: 150,
      title: "操作",
      dataIndex: "action"
    }
  });
  const grantTypes = ref<DictItem[]>([]);
  const { prefixCls } = useDesign("client-details");

  function showSecret(ssoClientDetails: Recordable) {
    if (ssoClientDetails.id) {
      getSecret(ssoClientDetails.id).then((res) => {
        ssoClientDetails.clientSecret = res;
      });
    }
  }

  /**
   * 新建
   */
  function handleCreate() {
    const types: any = [];
    grantTypes.value.forEach((type: DictItem) => {
      types.push(type.dictValue);
    });
    openModal(true, {
      record: { grantTypeGroup: types },
      isUpdate: false
    });
  }

  onMounted(() => {
    getDictItems("sso_grant_type").then((res) => {
      grantTypes.value = res;
    });
  });

  /**
   * 查看
   * @param ssoClientDetails 客户端信息对象
   */
  function handleQuery(ssoClientDetails: Recordable) {
    openViewModal(true, { record: ssoClientDetails });
  }

  /**
   * 修改
   * @param ssoClientDetails
   */
  function handleEdit(ssoClientDetails: Recordable) {
    if (ssoClientDetails.grantTypes) {
      ssoClientDetails.grantTypeGroup = ssoClientDetails.grantTypes.split(",");
    }
    openModal(true, {
      record: ssoClientDetails,
      isUpdate: true
    });
  }

  function handleReset(ssoClientDetails: Recordable) {
    if (ssoClientDetails.id)
      resetSecret(ssoClientDetails.id).then((res) => {
        ssoClientDetails.clientSecret = res;
      });
  }

  /**
   * 删除
   * @param ssoClientDetails
   */
  function handleDelete(ssoClientDetails: Recordable) {
    if (ssoClientDetails.id) {
      deleteSsoClientDetails(ssoClientDetails.id).then(() => {
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
<style lang="less">
  @prefix-cls: ~"@{namespace}-client-details";
  .@{prefix-cls} {
    .secret {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
