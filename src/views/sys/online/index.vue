<template>
  <div>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ion:power-outline',
                popConfirm: {
                  title: '是否确认退出',
                  placement: 'left',
                  confirm: handleLogout.bind(null, record)
                },
                auth: 'sys:online:revoke',
                tooltip: '强制退出'
              }
            ]"
          />
        </template>
        <template v-if="column.key === 'loginMode'">
          <DictTag code="sys_login_mode" :value="record.loginMode" />
        </template>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, TableAction, useTable } from "@mfish/core/components/Table";
  import { columns } from "./online.data";
  import { getOnlineList, logoutUser, OnlineUser } from "@mfish/core/api";
  import { DictTag } from "@mfish/core/components/DictTag";

  defineOptions({ name: "OnlineManagement" });

  const [registerTable, { reload }] = useTable({
    api: getOnlineList,
    columns,
    useSearchForm: false,
    showTableSetting: true,
    bordered: true,
    showIndexColumn: false,
    actionColumn: {
      width: 60,
      title: "操作",
      dataIndex: "action",
      fixed: undefined
    }
  });

  function handleLogout(record: OnlineUser) {
    logoutUser(record.sid).then(() => {
      reload();
    });
  }
</script>
