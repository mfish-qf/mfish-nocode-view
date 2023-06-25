<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" @field-value-change="valueChange" />
  </BasicModal>
</template>
<script lang="ts">
  import { ref, computed, unref } from "vue";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { BasicForm, useForm } from "/@/components/general/Form/index";
  import { accountFormSchema } from "./account.data";
  import { getOrgRoles, getOrgTree } from "/@/api/sys/Org";
  import { getUserRoles, insertUser, updateUser } from "/@/api/sys/User";
  import { getAllRoleList } from "/@/api/sys/Role";
  import { RoleInfo } from "/@/api/sys/model/UserModel";

  export default {
    name: "AccountModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      let curRow;
      const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
        name: "model_form_item",
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: accountFormSchema,
        showActionButtonGroup: false,
        autoSubmitOnEnter: true
      });
      let roles;
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields().then();
        setModalProps({ confirmLoading: false, width: "800px" });
        isUpdate.value = !!data?.isUpdate;
        const status = {
          field: "status",
          dynamicDisabled: false
        };
        curRow = data.record ? data.record : {};
        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record
          }).then();
          // 超户不允许修改用户状态
          if (data.record.id === "1") {
            status.dynamicDisabled = true;
          } else {
            status.dynamicDisabled = false;
          }
          updateSchema([
            {
              field: "password",
              ifShow: false
            },
            {
              field: "account",
              dynamicDisabled: true
            },
            status
          ]).then();
        } else {
          updateSchema([
            {
              field: "password",
              ifShow: true
            },
            {
              field: "account",
              dynamicDisabled: false
            },
            status
          ]).then();
        }
        const treeData = await getOrgTree();
        updateSchema({
          field: "orgId",
          componentProps: { treeData }
        }).then();
        roles = await getAllRoleList();
        if (data.record?.id) {
          const userRoles = await getUserRoles({ userId: data.record.id });
          setRole(userRoles);
        }
      });
      const getTitle = computed(() => (!unref(isUpdate) ? "新增账号" : "编辑账号"));

      function setRole(userRoles) {
        if (!roles) {
          return;
        }
        curRow.userRoles = userRoles;
        const options = roles.reduce((prev, next: Recordable) => {
          if (next) {
            let disable = false;
            if (next["id"] === "1") {
              disable = true;
            } else {
              for (const role of userRoles) {
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

      async function handleSubmit() {
        const values = await validate();
        values.roleIds = values.roleIds.filter((item) => {
          if (curRow?.userRoles && curRow?.userRoles.length > 0) {
            for (const role of curRow.userRoles) {
              if (role.source !== 1) {
                continue;
              }
              if (item === role.id) {
                return false;
              }
            }
          }
          return true;
        });
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveAccount(updateUser, values);
        } else {
          saveAccount(insertUser, values);
        }
      }

      function valueChange(key, value) {
        if (key !== "orgId") {
          return;
        }
        getOrgRoles(value).then((res) => {
          let userRoles: RoleInfo[] = [];
          if (curRow?.userRoles && curRow?.userRoles.length > 0) {
            userRoles = curRow.userRoles.filter((item) => item.source !== 1);
          }
          userRoles = userRoles.concat(res);
          const roleIds = userRoles
            .map((item) => {
              return item.id;
            })
            .reduce((prev, next: string) => {
              if (next) {
                if (!prev.includes(next)) {
                  prev.push(next);
                }
              }
              return prev;
            }, [] as string[]);
          setFieldsValue({ roleIds });
          setRole(userRoles);
        });
      }

      function saveAccount(save, values) {
        save(values)
          .then(() => {
            emit("success", { isUpdate: unref(isUpdate), values: { ...values, id: curRow.id } });
            closeModal();
          })
          .finally(() => {
            setModalProps({ confirmLoading: false });
          });
      }

      return { registerModal, registerForm, getTitle, handleSubmit, valueChange };
    }
  };
</script>
