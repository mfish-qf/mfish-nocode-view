<!--
 @description: 销售订单明细
 @author: mfish
 @date: 2024-09-02
 @version: V1.3.1
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template v-if="!isPreview" #toolbar>
        <a-button type="primary" @click="handleCreate" v-auth="'demo:demoOrder:insert'">新增</a-button>
        <a-button color="error" @click="handleBatchDelete" v-auth="'demo:demoOrder:delete'">批量删除</a-button>
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
                tooltip: '修改',
                ifShow: !isPreview
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
                tooltip: '删除',
                ifShow: !isPreview
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
  import { getDemoOrderDetailList } from "@/api/demo/DemoOrderDetail";
  import { useModal } from "@/components/general/Modal";
  import DemoOrderDetailModal from "./DemoOrderDetailModal.vue";
  import DemoOrderDetailViewModal from "./DemoOrderDetailViewModal.vue";
  import { columns, searchFormSchema } from "./demoOrderDetail.data";
  import { DemoOrderDetail } from "@/api/demo/model/DemoOrderDetailModel";
  import { ref, watch } from "vue";
  import { useMessage } from "@/hooks/web/UseMessage";

  defineOptions({ name: "DemoOrderDetailManagement" });
  const props = defineProps({
    orderId: { type: String, default: "" },
    isPreview: { type: Boolean, default: false }
  });
  const [registerModal, { openModal }] = useModal();
  const [registerViewModal, { openModal: openViewModal }] = useModal();
  const selectedRowKeys = ref<any[]>([]);
  const dataSource = ref<DemoOrderDetail[]>([]);
  const [registerTable, { deleteTableDataRecord, insertTableDataRecord, updateTableDataRecord, getDataSource }] =
    useTable({
      title: "销售订单明细列表",
      dataSource,
      rowKey: "id",
      columns,
      formConfig: {
        name: "search_form_item",
        labelWidth: 100,
        schemas: searchFormSchema,
        autoSubmitOnEnter: true
      },
      useSearchForm: false,
      bordered: true,
      showIndexColumn: false,
      canResize: false,
      pagination: {
        pageSize: 5
      },
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
  watch(
    () => props.orderId,
    (newId) => {
      if (newId) {
        reload();
      } else {
        dataSource.value = [];
      }
    }
  );

  /**
   * 新建
   */
  function handleCreate() {
    openModal(true, {
      record: { orderId: props.orderId },
      isUpdate: false
    });
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
      deleteTableDataRecord(demoOrderDetail.id);
    }
  }

  /**
   * 批量删除
   */
  function handleBatchDelete() {
    if (selectedRowKeys.value.length > 0) {
      deleteTableDataRecord(selectedRowKeys.value);
    } else {
      createMessage.warning("请勾选要删除的数据");
    }
  }

  function reload() {
    getDemoOrderDetailList({ orderId: props.orderId }).then((res) => {
      dataSource.value = res.list;
    });
  }
  /**
   * 处理完成
   */
  function handleSuccess(values: any) {
    if (values.isUpdate) {
      updateTableDataRecord(values.record.id, values.record);
    } else {
      insertTableDataRecord(values.record);
    }
  }
  defineExpose({ reload, getDataSource });
</script>
