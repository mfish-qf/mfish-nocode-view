<!--
 @description: 上传下载Demo
 @author: mfish
 @date: 2024-09-08
 @version: V2.1.1
-->
<template>
  <PageWrapper
    title="上传下载使用样例"
    content="此处单个为文件上传、下载、展示样例（批量文件上传参考文件管理模块），支持多种类型文件。"
  >
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:alipay-circle-outlined',
                color: '#1677FF',
                onClick: handleUp.bind(null, record),
                tooltip: '上传支付凭证（render方式）'
              },
              {
                icon: 'ant-design:picture-outlined',
                onClick: handleUpPic.bind(null, record),
                tooltip: '上传图片'
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <DemoUpModal @register="registerModal" @close="handleSuccess" />
    <DemoUpPicModal @register="registerPicModal" @close="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { BasicTable, TableAction, useTable } from "@mfish/core/components/Table";
  import { columns, searchFormSchema } from "./demoUpDown.data";
  import { PageWrapper } from "@/components/general/Page";
  import { getDemoImportExportList } from "@/api/demo/DemoImportExport";
  import DemoUpModal from "@/views/demo/demo-up-down/DemoUpModal.vue";
  import { useModal } from "@mfish/core/components/Modal";
  import DemoUpPicModal from "@/views/demo/demo-up-down/DemoUpPicModal.vue";

  defineOptions({ name: "DemoUpDownManagement" });
  const [registerTable, { reload }] = useTable({
    title: "上传下载样例",
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
    actionColumn: {
      width: 150,
      title: "操作",
      dataIndex: "action"
    }
  });
  const [registerModal, { openModal }] = useModal();
  const [registerPicModal, { openModal: openPicModal }] = useModal();

  function handleUp(record: any) {
    openModal(true, {
      record,
      isUpdate: true
    });
  }

  function handleSuccess() {
    reload();
  }

  function handleUpPic(record: any) {
    openPicModal(true, {
      record,
      isUpdate: true
    });
  }
</script>
