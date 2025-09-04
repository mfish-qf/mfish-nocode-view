<!--
 @description: 销售订单
 @author: mfish
 @date: 2024-09-13
 @version: V2.1.1
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <AButton type="primary" @click="handleCreate" v-auth="'demo:demoOrder:insert'">新增</AButton>
        <AButton color="warning" @click="handleExport" v-auth="'demo:demoOrder:export'">导出</AButton>
        <AButton color="error" @click="handleBatchDelete" v-auth="'demo:demoOrder:delete'">批量删除</AButton>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:info-circle-outlined',
                onClick: handleQuery.bind(null, record),
                auth: 'demo:demoOrder:query',
                color: 'success',
                tooltip: '查看'
              },
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'demo:demoOrder:update',
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
                auth: 'demo:demoOrder:delete',
                tooltip: '删除'
              }
            ]"
          />
        </template>
      </template>
      <template #expandedRowRender="{ record }">
        <DemoOrderDetailManagement
          :ref="(el) => setDetailsRef(el, record.id)"
          :order-id="record?.id"
          :is-preview="true"
        />
      </template>
    </BasicTable>
    <DemoOrderModal @register="registerModal" @success="handleSuccess" />
    <DemoOrderViewModal @register="registerViewModal" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, TableAction, useTable } from "@mfish/core/components/Table";
  import { deleteBatchDemoOrder, deleteDemoOrder, exportDemoOrder, getDemoOrderList } from "@/api/demo/DemoOrder";
  import { useModal } from "@mfish/core/components/Modal";
  import DemoOrderModal from "./DemoOrderModal.vue";
  import DemoOrderViewModal from "./DemoOrderViewModal.vue";
  import { columns, searchFormSchema } from "./demoOrder.data";
  import { DemoOrder } from "@/api/demo/model/DemoOrderModel";
  import { ref } from "vue";
  import { useMessage } from "@mfish/core/hooks";
  import { Button as AButton } from "@mfish/core/components/Button";
  import DemoOrderDetailManagement from "@/views/demo/demo-order-detail/index.vue";

  defineOptions({ name: "DemoOrderManagement" });
  const [registerModal, { openModal }] = useModal();
  const [registerViewModal, { openModal: openViewModal }] = useModal();
  const selectedRowKeys = ref<any[]>([]);
  const [registerTable, { reload, getForm, getExpandedRowKeys }] = useTable({
    title: "主子表样例列表",
    api: getDemoOrderList,
    rowKey: "id",
    columns,
    formConfig: {
      name: "search_form_item",
      labelWidth: 100,
      schemas: searchFormSchema,
      autoSubmitOnEnter: true
    },
    isTreeTable: true,
    accordion: true,
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
  const { createMessage } = useMessage();

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
    exportDemoOrder({ ...getForm().getFieldsValue(), pageNum: 1, pageSize: 1000 });
  }

  /**
   * 查看
   * @param demoOrder 销售订单对象
   */
  function handleQuery(demoOrder: DemoOrder) {
    openViewModal(true, { record: demoOrder });
  }

  /**
   * 修改
   * @param demoOrder 销售订单对象
   */
  function handleEdit(demoOrder: DemoOrder) {
    openModal(true, {
      record: demoOrder,
      isUpdate: true
    });
  }

  /**
   * 删除
   * @param demoOrder 销售订单对象
   */
  function handleDelete(demoOrder: DemoOrder) {
    if (demoOrder.id) {
      deleteDemoOrder(demoOrder.id).then(() => {
        handleSuccess();
      });
    }
  }

  /**
   * 批量删除
   */
  function handleBatchDelete() {
    if (selectedRowKeys.value.length > 0) {
      deleteBatchDemoOrder(selectedRowKeys.value.join(",")).then(() => {
        handleSuccess();
      });
    } else {
      createMessage.warning("请勾选要删除的数据");
    }
  }

  /**
   * 处理完成
   */
  function handleSuccess() {
    reload();
  }

  function setDetailsRef(el, id) {
    if (el && id) {
      getExpandedRowKeys().forEach((key) => {
        if (key === id) {
          el.reload();
        }
      });
    }
  }
</script>
