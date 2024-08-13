<!--
 @description: 代码构建
 @author: mfish
 @date: 2023-04-11
 @version: V1.2.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="代码构建" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" @field-value-change="valueChange" />
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
</template>
<script lang="ts" setup>
  import { ref, onMounted, unref } from "vue";
  import { BasicForm, useForm } from "@/components/general/Form/index";
  import { BasicTable, useTable, TableAction } from "@/components/general/Table";
  import { codeBuildFormSchema, reqSearches } from "./codeBuild.data";
  import { BasicModal, useModalInner } from "@/components/general/Modal";
  import { insertCodeBuild, updateCodeBuild } from "@/api/sys/CodeBuild";
  import { buildUUID } from "@/utils/Uuid";
  import { getDictItems } from "@/api/sys/DictItem";
  import { getDBTree, getFieldList } from "@/api/sys/DbConnect";
  import { DictItem } from "@/api/sys/model/DictItemModel";
  import { getDictList } from "@/api/sys/Dict";
  import { Recordable } from "@mfish/types";

  defineOptions({ name: "CodeBuildModal" });

  const emit = defineEmits(["success", "register"]);
  const [registerForm, { resetFields, validate, setFieldsValue, updateSchema }] = useForm({
    labelWidth: 130,
    baseColProps: { span: 12 },
    schemas: codeBuildFormSchema,
    showActionButtonGroup: false,
    autoSubmitOnEnter: true
  });
  const conditions: any[] = [];
  const components = ref<any[]>([]);
  const fields = ref<any[]>([]);
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
      const params = JSON.parse(data.record.queryParams);
      setTableData(params);
      reload();
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
    const res = await getFieldList({
      connectId,
      tableName,
      pageNum: 1,
      pageSize: 10_000
    }).then();
    if (res && res.list) {
      res.list.forEach((field) => {
        fields.value.push({
          label: field.comment ? field.comment : field.fieldName,
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
</script>
