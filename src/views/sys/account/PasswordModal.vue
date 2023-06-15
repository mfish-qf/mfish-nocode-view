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

<script lang="ts">
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { BasicForm, useForm } from "/@/components/general/Form";
  import { formSchema } from "/@/views/sys/account/pwd.data";
  import { usePermission } from "/@/hooks/web/UsePermission";
  import { changePwd } from "/@/api/sys/User";

  export default {
    name: "PasswordModal",
    components: { BasicModal, BasicForm },
    setup() {
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
        if (hasRole(SUPER_ROLE) && "1" !== data.userId) {
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

      return { registerForm, registerModal, validate, resetFields, handleSubmit };
    }
  };
</script>