<template>
  <BasicModal v-bind="$attrs" @register="registerModal" showFooter :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit">
      <template #menus="{ model, field }">
        <BasicTree
          v-model:value="model[field]"
          :treeData="treeData"
          search
          :fieldNames="{ title: 'menuName', key: 'id' }"
          :clickRowToExpand="true"
          checkable
          toolbar
          title="菜单分配"
        />
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts">
import { ref, computed, unref } from "vue";
import { BasicForm, useForm } from "/@/components/Form/index";
import { formSchema } from "./role.data";
import { BasicModal, useModalInner } from "/@/components/Modal";
import { BasicTree, TreeItem } from "/@/components/Tree";
import { getMenuTree } from "/@/api/sys/Menu";
import { MenuListItem } from "/@/api/sys/model/MenuModel";
import { insertRole, updateRole } from "/@/api/sys/Role";

export default {
  name: "RoleModal",
  components: { BasicModal, BasicForm, BasicTree },
  emits: ["success", "register"],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const treeData = ref<TreeItem[]>([]);
    const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
      labelWidth: 100,
      baseColProps: { span: 12 },
      schemas: formSchema,
      showActionButtonGroup: false,
      autoSubmitOnEnter: true
    });
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      resetFields().then();
      setModalProps({ confirmLoading: false, width: "40%" });
      // 需要在setFieldsValue之前先填充treeData，否则Tree组件可能会报key not exist警告
      if (unref(treeData).length === 0) {
        treeData.value = (await getMenuTree()) as any as TreeItem[];
      }
      isUpdate.value = !!data?.isUpdate;
      if (unref(isUpdate)) {
        setFieldsValue({
          ...data.record
        }).then();
        // 超户不允许修改roleName,roleCode
        if (data.record.id === "1") {
          disableInput(true);
          return;
        }
      }
      disableInput(false);

      function disableInput(disable) {
        updateSchema([{
          field: "roleName",
          dynamicDisabled: disable
        }, {
          field: "roleCode",
          dynamicDisabled: disable
        }]).then();
      }
    });
    const getTitle = computed(() => (!unref(isUpdate) ? "新增角色" : "编辑角色"));

    async function handleSubmit() {
      try {
        let values = (await validate()) as MenuListItem;
        values.clientId = "system";
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveRole(updateRole, values);
        } else {
          saveRole(insertRole, values);
        }
      } finally {
        setModalProps({ confirmLoading: false });
      }
    }

    function saveRole(save, values) {
      save(values).then(() => {
        emit("success");
        closeModal();
      });
    }

    return {
      registerModal,
      registerForm,
      getTitle,
      handleSubmit,
      treeData
    };
  }
};
</script>
