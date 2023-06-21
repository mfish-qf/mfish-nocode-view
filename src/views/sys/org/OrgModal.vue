<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
  import { ref, computed, unref } from "vue";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { BasicForm, useForm } from "/@/components/general/Form/index";
  import { formSchema } from "./org.data";
  import { getOrgTree, insertOrg, updateOrg } from "/@/api/sys/Org";
  import { getAllRoleList } from "/@/api/sys/Role";
  import { getTenantOrgTree, insertTenantOrg, updateTenantOrg } from "/@/api/sys/SsoTenant";

  export default {
    name: "OrgModal",
    components: { BasicModal, BasicForm },
    props: {
      source: {
        type: Number,
        default: null
      }
    },
    emits: ["success", "register"],
    setup(props, { emit }) {
      const isUpdate = ref(true);

      const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: formSchema,
        autoSubmitOnEnter: true,
        showActionButtonGroup: false
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields().then();
        tenantDisabled(false);
        setModalProps({ confirmLoading: false, width: "800px" });
        isUpdate.value = !!data?.isUpdate;
        let treeData;
        if (props.source == 1) {
          treeData = await getTenantOrgTree();
        } else {
          treeData = await getOrgTree();
        }
        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record
          }).then();
          //如果是租户组织，不允许在此界面修改名称、编码等属性
          if (data.record.tenantId) {
            tenantDisabled(true);
          }
        }
        const roles = await getAllRoleList();
        const options = roles.reduce((prev, next: Recordable) => {
          if (next) {
            if (next["id"] !== "1") {
              prev.push({
                label: next["roleName"],
                value: next["id"]
              });
            }
          }
          return prev;
        }, [] as any);
        updateSchema([
          {
            field: "parentId",
            componentProps: { treeData }
          },
          {
            field: "roleIds",
            componentProps: { options, optionFilterProp: "label" }
          }
        ]).then();
      });

      function tenantDisabled(disabled) {
        updateSchema([
          {
            field: "orgName",
            dynamicDisabled: disabled
          },
          {
            field: "orgFixCode",
            dynamicDisabled: disabled
          },
          {
            field: "parentId",
            dynamicDisabled: disabled
          }
        ]).then();
      }

      const getTitle = computed(() => (!unref(isUpdate) ? "新增组织" : "编辑组织"));

      async function handleSubmit() {
        const values = await validate();
        values.clientId = "system";
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          if (props.source == 1) {
            saveOrg(updateTenantOrg, values);
          } else {
            saveOrg(updateOrg, values);
          }
        } else {
          if (props.source == 1) {
            saveOrg(insertTenantOrg, values);
          } else {
            saveOrg(insertOrg, values);
          }
        }
        emit("success");
      }

      function saveOrg(save, values) {
        save(values)
          .then(() => {
            emit("success");
            closeModal();
          })
          .finally(() => {
            setModalProps({ confirmLoading: false });
          });
      }

      return { registerModal, registerForm, getTitle, handleSubmit };
    }
  };
</script>
