<!--
 @description:数据源管理
 @author: mfish
 @date: 2023/3/31 20:17
-->
<template>
  <NLayout has-sider sider-placement="left" :class="prefixCls">
    <NLayoutSider :collapsed-width="0" collapse-mode="transform" :width="300" show-trigger="bar" @contextmenu.stop>
      <div style="display: flex; height: 100%">
        <DBTree
          :class="`${prefixCls}-left h-full`"
          ref="dbTreeRef"
          :show-icon="true"
          @select="changeSelect"
          @search="changeSearch"
        />
        <ADivider type="vertical" class="divider" />
      </div>
    </NLayoutSider>
    <NLayoutContent>
      <div :class="`${prefixCls}-right h-full`">
        <ABreadcrumb separator=">" class="m-3">
          <ABreadcrumbItem v-for="(item, index) in breadList" :key="index">
            <Icon :icon="item.icon" />
            <a @click="setSelect(item.key)" class="fw-bold text-decoration-none">{{ item.title }}</a>
          </ABreadcrumbItem>
        </ABreadcrumb>
        <ScrollContainer v-if="curNode?.dbName">
          <ARow class="ml-6">
            <ACol
              :xs="{ span: 24 }"
              :md="{ span: 8 }"
              :lg="{ span: 5 }"
              :xl="{ span: 4 }"
              v-for="(item, index) in getTableList"
              :key="index"
              :class="`${prefixCls}-card`"
            >
              <div :class="`${prefixCls}-card-item`" @click="setSelect(item.key)">
                <Icon class="icon img" v-if="item.tableType === 0" icon="ant-design:table-outlined" :color="color" />
                <Icon class="icon img" v-else icon="ant-design:fund-view-outlined" :color="color" />
                <div :class="`${prefixCls}-card-item-info`">
                  <Tooltip :title="item.tableSchema">
                    <span class="text-xs" style="color: #999">表空间：{{ item.tableSchema }}</span>
                  </Tooltip>
                  <Tooltip :title="item.tableName">
                    <span style="font-weight: 700">{{ item.tableName }}</span>
                  </Tooltip>
                  <Tooltip :title="item.tableComment">
                    <span class="text-xs" style="color: #999">{{ item.tableComment }}</span>
                  </Tooltip>
                </div>
              </div>
            </ACol>
          </ARow>
        </ScrollContainer>
        <TableDetail v-else :cur-node="curNode" :resize-height-offset="resizeHeightOffset">
          <template #[item]="data" v-for="item in Object.keys($slots)">
            <slot :name="item" v-bind="data || {}"></slot>
          </template>
        </TableDetail>
      </div>
    </NLayoutContent>
  </NLayout>
</template>
<script lang="ts" setup>
  import { ref, unref, computed, toRaw } from "vue";
  import { ScrollContainer } from "@mfish/core/src/components/Container";
  import DBTree from "./DBTree.vue";
  import { Icon } from "@mfish/core/src/components/Icon";
  import { Tooltip, Row as ARow, Col as ACol, Breadcrumb as ABreadcrumb, Divider as ADivider } from "ant-design-vue";
  import { TableInfo } from "@mfish/core/src/api/sys/model/DbConnectModel";
  import { useDesign } from "@mfish/core";
  import TableDetail from "@/views/sys/database/TableDetail.vue";
  import { TreeItem } from "@mfish/core/src/components/Tree";
  import { useRootSetting } from "@mfish/core";
  import { NLayout, NLayoutContent, NLayoutSider } from "naive-ui";
  defineOptions({ name: "DataBaseManagement" });
  defineProps({
    resizeHeightOffset: { type: Number, default: 0 }
  });
  const ABreadcrumbItem = ABreadcrumb.Item;
  const tableList = ref<TableInfo[]>([]);
  const dbTreeRef = ref();
  const { prefixCls } = useDesign("data-base");
  const color = useRootSetting().getThemeColor;
  const startSearch = ref(false);
  const searchTable = ref<TableInfo[]>([]);
  const curNode = ref<any>();
  const parentNode = ref<TreeItem>();

  async function changeSelect(record: any, parent: any) {
    curNode.value = toRaw(record);
    parentNode.value = parent ? toRaw(parent) : undefined;
    // 如果是数据库节点，构建下面表信息
    if (record.dbName) {
      if (record.children) {
        tableList.value = record.children;
        return;
      }
      tableList.value = [];
      dbTreeRef.value.buildTableTree(record.id, record.dbType, record.dbName).then((res: any) => {
        tableList.value = res;
      });
    }
  }

  const breadList = computed(() => {
    const list: any[] = [];
    if (parentNode.value) {
      list.push({
        icon: parentNode.value.icon,
        title: parentNode.value.dbTitle,
        key: parentNode.value.key
      });
      if (curNode.value) {
        list.push({
          icon: curNode.value.icon,
          title: `${curNode.value.tableSchema}.${curNode.value.tableName}`,
          key: curNode.value.key
        });
      }
      return list;
    }
    if (curNode.value) {
      list.push({
        icon: curNode.value.icon,
        title: curNode.value.dbTitle,
        key: curNode.value.key
      });
    }
    return list;
  });

  function setSelect(key) {
    dbTreeRef.value.setSelect(key);
  }

  function changeSearch(search, value) {
    if (!search) {
      startSearch.value = false;
      return;
    }
    startSearch.value = true;
    const tables: TableInfo[] = [];
    toRaw(value).forEach((item) => {
      if (item.children) {
        tables.push(...item.children);
      }
    });
    searchTable.value = tables;
  }

  const getTableList = computed((): TableInfo[] => (startSearch.value ? unref(searchTable) : unref(tableList)));
</script>
<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-data-base";

  [data-theme="dark"] {
    .@{prefix-cls} {
      background-color: #121212;
    }
    .@{prefix-cls}-card {
      &-item {
        background: @sider-bg-color;
        &:hover {
          box-shadow: 0 0 8px 4px rgba(255, 255, 255, 0.1);
        }
      }
    }
  }
  .@{prefix-cls} {
    background-color: @white;
    height: 100%;
    &-left {
      flex: 1;
      padding: 6px;
    }

    &-right {
      display: flex;
      flex-direction: column;
    }

    .divider {
      height: calc(100% - 20px);
      top: 10px;
      padding: 0;
      margin: 0;
    }
  }

  .@{prefix-cls}-card {
    margin: 5px 10px 10px 0;

    &-item {
      height: 70px;
      background: @white;
      border-radius: 8px;
      box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.05);
      display: flex;
      align-items: center;
      transition: all 0.3s ease-in;

      &:hover {
        box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.1);
        transform: scale(1.01);
        cursor: pointer;
      }

      .img {
        width: 15px;
        height: 14px;
        min-width: 15px;
        margin: 0 8px 0 8px;
      }

      &-info {
        flex: 1;
        width: 0;
        display: flex;
        flex-direction: column;
        gap: 4px;
        > span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
</style>
