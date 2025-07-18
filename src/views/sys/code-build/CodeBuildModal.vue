<!--
 @description: 代码构建
 @author: mfish
 @date: 2023-04-11
 @version: V2.0.1
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="代码构建" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" @field-value-change="valueChange">
      <template #addDatabase>
        <a-button
          type="link"
          pre-icon="ant-design:database-outlined"
          v-if="hasPermission('sys:database:insert')"
          icon-size="16"
          @click="handleAddDb"
        >
          添加数据库
        </a-button>
      </template>
    </BasicForm>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增查询参数</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column?.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record)
                }
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
  </BasicModal>
  <DbConnectModal @register="registerDBModal" @success="addDBSuccess" />
</template>
<script lang="ts" setup>
  import { onMounted, ref, unref } from "vue";
  import { BasicForm, useForm } from "@mfish/core/components/Form";
  import { BasicTable, TableAction, useTable } from "@mfish/core/components/Table";
  import { codeBuildFormSchema, reqSearches } from "./codeBuild.data";
  import { BasicModal, useModal, useModalInner } from "@mfish/core/components/Modal";
  import { insertCodeBuild, updateCodeBuild } from "@/api/sys/CodeBuild";
  import { buildUUID } from "@mfish/core/utils/Uuid";
  import { DictItem, getDBTree, getDictItems, getFieldList } from "@mfish/core/api";
  import { getDictList } from "@/api/sys/Dict";
  import { Recordable } from "@mfish/types";
  import DbConnectModal from "@/views/sys/db-connect/DbConnectModal.vue";
  import { usePermission } from "@mfish/core/hooks";

  defineOptions({ name: "CodeBuildModal" });

  const emit = defineEmits(["success", "register"]);
  const [registerForm, { resetFields, validate, setFieldsValue, updateSchema }] = useForm({
    labelWidth: 130,
    baseColProps: { span: 12 },
    schemas: codeBuildFormSchema,
    showActionButtonGroup: false,
    autoSubmitOnEnter: true
  });
  const [registerDBModal, { openModal }] = useModal();
  const conditions: any[] = [];
  const components = ref<any[]>([]);
  const fields = ref<any[]>([]);
  const { hasPermission } = usePermission();
  const [registerTable, { deleteTableDataRecord, setTableData, getDataSource, reload }] = useTable({
    title: "查询参数列表",
    rowKey: "id",
    columns: reqSearches(conditions, fields, components),
    bordered: true,
    showIndexColumn: false,
    maxHeight: 240,
    pagination: false,
    actionColumn: {
      width: 40,
      title: "",
      dataIndex: "action"
    }
  });
  const isUpdate = ref(true);
  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    resetFields().then();
    setTableData([]);
    setModalProps({ confirmLoading: false, width: "800px" });
    isUpdate.value = !!data?.isUpdate;
    if (unref(data.isUpdate)) {
      const dbs = await getDBTree({ parentId: "" });
      const tables = await getDBTree({ parentId: data.record.connectId });
      const db = dbs.find((val) => val.code === data.record.connectId);
      const table = tables.find((val) => val.code === data.record.tableName);
      await updateSchema({
        field: "dataBase",
        componentProps: {
          displayRenderArray: [db?.label, table?.label]
        }
      });

      await getField(data.record.connectId, data.record.tableName);
      await setFieldsValue({
        dataBase: [data.record.connectId, data.record.tableName],
        ...data.record
      });
      if (data.record.queryParams) {
        const params = JSON.parse(data.record.queryParams);
        setTableData(params);
      }
      reload().then();
    }
  });
  onMounted(async () => {
    getDictItems("sys_code_condition").then((res) => {
      if (res)
        res.forEach((record) => {
          conditions.push({ label: record.dictLabel, value: record.dictValue });
        });
    });
    const comType: DictItem[] = await getDictItems("vue_com_type");
    for (const record of comType) {
      const children: any[] = [];
      if (record.dictValue === "ApiSelect") {
        const dict = await getDictList({ pageNum: 1, pageSize: 1000 });
        dict.list.forEach((record) => {
          children.push({ label: `${record.dictName}[${record.dictCode}]`, value: record.dictCode });
        });
      }
      components.value.push({ label: record.dictLabel, value: record.dictValue, children });
    }
  });

  async function handleSubmit() {
    const values = await validate();
    if (values.dataBase && values.dataBase.length === 2) {
      values.connectId = values.dataBase[0];
      values.tableName = values.dataBase[1];
    } else {
      throw new Error("请选择数据库和表!");
    }
    const data = getDataSource();
    if (data && data.length > 0) {
      const search = data.filter((item) => item.field !== undefined && item.field !== null && item.field !== "");
      values.queryParams = JSON.stringify(search);
    }
    setModalProps({ confirmLoading: true });
    try {
      await (unref(isUpdate) ? updateCodeBuild(values) : insertCodeBuild(values));
      emit("success");
      closeModal();
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }

  function valueChange(key, value) {
    if (key !== "dataBase") {
      return;
    }
    fields.value.splice(0);
    if (!value || value.length < 2) {
      return;
    }
    setTableData([]);
    getField(value[0], value[1]);
  }

  async function getField(connectId, tableName) {
    const tableNames = tableName.split(".");
    let tableSchema;
    if (tableNames.length > 1) {
      tableSchema = tableNames[0];
      tableName = tableNames[1];
    }
    const res = await getFieldList({
      connectId,
      tableSchema,
      tableName,
      pageNum: 1,
      pageSize: 10_000
    }).then();
    if (res && res.list) {
      res.list.forEach((field) => {
        fields.value.push({
          label: field.comment || field.fieldName,
          value: field.fieldName,
          items: field
        });
      });
    }
  }

  function handleCreate() {
    const value = {
      id: buildUUID(),
      field: "",
      condition: "eq",
      component: ["Input"]
    };
    getDataSource().push(value);
  }

  function handleDelete(record: Recordable) {
    deleteTableDataRecord(record.id);
  }

  function handleAddDb() {
    openModal(true, {
      isUpdate: false
    });
  }

  function addDBSuccess() {
    //改变参数强制更新
    updateSchema({
      field: "dataBase",
      componentProps: {
        initFetchParams: {
          parentId: " "
        }
      }
    });
  }
</script>
