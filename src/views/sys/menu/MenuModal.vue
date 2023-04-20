<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" @field-value-change="valueChange" />
  </BasicModal>
</template>
<script lang="ts">
import { ref, computed, unref } from "vue";
import { BasicForm, useForm } from "/@/components/general/Form/index";
import { formSchema } from "./menu.data";
import { BasicModal, useModalInner } from "/@/components/general/Modal";
import { getMenuList, insertMenu, updateMenu } from "/@/api/sys/Menu";
import { MenuListItem, MenuParams, MenuType } from "/@/api/sys/model/MenuModel";

export default {
  name: "MenuModal",
  components: { BasicModal, BasicForm },
  emits: ["success", "register"],
  setup(_, { emit }) {
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
      valueChange("menuType", !data.record ? MenuType.目录 : data.record.menuType);
      if (unref(isUpdate)) {
        setFieldsValue({
          ...data.record
        }).then();
      }
    });
    const getTitle = computed(() => (!unref(isUpdate) ? "新增菜单" : "编辑菜单"));

    async function setTreeData(params?: MenuParams) {
      const treeData = await getMenuList(params);
      const menuData = await getMenuList({ menuType: MenuType.菜单 });
      updateSchema([{
        field: "parentId",
        componentProps: { treeData }
      }, {
        field: "activeMenu",
        componentProps: { treeData: menuData }
      }]).then();
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
      //菜单类型为目录时，查询目录级别菜单
      //其他类型查询上级目录菜单
      if (value === 0) {
        value = 1;
      }
      setTreeData({ "menuType": --value });
    }

    async function handleSubmit() {
      let values = (await validate()) as MenuListItem;
      values.clientId = "system";
      setModalProps({ confirmLoading: true });
      if (unref(isUpdate)) {
        saveMenu(updateMenu, values);
      } else {
        saveMenu(insertMenu, values);
      }
    }

    function saveMenu(save, values) {
      save(values).then(() => {
        emit("success", { isUpdate: unref(isUpdate), values: { ...values } });
        closeModal();
      }).finally(() => {
        setModalProps({ confirmLoading: false });
      });
    }

    return { registerModal, registerForm, getTitle, handleSubmit, valueChange };
  }
};
</script>
