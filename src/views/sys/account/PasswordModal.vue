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
  import { changePwd, pwdExist } from "@mfish/core/api";

  defineOptions({ name: "PasswordModal" });

  const [registerForm, { validate, resetFields, updateSchema, setFieldsValue }] = useForm({
    size: "large",
    baseColProps: { span: 24 },
    labelWidth: 100,
    showActionButtonGroup: false,
    schemas: formSchema,
    autoSubmitOnEnter: true
  });
  const { hasRole, SUPER_ROLE, isSuperAdmin } = usePermission();
  const [registerModal, { closeModal }] = useModalInner(async (data) => {
    resetFields().then();
    setFieldsValue(data).then();
    const exist = await pwdExist(data.userId);
    //超户重置其他用户密码时，不需要输入旧密码
    //无旧密码时，不需要输入旧密码
    if ((hasRole(SUPER_ROLE) && !isSuperAdmin(data.userId)) || !exist) {
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
