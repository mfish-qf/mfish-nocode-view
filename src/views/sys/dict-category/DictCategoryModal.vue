<!--
 @description: 属性分类字典
 @author: mfish
 @date: 2024-03-12
 @version: V1.3.2
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { ref, computed, unref } from "vue";
  import { BasicForm, useForm } from "@/components/general/Form/index";
  import { dictCategoryFormSchema } from "./dictCategory.data";
  import { BasicModal, useModalInner } from "@/components/general/Modal";
  import { getDictCategoryTree, insertDictCategory, updateDictCategory } from "@/api/sys/DictCategory";

  const emit = defineEmits(["success", "register"]);
  const isUpdate = ref(true);
  const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
    name: "model_form_item",
    labelWidth: 100,
    baseColProps: { span: 24 },
    schemas: dictCategoryFormSchema,
    showActionButtonGroup: false,
    autoSubmitOnEnter: true
  });
  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    resetFields().then();
    setModalProps({ confirmLoading: false, width: "600px" });
    isUpdate.value = !!data?.isUpdate;
    setTreeData().then(() => {
      if (!unref(isUpdate) && data.parentId) {
        setFieldsValue({
          parentId: data.parentId
        }).then();
      }
    });
    if (unref(isUpdate)) {
      setFieldsValue({
        ...data.record
      }).then();
    }
  });

  async function setTreeData() {
    const treeData = await getDictCategoryTree();
    await updateSchema([
      {
        field: "parentId",
        componentProps: { treeData }
      }
    ]);
  }

  const getTitle = computed(() => (unref(isUpdate) ? "编辑分类" : "新增分类"));

  async function handleSubmit() {
    const values = await validate();
    setModalProps({ confirmLoading: true });
    if (unref(isUpdate)) {
      saveDictCategory(updateDictCategory, values);
    } else {
      saveDictCategory(insertDictCategory, values);
    }
  }

  function saveDictCategory(save, values) {
    save(values)
      .then(() => {
        emit("success");
        closeModal();
      })
      .finally(() => {
        setModalProps({ confirmLoading: false });
      });
  }
</script>
