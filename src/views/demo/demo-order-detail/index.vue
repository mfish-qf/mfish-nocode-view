<!--
 @description: 销售订单明细
 @author: mfish
 @date: 2024-09-02
 @version: V1.2.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-auth="'demo:demoOrderDetail:insert'">新增</a-button>
        <a-button color="warning" @click="handleExport" v-auth="'demo:demoOrderDetail:export'">导出</a-button>
        <a-button color="error" @click="handleBatchDelete" v-auth="'demo:demoOrderDetail:delete'">批量删除</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:info-circle-outlined',
                onClick: handleQuery.bind(null, record),
                auth: 'demo:demoOrderDetail:query',
                color: 'success',
                tooltip: '查看'
              },
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'demo:demoOrderDetail:update',
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
                auth: 'demo:demoOrderDetail:delete',
                tooltip: '删除'
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <DemoOrderDetailModal @register="registerModal" @success="handleSuccess" />
    <DemoOrderDetailViewModal @register="registerViewModal" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from "@/components/general/Table";
  import { deleteBatchDemoOrderDetail, deleteDemoOrderDetail, exportDemoOrderDetail, getDemoOrderDetailList } from "@/api/demo/DemoOrderDetail";
  import { useModal } from "@/components/general/Modal";
  import DemoOrderDetailModal from "./DemoOrderDetailModal.vue";
  import DemoOrderDetailViewModal from "./DemoOrderDetailViewModal.vue";
  import { columns, searchFormSchema } from "./demoOrderDetail.data";
  import { DemoOrderDetail } from "@/api/demo/model/DemoOrderDetailModel";
  import { ref } from "vue";
  import { useMessage } from "@/hooks/web/UseMessage";

  defineOptions({ name: "DemoOrderDetailManagement" });
  const [registerModal, { openModal }] = useModal();
  const [registerViewModal, { openModal: openViewModal }] = useModal();
  const selectedRowKeys = ref<any[]>([]);
  const [registerTable, { reload, getForm }] = useTable({
    title: "销售订单明细列表",
    api: getDemoOrderDetailList,
    rowKey: "id",
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
    exportDemoOrderDetail({ ...getForm().getFieldsValue(), pageNum: 1, pageSize: 1000 });
  }

  /**
   * 查看
   * @param demoOrderDetail 销售订单明细对象
   */
  function handleQuery(demoOrderDetail: DemoOrderDetail) {
    openViewModal(true, { record: demoOrderDetail });
  }

  /**
   * 修改
   * @param demoOrderDetail 销售订单明细对象
   */
  function handleEdit(demoOrderDetail: DemoOrderDetail) {
    openModal(true, {
      record: demoOrderDetail,
      isUpdate: true
    });
  }

  /**
   * 删除
   * @param demoOrderDetail 销售订单明细对象
   */
  function handleDelete(demoOrderDetail: DemoOrderDetail) {
    if (demoOrderDetail.id) {
      deleteDemoOrderDetail(demoOrderDetail.id).then(() => {
        handleSuccess();
      });
    }
  }

  /**
   * 批量删除
   * @param demoOrderDetail 销售订单明细对象
   */
  function handleBatchDelete() {
    if (selectedRowKeys.value.length > 0) {
      deleteBatchDemoOrderDetail(selectedRowKeys.value.join(",")).then(() => {
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
</script>
