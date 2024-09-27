<!--
 @description: 角色表查看
 @author: mfish
 @date: 2024-08-29
 @version: V1.3.1
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="角色信息">
    <Description @register="registerDesc" />
    <ADivider>菜单明细</ADivider>
    <BasicTree
      v-model:value="menus"
      :tree-data="treeData"
      search
      :field-names="{ title: 'menuName', key: 'id' }"
      :click-row-to-expand="true"
      checkable
      toolbar
      disabled
      title="菜单分配"
    />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicModal, useModalInner } from "@/components/general/Modal";
  import { Description, useDescription } from "@/components/general/Description";
  import { Divider as ADivider } from "ant-design-vue";
  import { ref, unref } from "vue";
  import { RoleDesc } from "./role.data";
  import { BasicTree, TreeItem } from "@/components/general/Tree";
  import { getTenantMenuTree, getTenantRoleMenus } from "@/api/sys/SsoTenant";
  import { getMenuTree } from "@/api/sys/Menu";
  import { getRoleMenus } from "@/api/sys/Role";

  defineOptions({ name: "RoleViewModal" });
  const props = defineProps({
    source: {
      type: Number,
      default: null
    }
  });
  const roleData = ref();
  const roleDesc = new RoleDesc();
  const treeData = ref<TreeItem[]>([]);

  const menus = ref<string[]>([]);
  const [registerModal, { setModalProps }] = useModalInner(async (data) => {
    setModalProps({
      confirmLoading: false,
      width: "800px",
      showOkBtn: false,
      cancelText: "关闭"
    });
    roleData.value = data.record;
    // 需要在setFieldsValue之前先填充treeData，否则Tree组件可能会报key not exist警告
    if (unref(treeData).length === 0) {
      treeData.value =
        props.source === 1
          ? ((await getTenantMenuTree()) as any as TreeItem[])
          : ((await getMenuTree()) as any as TreeItem[]);
    }
    const getMenus = props.source === 1 ? getTenantRoleMenus : getRoleMenus;
    getMenus(data.record.id).then((res) => {
      menus.value = res;
    });
  });
  const [registerDesc] = useDescription({
    data: roleData,
    schema: roleDesc.viewSchema,
    column: 2
  });
</script>
