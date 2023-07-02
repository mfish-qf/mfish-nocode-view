<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit">
      <template #parentId>
        <TreeSelect
          v-model:value="curOrg"
          show-search
          allow-clear
          treeNodeFilterProp="orgName"
          :tree-data="treeData"
          :fieldNames="fieldNames"
          @change="orgChange"
        />
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts">
  import { ref, computed, unref } from "vue";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { BasicForm, useForm } from "/@/components/general/Form/index";
  import { formSchema } from "./org.data";
  import { getOrgRoles, getOrgTree, insertOrg, updateOrg } from "/@/api/sys/Org";
  import { getAllRoleList } from "/@/api/sys/Role";
  import { getTenantOrgTree, insertTenantOrg, updateTenantOrg } from "/@/api/sys/SsoTenant";
  import { useMessage } from "/@/hooks/web/UseMessage";
  import { isNullOrUnDef } from "/@/utils/Is";
  import { SsoOrg } from "/@/api/sys/model/OrgModel";
  import { TreeSelect } from "ant-design-vue";

  export default {
    name: "OrgModal",
    components: { BasicModal, BasicForm, TreeSelect },
    props: {
      source: {
        type: Number,
        default: null
      }
    },
    emits: ["success", "register"],
    setup(props, { emit }) {
      const isUpdate = ref(true);
      const { createMessage } = useMessage();
      const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: formSchema,
        autoSubmitOnEnter: true,
        showActionButtonGroup: false
      });
      const fieldNames = {
        label: "orgName",
        key: "id",
        value: "id"
      };
      const curOrg = ref("");
      const treeData = ref<SsoOrg[]>([]);
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields().then();
        curOrg.value = "";
        updateSchema({
          field: "roleIds",
          componentProps: { options: [] }
        }).then();
        tenantDisabled(false, props.source);
        setModalProps({ confirmLoading: false, width: "800px" });
        isUpdate.value = !!data?.isUpdate;
        if (props.source == 1) {
          treeData.value = await getTenantOrgTree();
        } else {
          treeData.value = await getOrgTree();
        }
        if (unref(isUpdate)) {
          curOrg.value = data.record.parentId;
          setFieldsValue({
            ...data.record
          }).then();
          //如果是租户父组织，不允许在此界面修改名称、编码等属性
          if (data.record.tenantId) {
            tenantDisabled(true, props.source);
          }
          initRoles(data.record as SsoOrg).then();
        }
      });

      async function initRoles(record: SsoOrg) {
        let roles;
        if (isNullOrUnDef(record.tenantId)) {
          //租户子组织获取系统默认角色
          roles = await getAllRoleList({ orgId: record.id });
        } else {
          //租户父组织获取系统默认角色
          roles = await getAllRoleList({ tenantId: "1" });
        }
        let orgRoles;
        if (record.parentId) {
          orgRoles = await getOrgRoles(record.parentId);
        } else {
          orgRoles = [];
        }
        setRoles(roles, orgRoles);
      }

      function setRoles(roles, orgRoles) {
        if (!orgRoles) {
          orgRoles = [];
        }
        const options = roles.reduce((prev, next: Recordable) => {
          if (next) {
            let disable = false;
            if (next["id"] === "1") {
              disable = true;
            } else {
              for (const role of orgRoles) {
                if (next["id"] !== role.id) {
                  continue;
                }
                if (role.source === 1) {
                  disable = true;
                  break;
                }
              }
            }
            prev.push({
              key: next["id"],
              label: next["roleName"],
              value: next["id"],
              disabled: disable
            });
          }
          return prev;
        }, [] as any);
        updateSchema({
          field: "roleIds",
          componentProps: { options, optionFilterProp: "label" }
        }).then();
      }

      function tenantDisabled(disabled, source) {
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
          },
          {
            field: "roleIds",
            dynamicDisabled: source === 1 && disabled
          }
        ]).then();
      }

      async function orgChange(orgId, _, extra) {
        setFieldsValue({ parentId: orgId }).then();
        initRoles(extra.triggerNode.props).then();
      }

      const getTitle = computed(() => (!unref(isUpdate) ? "新增组织" : "编辑组织"));

      async function handleSubmit() {
        const values = await validate();
        if (
          (values.tenantId === null || values.tenantId === undefined || values.tenantId === "") &&
          (values.parentId === null || values.parentId === undefined || values.parentId === "")
        ) {
          createMessage.error("错误:请选择父组织");
          return;
        }
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          if (props.source === 1) {
            saveOrg(updateTenantOrg, values);
          } else {
            saveOrg(updateOrg, values);
          }
        } else {
          if (props.source === 1) {
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

      return { registerModal, registerForm, getTitle, handleSubmit, fieldNames, treeData, orgChange, curOrg };
    }
  };
</script>
