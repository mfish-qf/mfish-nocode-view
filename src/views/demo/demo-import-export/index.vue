<!--
 @description: 导入导出Demo
 @author: mfish
 @date: 2024-09-02
 @version: V2.0.0
-->
<template>
  <PageWrapper
    title="导入导出使用样例"
    content="后端提供多中导入导出方式，支持标准表格Excel导出、个性化模板Excel导出等，使用参考后端接口代码"
  >
    <BasicTable @register="registerTable">
      <template #toolbar>
        <AUpload
          name="file"
          :max-count="1"
          :show-upload-list="false"
          accept=".xls,.xlsx,.csv"
          :custom-request="handleImport"
        >
          <AButton ref="ref1" color="success" :loading="importLoading" v-auth="'demo:demoImportExport:import'">
            <ImportOutlined />
            导入
          </AButton>
        </AUpload>

        <AButton ref="ref2" color="warning" @click="handleExport" v-auth="'demo:demoImportExport:export'">
          <ExportOutlined />
          导出
        </AButton>
        <AButton color="error" @click="handleBatchDelete" v-auth="'demo:demoImportExport:delete'"> 批量删除</AButton>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:info-circle-outlined',
                onClick: handleQuery.bind(null, record),
                auth: 'demo:demoImportExport:query',
                color: 'success',
                tooltip: '查看'
              },
              {
                icon: 'ant-design:export-outlined',
                onClick: handleExportTemplate.bind(null, record),
                auth: 'demo:demoImportExport:export',
                tooltip: '模板导出样例'
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record)
                },
                auth: 'demo:demoImportExport:delete',
                tooltip: '删除'
              }
            ]"
          />
        </template>
        <template v-if="column.key === 'orderStatus'">
          <DictTag code="mall_order_status" :value="record.orderStatus" />
        </template>
        <template v-if="column.key === 'payType'">
          <DictTag code="mall_pay_type" :value="record.payType" />
        </template>
        <template v-if="column.key === 'deliveryType'">
          <DictTag code="mall_delivery_type" :value="record.deliveryType" />
        </template>
      </template>
    </BasicTable>
    <DemoImportExportModal @register="registerModal" @success="handleSuccess" />
    <DemoImportExportViewModal @register="registerViewModal" />
    <ATour style="width: 200px" :open="open" :steps="steps" @close="tourClose" />
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { BasicTable, TableAction, useTable } from "@mfish/core/components/Table";
  import {
    deleteBatchDemoImportExport,
    deleteDemoImportExport,
    exportDemo,
    exportDemoTemplateExport,
    getDemoImportExportList,
    importDemo
  } from "@/api/demo/DemoImportExport";
  import { useModal } from "@mfish/core/components/Modal";
  import DemoImportExportModal from "./DemoImportExportModal.vue";
  import DemoImportExportViewModal from "./DemoImportExportViewModal.vue";
  import { columns, searchFormSchema } from "./demoImportExport.data";
  import { DemoImportExport } from "@/api/demo/model/DemoImportExportModel";
  import { onMounted, ref } from "vue";
  import type { TourProps } from "ant-design-vue";
  import { Tour as ATour, Upload as AUpload } from "ant-design-vue";
  import { useMessage } from "@mfish/core/hooks";
  import { ExportOutlined, ImportOutlined } from "@ant-design/icons-vue";
  import { DictTag } from "@mfish/core/components/DictTag";
  import { Button as AButton } from "@mfish/core/components/Button";
  import { PageWrapper } from "@/components/general/Page";

  defineOptions({ name: "DemoImportExportManagement" });
  const [registerModal] = useModal();
  const [registerViewModal, { openModal: openViewModal }] = useModal();
  const selectedRowKeys = ref<any[]>([]);
  const importLoading = ref<boolean>(false);
  const [registerTable, { reload, getForm }] = useTable({
    title: "导入导出样例（支持通用表格导入、导出，模板导入、导出）",
    api: getDemoImportExportList,
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
      width: 150,
      title: "操作",
      dataIndex: "action"
    }
  });
  const { createMessage } = useMessage();
  const open = ref<boolean>(false);
  const ref1 = ref(null);
  const ref2 = ref(null);
  const steps: TourProps["steps"] = [
    {
      title: "导入导出引导",
      description: "学习【摸鱼低代码】-【导入导出】方法"
    },
    {
      title: "普通模板导入",
      description: "使用普通表格模板导入，后端接口查看DemoImportExportController类中generalImport方法",
      target: () => ref1.value?.$el
    },
    {
      title: "通用导出",
      description: "已普通表格方式导出Excel文件，后端接口查看DemoImportExportController类中export方法",
      target: () => ref2.value?.$el
    },
    {
      title: "模板导出",
      description: "按照定制化模板导出Excel文件，后端接口查看DemoImportExportController类中templateExport方法",
      target: () => {
        const list = document.querySelectorAll("button");
        for (const el of list) {
          if (el.getAttribute("tooltip") === "模板导出样例") {
            return el;
          }
        }
      }
    }
  ];
  onMounted(() => {
    open.value = true;
  });

  function handleImport(e) {
    importLoading.value = true;
    importDemo(e.file)
      .then(() => handleSuccess())
      .finally(() => (importLoading.value = false));
  }

  /**
   *  导出自动生成支持导出1000条可自行修改
   */
  function handleExport() {
    exportDemo({ ...getForm().getFieldsValue(), pageNum: 1, pageSize: 1000 });
  }

  function handleExportTemplate(demoImportExport: DemoImportExport) {
    exportDemoTemplateExport(demoImportExport.id);
  }

  /**
   * 查看
   * @param demoImportExport 导入导出Demo对象
   */
  function handleQuery(demoImportExport: DemoImportExport) {
    openViewModal(true, { record: demoImportExport });
  }

  /**
   * 删除
   * @param demoImportExport 导入导出Demo对象
   */
  function handleDelete(demoImportExport: DemoImportExport) {
    if (demoImportExport.id) {
      deleteDemoImportExport(demoImportExport.id).then(() => {
        handleSuccess();
      });
    }
  }

  /**
   * 批量删除
   * @param demoImportExport 导入导出Demo对象
   */
  function handleBatchDelete() {
    if (selectedRowKeys.value.length > 0) {
      deleteBatchDemoImportExport(selectedRowKeys.value.join(",")).then(() => {
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

  function tourClose() {
    open.value = false;
  }
</script>
