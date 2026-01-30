<!--
 @description: 组件基础信息
 @author: mfish
 @date: 2024-11-19
 @version: V2.2.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <AButton type="primary" @click="handleCreate" v-auth="'nocode:screenCharts:insert'">新增</AButton>
        <AButton color="warning" @click="handleExport" v-auth="'nocode:screenCharts:export'">导出</AButton>
        <AButton color="error" @click="handleBatchDelete" v-auth="'nocode:screenCharts:delete'">批量删除</AButton>
        <Upload
          multiple
          accept="image/*"
          v-auth="'nocode:screenCharts:update'"
          :show-upload-list="false"
          v-model:file-list="fileList"
          :custom-request="customRequest"
          @change="handleChange"
        >
          <ATooltip title="导入组件图片，可以多选图片进行批量导入">
            <AButton type="primary" pre-icon="ant-design:upload-outlined" :loading="uploadLoading">
              导入图片资源
            </AButton>
          </ATooltip>
        </Upload>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:info-circle-outlined',
                onClick: handleQuery.bind(null, record),
                auth: 'nocode:screenCharts:query',
                color: 'success',
                tooltip: '查看'
              },
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'nocode:screenCharts:update',
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
                auth: 'nocode:screenCharts:delete',
                tooltip: '删除'
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <ScreenChartsModal @register="registerModal" @success="handleSuccess" />
    <ScreenChartsViewModal @register="registerViewModal" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, TableAction, useTable } from "@mfish/core/components/Table";
  import {
    deleteBatchScreenCharts,
    deleteScreenCharts,
    exportScreenCharts,
    getScreenChartsList,
    ScreenCharts,
    updatePic
  } from "@mfish/nocode";
  import { Tooltip as ATooltip, Upload } from "ant-design-vue";
  import { useModal } from "@mfish/core/components/Modal";
  import ScreenChartsModal from "./ScreenChartsModal.vue";
  import ScreenChartsViewModal from "./ScreenChartsViewModal.vue";
  import { columns, searchFormSchema } from "./screenCharts.data";
  import { ref } from "vue";
  import { useMessage } from "@mfish/core/hooks";
  import { Button as AButton } from "@mfish/core/components/Button";
  import { uploadApi } from "@mfish/core/api";

  defineOptions({ name: "ScreenChartsManagement" });
  const [registerModal, { openModal }] = useModal();
  const [registerViewModal, { openModal: openViewModal }] = useModal();
  const selectedRowKeys = ref<any[]>([]);
  const uploadLoading = ref(false);
  const [registerTable, { reload, getForm }] = useTable({
    title: "组件管理列表",
    api: getScreenChartsList,
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
  const fileList = ref([]);
  const picList: { fileKey: string; fileName: string }[] = [];
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
    exportScreenCharts({ ...getForm().getFieldsValue(), pageNum: 1, pageSize: 1000 });
  }

  /**
   * 查看
   * @param screenCharts 组件基础信息对象
   */
  function handleQuery(screenCharts: ScreenCharts) {
    openViewModal(true, { record: screenCharts });
  }

  /**
   * 修改
   * @param screenCharts 组件基础信息对象
   */
  function handleEdit(screenCharts: ScreenCharts) {
    openModal(true, {
      record: screenCharts,
      isUpdate: true
    });
  }

  /**
   * 删除
   * @param screenCharts 组件基础信息对象
   */
  function handleDelete(screenCharts: ScreenCharts) {
    if (screenCharts.id) {
      deleteScreenCharts(screenCharts.id).then(() => {
        handleSuccess();
      });
    }
  }

  /**
   * 批量删除
   */
  function handleBatchDelete() {
    if (selectedRowKeys.value.length > 0) {
      deleteBatchScreenCharts(selectedRowKeys.value.join(",")).then(() => {
        handleSuccess();
      });
    } else {
      createMessage.warning("请勾选要删除的数据");
    }
  }

  /**
   * 自定义上传
   * @param e 事件对象
   */
  function customRequest(e: any) {
    uploadLoading.value = true;
    uploadApi({ file: e.file, path: "screen/charts" }, (_) => {})
      .then((res) => {
        picList.push({ fileKey: res.fileKey, fileName: res.fileName });
        e.onSuccess(res, e);
      })
      .catch((error) => {
        e.onError(error);
      })
      .finally(() => (uploadLoading.value = false));
  }

  /**
   * 上传完成后处理
   * @param e 事件对象
   */
  function handleChange(e: any) {
    if (e.fileList.length !== picList.length) {
      return;
    }
    uploadLoading.value = true;
    updatePic(picList)
      .then(() => {
        handleSuccess();
      })
      .finally(() => {
        fileList.value.length = 0;
        picList.length = 0;
        uploadLoading.value = false;
      });
  }

  /**
   * 处理完成
   */
  function handleSuccess() {
    reload();
  }
</script>
