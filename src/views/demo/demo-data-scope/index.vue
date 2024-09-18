<!--
 @description: demo_data_scope
 @author: mfish
 @date: 2024-09-04
 @version: V1.3.1
-->
<template>
  <PageWrapper title="数据权限控制样例" content="通过@DataScope注解进行数据权限限制，使用方法参考后端接口代码">
    <BasicTable @register="registerTable">
      <template #form-resetBefore>
        <AFlex class="ml-2" wrap="wrap" gap="small">
          <AButton type="primary" @click="handleCurrentTenant">查询当前租户数据</AButton>
          <AButton type="primary" @click="handleCurrentOrg">查询当前组织及其子组织数据</AButton>
          <AButton type="primary" @click="handleCurrentRole">查询当前角色数据</AButton>
        </AFlex>
        <AFlex wrap="wrap" class="mt-1 ml-2" gap="small">
          <AButton color="error" @click="handleAdminOrg">查询组织编码为admin或mfish及其下级组织数据</AButton>
          <AButton color="error" @click="handleFixRole">查询角色编码为manage或superAdmin数据</AButton>
          <AButton color="error" @click="handleMixScope">查询当前租户下角色编码为manage或superAdmin数据</AButton>
        </AFlex>
        <div class="mt-1"></div>
      </template>
      <template #form-advanceBefore> </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:info-circle-outlined',
                onClick: handleQuery.bind(null, record),
                auth: 'demo:demoDataScope:query',
                color: 'success',
                tooltip: '查看'
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <DemoDataScopeViewModal @register="registerViewModal" />
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from "@/components/general/Table";
  import {
    getAdminOrg,
    getCurrentOrg,
    getCurrentRole,
    getCurrentTenant,
    getDemoDataScopeList,
    getFixRole,
    getMixScope
  } from "@/api/demo/DemoDataScope";
  import { useModal } from "@/components/general/Modal";
  import DemoDataScopeViewModal from "./DemoDataScopeViewModal.vue";
  import { columns } from "./demoDataScope.data";
  import { DemoDataScope } from "@/api/demo/model/DemoDataScopeModel";
  import { onMounted, ref } from "vue";
  import { Flex as AFlex } from "ant-design-vue";
  import { PageWrapper } from "@/components/general/Page";

  defineOptions({ name: "DemoDataScopeManagement" });
  const [registerViewModal, { openModal: openViewModal }] = useModal();
  const selectedRowKeys = ref<any[]>([]);
  const [registerTable, { setProps, reload }] = useTable({
    title: "数据权限控制样例",
    rowKey: "id",
    columns,
    formConfig: {
      name: "search_form_item",
      labelWidth: 100,
      autoSubmitOnEnter: true,
      showSubmitButton: false,
      submitFunc: () => {
        init();
      }
    },
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    showIndexColumn: false,

    rowSelection: {
      onChange: (rowKeys: any[]) => {
        selectedRowKeys.value = rowKeys;
      }
    },
    actionColumn: {
      width: 120,
      title: "操作",
      dataIndex: "action"
    }
  });

  function init() {
    setProps({
      api: getDemoDataScopeList
    });
    reload();
  }
  onMounted(() => {
    init();
  });
  /**
   * 查看
   * @param demoDataScope demo_data_scope对象
   */
  function handleQuery(demoDataScope: DemoDataScope) {
    openViewModal(true, { record: demoDataScope });
  }

  /**
   * 查询当前租户数据
   */
  function handleCurrentTenant() {
    setProps({
      api: getCurrentTenant
    });
    reload();
  }

  /**
   * 查询当前组织数据
   */
  function handleCurrentOrg() {
    setProps({
      api: getCurrentOrg
    });
    reload();
  }

  /**
   * 查询当前角色数据
   */
  function handleCurrentRole() {
    setProps({
      api: getCurrentRole
    });
    reload();
  }

  /**
   * 查询组织编码为admin及其下级组织数据
   */
  function handleAdminOrg() {
    setProps({
      api: getAdminOrg
    });
    reload();
  }

  /**
   * 查询角色编码为manage或superAdmin数据
   */
  function handleFixRole() {
    setProps({
      api: getFixRole
    });
    reload();
  }

  /**
   * 查询当前租户下角色编码为manage或superAdmin数据
   */
  function handleMixScope() {
    setProps({
      api: getMixScope
    });
    reload();
  }
</script>
