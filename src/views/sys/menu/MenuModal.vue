<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" @field-value-change="valueChange" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { computed, ref, unref } from "vue";
  import { BasicForm, useForm } from "@mfish/core/components/Form";
  import { formSchema } from "./menu.data";
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { getMenuList, insertMenu, MenuListItem, MenuType, updateMenu } from "@mfish/core/api";

  const emit = defineEmits(["success", "register"]);
  const isUpdate = ref(true);
  const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
    labelWidth: 100,
    schemas: formSchema,
    showActionButtonGroup: false,
    baseColProps: { span: 12 },
    autoSubmitOnEnter: true
  });
  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    await resetFields();
    setModalProps({ confirmLoading: false, width: "800px" });
    isUpdate.value = !!data?.isUpdate;
    valueChange("menuType", data.record ? data.record.menuType : MenuType.目录);
    if (unref(isUpdate)) {
      setFieldsValue({
        ...data.record
      }).then();
    }
  });
  const getTitle = computed(() => (unref(isUpdate) ? "编辑菜单" : "新增菜单"));

  async function setTreeData(type: MenuType) {
    // 菜单类型为目录时，查询目录级别菜单
    // 其他类型查询上级目录菜单

    const treeData = await (type === MenuType.目录
      ? getMenuList({ menuType: MenuType.目录 })
      : getMenuList({ menuType: type - 1 }));
    let menuData;
    if (type === MenuType.菜单) {
      menuData = await getMenuList({ menuType: MenuType.菜单 });
    }
    updateSchema([
      {
        field: "parentId",
        componentProps: { treeData }
      },
      {
        field: "activeMenu",
        componentProps: { treeData: menuData }
      }
    ]).then();
  }

  /**
   * 过滤不同类型树层级
   * @param key
   * @param value
   */
  function valueChange(key, value) {
    if (key !== "menuType") {
      return;
    }
    setTreeData(value);
  }

  async function handleSubmit() {
    const values = (await validate()) as MenuListItem;
    setModalProps({ confirmLoading: true });
    if (unref(isUpdate)) {
      saveMenu(updateMenu, values);
    } else {
      saveMenu(insertMenu, values);
    }
  }

  function saveMenu(save, values) {
    save(values)
      .then(() => {
        emit("success", { isUpdate: unref(isUpdate), values: { ...values } });
        closeModal();
      })
      .finally(() => {
        setModalProps({ confirmLoading: false });
      });
  }
</script>
