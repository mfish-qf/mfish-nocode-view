<!--
 @description: 数据库连接
 @author: mfish
 @date: 2023-03-13
 @version: V1.0.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <Tabs tab-position="left">
      <TabPane key="1" tab="基础属性">
        <BasicForm @register="registerForm" @submit="handleSubmit" />
      </TabPane>
      <TabPane key="2" tab="连接池配置项">

      </TabPane>
    </Tabs>

  </BasicModal>
</template>
<script lang="ts">
import { ref, computed, unref } from "vue";
import { BasicForm, useForm } from "/@/components/general/Form/index";
import { dbConnectFormSchema } from "./dbConnect.data";
import { BasicModal, useModalInner } from "/@/components/general/Modal";
import { insertDbConnect, updateDbConnect } from "/@/api/sys/DbConnect";
import { Tabs } from "ant-design-vue";

export default {
  name: "DbConnectModal",
  components: { BasicModal, BasicForm, Tabs, TabPane: Tabs.TabPane },
  emits: ["success", "register"],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
      labelWidth: 100,
      baseColProps: { span: 24 },
      schemas: dbConnectFormSchema,
      showActionButtonGroup: false,
      autoSubmitOnEnter: true
    });
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      resetFields().then();
      setModalProps({ confirmLoading: false, width: "600px" });
      isUpdate.value = !!data?.isUpdate;
      if (unref(isUpdate)) {
        setFieldsValue({
          ...data.record
        }).then();
      }
    });
    const getTitle = computed(() => (!unref(isUpdate) ? "新增数据库连接" : "编辑数据库连接"));

    async function handleSubmit() {
      let values = await validate();
      setModalProps({ confirmLoading: true });
      if (unref(isUpdate)) {
        saveDbConnect(updateDbConnect, values);
      } else {
        saveDbConnect(insertDbConnect, values);
      }
    }

    function saveDbConnect(save, values) {
      save(values).then(() => {
        emit("success");
        closeModal();
      }).finally(() => {
        setModalProps({ confirmLoading: false });
      });
    }

    return {
      registerModal,
      registerForm,
      getTitle,
      handleSubmit
    };
  }
};
</script>
