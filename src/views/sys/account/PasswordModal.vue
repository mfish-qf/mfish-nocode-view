<!--
 @description: 修改密码窗体
 @author: mfish
 @date: 2022/12/21 15:58
-->
<template>
  <BasicModal title="修改密码" @register="registerModal" @ok="handleSubmit">
    <div class="py-8 bg-white flex flex-col justify-center items-center">
      <BasicForm @register="registerForm" @submit="handleSubmit" />
    </div>
    <template #centerFooter>
      <a-button @click="resetFields">重置</a-button>
    </template>
  </BasicModal>
</template>

<script lang="ts" setup>
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { BasicForm, useForm } from "@mfish/core/components/Form";
  import { formSchema } from "@/views/sys/account/pwd.data";
  import { usePermission } from "@mfish/core/hooks";
  import { changePwd } from "@mfish/core/api";

  defineOptions({ name: "PasswordModal" });

  const [registerForm, { validate, resetFields, updateSchema, setFieldsValue }] = useForm({
    size: "large",
    baseColProps: { span: 24 },
    labelWidth: 100,
    showActionButtonGroup: false,
    schemas: formSchema,
    autoSubmitOnEnter: true
  });
  const { hasRole, SUPER_ROLE } = usePermission();
  const [registerModal, { closeModal }] = useModalInner((data) => {
    resetFields().then();
    setFieldsValue(data).then();
    // 是超户，不需要
    if (hasRole(SUPER_ROLE) && data.userId !== "1") {
      updateSchema([
        {
          field: "oldPwd",
          ifShow: false
        }
      ]).then();
    } else {
      updateSchema([
        {
          field: "oldPwd",
          ifShow: true
        }
      ]).then();
    }
  });

  async function handleSubmit() {
    const values = await validate();
    const { userId, oldPwd, newPwd } = values;
    changePwd({ userId, oldPwd, newPwd }).then(() => {
      closeModal();
    });
  }
</script>
