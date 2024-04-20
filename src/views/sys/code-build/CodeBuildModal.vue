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
  import { h, ref, onMounted } from "vue";
  import { Select, Cascader } from "ant-design-vue";
  import { BasicForm, useForm } from "/@/components/general/Form/index";
  import { BasicTable, useTable, TableAction, BasicColumn } from "/@/components/general/Table";
  import { codeBuildFormSchema } from "./codeBuild.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { insertCodeBuild } from "/@/api/sys/CodeBuild";
  import { buildUUID } from "/@/utils/Uuid";
  import { getDictItems } from "/@/api/sys/DictItem";
  import { getFieldList } from "/@/api/sys/DbConnect";
  import { DictItem } from "/@/api/sys/model/DictItemModel";
  import { getDictList } from "/@/api/sys/Dict";

  defineOptions({ name: "CodeBuildModal" });

  const emit = defineEmits(["success", "register"]);
  const [registerForm, { resetFields, validate }] = useForm({
    labelWidth: 130,
    baseColProps: { span: 12 },
    schemas: codeBuildFormSchema,
    showActionButtonGroup: false,
    autoSubmitOnEnter: true
  });
  const [registerModal, { setModalProps, closeModal }] = useModalInner(async () => {
    resetFields().then();
    setTableData([]);
    setModalProps({ confirmLoading: false, width: "800px" });
  });
  const conditions: any[] = [];
  const components = ref<any[]>([]);
  const fields = ref<any[]>([]);
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
          children.push({ label: record.dictName + "[" + record.dictCode + "]", value: record.dictCode });
        });
      }
      components.value.push({ label: record.dictLabel, value: record.dictValue, children });
    }
  });
  const reqSearches: BasicColumn[] = [
    {
      dataIndex: "id",
      ifShow: false
    },
    {
      title: "查询条件",
      dataIndex: "condition",
      width: 120,
      customRender: ({ record }) => {
        return h(Select, {
          options: conditions,
          placeholder: "选择查询条件",
          style: { width: "100px" },
          defaultValue: "eq",
          onChange(e) {
            record.condition = e;
          }
        });
      }
    },
    {
      title: "字段",
      dataIndex: "field",
      customRender: ({ record }) => {
        return h(Select, {
          options: fields.value,
          placeholder: "选择查询字段",
          style: { width: "200px" },
          showSearch: true,
          labelInValue: true,
          optionFilterProp: "label",
          onChange(e: any) {
            record.field = e.value;
          }
        });
      }
    },
    {
      title: "组件",
      dataIndex: "field",
      customRender: ({ record }) => {
        return h(Cascader, {
          options: components.value,
          placeholder: "选择组件",
          style: { width: "200px" },
          defaultValue: ["Input"],
          showSearch: true,
          onChange(e) {
            record.component = e;
          }
        });
      }
    }
  ];
  const [registerTable, { deleteTableDataRecord, setTableData, getDataSource }] = useTable({
    title: "查询参数列表",
    rowKey: "id",
    columns: reqSearches,
    bordered: true,
    showIndexColumn: false,
    maxHeight: 200,
    pagination: false,
    actionColumn: {
      width: 40,
      title: "",
      dataIndex: "action"
    }
  });

  async function handleSubmit() {
    let values = await validate();
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
    insertCodeBuild(values)
      .then(() => {
        emit("success");
        closeModal();
      })
      .finally(() => {
        setModalProps({ confirmLoading: false });
      });
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
    getFieldList({
      connectId: value[0],
      tableName: value[1],
      pageNum: 1,
      pageSize: 10000
    }).then((res) => {
      if (res && res.list) {
        res.list.forEach((field) => {
          fields.value.push({
            label: field.comment ? field.comment : field.fieldName,
            value: field.fieldName,
            items: field
          });
        });
      }
    });
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
