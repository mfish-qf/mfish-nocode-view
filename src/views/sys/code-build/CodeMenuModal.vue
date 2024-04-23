<!--
 @description: 根据代码创建菜单
 @author: mfish
 @date: 2024/4/22
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="创建菜单" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script setup lang="ts">
  import { BasicForm, useForm } from "/@/components/general/Form";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { MenuListItem, MenuType } from "/@/api/sys/model/MenuModel";
  import { getMenuList } from "/@/api/sys/Menu";
  import { codeCreateMenu } from "/@/api/sys/CodeBuild";
  import { ref } from "vue";
  const [registerForm, { resetFields, validate }] = useForm({
    labelWidth: 100,
    schemas: [
      {
        field: "parentId",
        label: "上级目录",
        component: "ApiTreeSelect",
        componentProps: {
          api: getMenuList,
          params: { menuType: MenuType.目录 },
          fieldNames: {
            label: "menuName",
            key: "id",
            value: "id"
          },
          getPopupContainer: () => document.body
        }
      }
    ],
    showActionButtonGroup: false,
    baseColProps: { span: 24 },
    autoSubmitOnEnter: true
  });
  const id = ref<string>();
  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    await resetFields();
    setModalProps({ confirmLoading: false, width: "600px" });
    id.value = data.id;
  });

  async function handleSubmit() {
    let values = (await validate()) as MenuListItem;
    setModalProps({ confirmLoading: true });
    debugger;
    try {
      await codeCreateMenu({ ...values, id: id.value });
      closeModal();
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }
</script>
<style scoped lang="less"></style>
