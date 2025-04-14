<!--
 @description: 自定义API
 @author: mfish
 @date: 2023-07-28
 @version: V2.0.0
-->
<template>
  <div style="height: 100%">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <div style="margin-top: 2px; width: 100%; display: flex; justify-content: space-between">
          <AButton type="primary" @click="handleCreate" v-auth="'sys:mfApi:insert'" pre-icon="ant-design:plus-outlined">
            新建API
          </AButton>
          <InputSearch placeholder="输入API名称" @search="onSearch" style="width: 260px" allow-clear />
        </div>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'carbon:folder-move-to',
                color: 'blue',
                onClick: handleMove.bind(null, record),
                auth: 'sys:mfApi:update',
                tooltip: '移动',
                ifShow: record.fType === 1
              },
              {
                icon: 'ant-design:copy-outlined',
                color: '#1677ff',
                onClick: handleClone.bind(null, record),
                auth: 'sys:mfApi:insert',
                tooltip: '克隆',
                ifShow: record.fType === 1
              },
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:mfApi:update',
                tooltip: '修改',
                ifShow: record.fType === 1
              },
              {
                icon: 'ant-design:bug-outlined',
                onClick: handleTest.bind(null, record),
                auth: 'sys:mfApi:query',
                color: 'warning',
                tooltip: '测试',
                ifShow: record.fType === 1
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record)
                },
                auth: 'sys:mfApi:delete',
                tooltip: '删除'
              }
            ]"
          />
        </template>
        <template v-if="column.key === 'name'">
          <div style="display: flex; align-items: center; cursor: pointer" @click="folderClick(record)">
            <Icon icon="carbon:api-1" v-if="record?.fType === 1" :color="iconColor" />
            <FolderTwoTone v-else :two-tone-color="iconColor" />
            <ATooltip :title="record.remark">
              <div style="margin-left: 12px">{{ record?.name }}</div>
            </ATooltip>
          </div>
        </template>
        <template v-if="column.key === 'paramFlag' && record.fType === 1">
          <APopover
            v-if="record.paramFlag === 1"
            title="参数列表"
            :overlay-class-name="`${prefixCls}-popover`"
            @open-change="popVisibleChange($event, record.id)"
          >
            <template #content>
              <AList size="small" item-layout="horizontal" :data-source="paramMap.get(record.id)">
                <template #renderItem="{ item }">
                  <AList.Item>
                    <AList.Item.Meta :description="item.remark">
                      <template #title>
                        <div style="display: flex; justify-content: space-between; align-items: center">
                          <div>{{ item.name }}</div>
                          <ATag :color="item.required === 1 ? 'processing' : ''" style="margin-left: 6px">
                            {{ item.required === 1 ? "必须" : "非必须" }}
                          </ATag>
                        </div>
                      </template>
                    </AList.Item.Meta>
                  </AList.Item>
                </template>
              </AList>
            </template>
            <ATag color="processing"> 有参</ATag>
          </APopover>
          <ATag v-else color="default"> 无参</ATag>
        </template>
      </template>
    </BasicTable>
    <ApiDataSourceModal @register="registerModal" @api-create="file2api">
      <template #button="{ data }">
        <AButton type="primary" @click="dataBase2api(data)" v-auth="'sys:mfApi:insert'" pre-icon="carbon:api-1">
          新建API
        </AButton>
      </template>
    </ApiDataSourceModal>
    <ApiTestModal @register="registerApiTestModal" />
    <FolderMoveModal
      @register="registerApiMoveModal"
      @success="moveSuccess"
      :move-handle="updateMfApi"
      :api="getApiFolderTree"
    />
  </div>
</template>
<script lang="ts" setup>
  import { onMounted, onUnmounted, ref, toRaw, watch } from "vue";
  import { BasicTable, useTable, TableAction, PaginationProps } from "@mfish/core/src/components/Table";
  import {
    deleteMfApi,
    updateMfApi,
    getApiFolderAndFile,
    getApiFolderTree,
    ApiFolderVo,
    API_SAVE,
    getApiParamsList,
    ApiParams
  } from "@mfish/nocode";
  import { Popover as APopover, Tag as ATag, Tooltip as ATooltip, List as AList } from "ant-design-vue";
  import { Icon } from "@mfish/core/src/components/Icon";
  import { useRootSetting } from "@mfish/core";
  import { columns } from "@/views/nocode/api-folder/apiFolder.data";
  import { useModal } from "@mfish/core/src/components/Modal";
  import { router } from "@mfish/core/src/router";
  import { useDesign } from "@mfish/core";
  import ApiTestModal from "@/views/nocode/api-folder/ApiTestModal.vue";
  import FolderMoveModal from "./FolderMoveModal.vue";
  import ApiDataSourceModal from "./ApiDataSourceModal.vue";
  import { FolderTwoTone } from "@ant-design/icons-vue";
  import { useOutsideOpen } from "@mfish/core/src/utils/OutsideOpenUtils";
  import InputSearch from "@mfish/core/src/components/InputSearch";

  const props = defineProps({
    folderId: { type: String, default: "" },
    allowCheck: { type: Boolean, default: false }
  });
  const emit = defineEmits(["folderClick", "folderDelete", "rowSelect"]);

  const iconColor = useRootSetting().getThemeColor;
  const [registerModal, { openModal, closeModal }] = useModal();
  const paramMap = ref<Map<string, ApiParams[]>>(new Map());
  const configUrl = "/low-code/mf-api/config";
  const [registerApiTestModal, { openModal: openApiTestModal }] = useModal();
  const [registerApiMoveModal, { openModal: openApiMoveModal }] = useModal();
  watch(
    () => props.folderId,
    () => {
      onSearch();
    }
  );
  const { prefixCls } = useDesign("api-folder");
  onMounted(() => {
    onSearch();
    if (props.allowCheck) {
      setProps({
        rowSelection: {
          type: "radio",
          fixed: "left",
          columnWidth: 30,
          onChange: (_, rows) => {
            if (rows && rows.length > 0 && rows[0].fType === 1) {
              emit("rowSelect", toRaw(rows[0]));
            } else {
              emit("rowSelect", null);
            }
          }
        }
      });
    }
    globalThis.addEventListener("storage", onStorageHandle);
  });
  onUnmounted(() => {
    globalThis.removeEventListener("storage", onStorageHandle);
  });
  const [registerTable, { reload, getPaginationRef, setPagination, setProps }] = useTable({
    title: "",
    columns,
    rowKey: "id",
    useSearchForm: false,
    showTableSetting: false,
    bordered: true,
    showIndexColumn: false,
    canResize: true,
    actionColumn: {
      width: 150,
      title: "操作",
      dataIndex: "action"
    }
  });
  const { open } = useOutsideOpen(API_SAVE, onStorageHandle);

  /**
   * 新建
   */
  function handleCreate() {
    openModal(true);
  }

  /**
   * 通过数据库创建API
   * @param data
   */
  function dataBase2api(data) {
    if (!data.key) return;
    const values = data.key.split(",");
    if (values?.length < 1) return;
    const sourceId = values[0];
    const routeData = router.resolve({
      path: configUrl,
      query: { sourceId, tableName: data.tableName, tableSchema: data.tableSchema, sourceType: 0 }
    });
    apiCreate(routeData);
  }

  /**
   * 通过文件创建API
   * @param data
   */
  function file2api(data) {
    if (!data.key) return;
    const routeData = router.resolve({
      path: configUrl,
      query: { sourceId: data.id, tableName: data.name, sourceType: 1 }
    });
    apiCreate(routeData);
  }

  function apiCreate(routeData) {
    open(routeData);
    closeModal();
  }

  function onStorageHandle() {
    reload();
  }

  /**
   * 修改
   * @param folderVo
   */
  function handleEdit(folderVo: ApiFolderVo) {
    const routeData = router.resolve({
      path: configUrl,
      query: { configId: folderVo.id }
    });
    open(routeData);
  }

  function handleClone(folderVo: ApiFolderVo) {
    const routeData = router.resolve({
      path: configUrl,
      query: { configId: folderVo.id, folderId: folderVo.parentId }
    });
    open(routeData);
  }

  function handleTest(folderVo: ApiFolderVo) {
    openApiTestModal(true, folderVo);
  }

  /**
   * 删除
   * @param folderVo
   */
  function handleDelete(folderVo: ApiFolderVo) {
    if (folderVo.fType === 0) {
      emit("folderDelete", folderVo, (res) => {
        if (res) {
          reload();
        }
      });
      return;
    }
    if (folderVo.id) {
      deleteMfApi(folderVo.id).then(() => {
        handleSuccess();
      });
    }
  }

  function handleMove(folderVo: ApiFolderVo) {
    openApiMoveModal(true, folderVo);
  }

  /**
   * 处理完成
   */
  function handleSuccess() {
    onSearch();
  }

  function onSearch(name?: string) {
    setPagination({ current: 1 });
    setProps({
      api: () =>
        getApiFolderAndFile({
          parentId: name ? undefined : props.folderId,
          name: name || undefined,
          pageNum: (getPaginationRef() as PaginationProps).current,
          pageSize: (getPaginationRef() as PaginationProps).pageSize
        })
    });
    reload();
  }

  function folderClick(record: ApiFolderVo) {
    if (record.fType === 0) {
      emit("folderClick", record);
      return;
    }
    //允许行选择时，点击不弹出测试页面
    if (props.allowCheck) return;
    handleTest(record);
  }

  function popVisibleChange(e, apiId: string) {
    if (e) {
      getApiParams(apiId).then();
    }
  }

  async function getApiParams(apiId: string) {
    if (!paramMap.value.has(apiId)) {
      const params = await getApiParamsList({ apiId, isUse: 1 });
      paramMap.value.set(apiId, params.list);
    }
  }

  function moveSuccess() {
    reload();
  }
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-api-folder";
  .@{prefix-cls} {
    &-popover {
      .ant-popover-inner-content {
        padding: 0;
      }
    }
  }
</style>
