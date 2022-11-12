<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
import { defineComponent, ref, computed, unref } from "vue";
import { BasicForm, useForm } from "/@/components/Form/index";
import { formSchema } from "./menu.data";
import { BasicModal, useModalInner } from "/@/components/Modal";
import { getMenuTree, insertMenu, updateMenu } from "/@/api/sys/Menu";
import { MenuListItem } from "/@/api/sys/model/MenuModel";

export default defineComponent({
  name: "MenuDrawer",
  components: { BasicModal, BasicForm },
  emits: ["success", "register"],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
      labelWidth: 100,
      schemas: formSchema,
      showActionButtonGroup: false,
      baseColProps: { lg: 12, md: 24 }
    });
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      await resetFields();
      setModalProps({ confirmLoading: false, width: "40%" });
      isUpdate.value = !!data?.isUpdate;
      if (unref(isUpdate)) {
        setFieldsValue({
          ...data.record
        }).then();
      }
      const treeData = await getMenuTree();
      updateSchema({
        field: "parentId",
        componentProps: { treeData }
      }).then();
    });
    const getTitle = computed(() => (!unref(isUpdate) ? "新增菜单" : "编辑菜单"));

    async function handleSubmit() {
      try {
        let values = (await validate()) as MenuListItem;
        values.clientId = "system";
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveMenu(updateMenu, values);
        } else {
          saveMenu(insertMenu, values);
        }
      } finally {
        setModalProps({ confirmLoading: false });
      }
    }

    function saveMenu(save, values) {
      save(values).then(() => {
        emit("success");
      }).finally(() => {
          closeModal();
        }
      );
    }

    return { registerModal, registerForm, getTitle, handleSubmit };
  }
});
</script>
