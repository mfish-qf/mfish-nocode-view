<!--
 @description: 系统日志
 @author: mfish
 @date: 2023-01-08
 @version: V1.0.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="查看系统日志" @ok="handleSubmit" :showOkBtn="false" cancelText="关闭">
    <!--    <BasicForm @register="registerForm" @submit="handleSubmit" />-->
    <Description
      size="middle"
      title="基础信息"
      :bordered="false"
      :column="3"
    />
    <a-divider />
    <Description
      size="middle"
      title="参数信息"
      :bordered="false"
      :column="3"
    />
  </BasicModal>
</template>
<script lang="ts">
import { ref, computed, unref } from "vue";
import { BasicForm, useForm } from "/@/components/general/Form/index";
import { sysLogFormSchema } from "./sysLog.data";
import { BasicModal, useModalInner } from "/@/components/general/Modal";
import { Description } from "/@/components/general/Description";
import { Divider } from "ant-design-vue";

export default {
  name: "SysLogModal",
  components: { BasicModal, BasicForm, Description, Divider },
  emits: ["success", "register"],
  setup() {
    const [registerForm, { resetFields, setFieldsValue }] = useForm({
      labelWidth: 100,
      baseColProps: { span: 12 },
      schemas: sysLogFormSchema,
      showActionButtonGroup: false

    });
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      resetFields().then();
      setModalProps({ confirmLoading: false, width: "40%" });
      setFieldsValue({
        ...data.record
      }).then();
    });
    const schema = [{ field: "a1", label: "取货单号" }, { field: "a2", label: "状态" }, {
      field: "a3",
      label: "销售单号"
    }, { field: "a4", label: "子订单" }];

    async function handleSubmit() {

    }


    return {
      registerModal,
      registerForm,
      handleSubmit,
      closeModal,
      schema
    };
  }
};
</script>
