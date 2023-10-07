<!--
 @description:数据源管理
 @author: mfish
 @date: 2023/3/31 20:17
-->
<template>
  <Split v-model="split" :class="prefixCls">
    <template #left>
      <DBTree
        :class="`${prefixCls}-left h-full`"
        ref="dbTreeRef"
        :showIcon="true"
        @select="changeSelect"
        @search="changeSearch"
      />
    </template>
    <template #right>
      <div :class="`${prefixCls}-right h-full`">
        <a-breadcrumb separator=">" class="m-3">
          <a-breadcrumb-item v-for="(item, index) in breadList" :key="index">
            <Icon :icon="item.icon" />
            <a @click="setSelect(item.key)" class="fw-bold text-decoration-none">{{ item.title }}</a>
          </a-breadcrumb-item>
        </a-breadcrumb>
        <ScrollContainer v-if="curNode?.dbName">
          <a-row class="ml-6">
            <a-col
              :xs="{ span: 24 }"
              :md="{ span: 8 }"
              :lg="{ span: 5 }"
              v-for="(item, index) in getTableList"
              :key="index"
              :class="`${prefixCls}-card`"
            >
              <div :class="`${prefixCls}-card-item`" @click="setSelect(item.key)">
                <Icon class="icon img" icon="ant-design:table-outlined" :color="color" />
                <div :class="`${prefixCls}-card-item-info`">
                  <Tooltip :title="item.tableName">
                    <span>{{ item.tableName }}</span>
                  </Tooltip>
                  <Tooltip :title="item.tableComment">
                    <span>{{ item.tableComment }}</span>
                  </Tooltip>
                </div>
              </div>
            </a-col>
          </a-row>
        </ScrollContainer>
        <TableDetail v-else :cur-node="curNode">
          <template #[item]="data" v-for="item in Object.keys($slots)">
            <slot :name="item" v-bind="data || {}"></slot>
          </template>
        </TableDetail>
      </div>
    </template>
  </Split>
</template>

<script lang="ts">
  import { ref, unref, onBeforeMount, computed, toRaw } from "vue";
  import { Split } from "view-ui-plus";
  import "view-ui-plus/dist/styles/viewuiplus.css";
  import { ScrollContainer } from "/@/components/general/Container";
  import DBTree from "./DBTree.vue";
  import { Icon } from "/@/components/general/Icon";
  import { Tooltip, Row, Col, Breadcrumb, BreadcrumbItem } from "ant-design-vue";
  import { TableInfo } from "/@/api/sys/model/DbConnectModel";
  import { useDesign } from "/@/hooks/web/UseDesign";
  import TableDetail from "/@/views/sys/database/TableDetail.vue";
  import { TreeItem } from "/@/components/general/Tree";
  import { useRootSetting } from "/@/hooks/setting/UseRootSetting";

  export default {
    name: "DataBaseManagement",
    components: {
      Split,
      TableDetail,
      DBTree,
      Icon,
      ScrollContainer,
      Tooltip,
      [Row.name]: Row,
      [Breadcrumb.name]: Breadcrumb,
      [BreadcrumbItem.name]: BreadcrumbItem,
      [Col.name]: Col
    },
    setup() {
      let tableList = ref<TableInfo[]>([]);
      const dbTreeRef = ref();
      const { prefixCls } = useDesign("data-base");
      const color = useRootSetting().getThemeColor;
      const startSearch = ref(false);
      const searchTable = ref<TableInfo[]>([]);
      const curNode = ref<any>();
      const parentNode = ref<TreeItem>();
      const split = ref<string>("300px");

      async function changeSelect(record: any, parent: any) {
        curNode.value = toRaw(record);
        if (parent) {
          parentNode.value = toRaw(parent);
        } else {
          parentNode.value = undefined;
        }
        //如果是数据库节点，构建下面表信息
        if (record.dbName) {
          if (record.children) {
            tableList.value = record.children;
            return;
          }
          tableList.value = [];
          dbTreeRef.value.buildTableTree(record.id).then((res: any) => {
            tableList.value = res;
          });
          return;
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
              title: curNode.value.tableName,
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
        let tables: TableInfo[] = [];
        toRaw(value).forEach((item) => {
          if (item.children) {
            tables.push(...item.children);
          }
        });
        searchTable.value = tables;
      }

      const getTableList = computed((): TableInfo[] => (startSearch.value ? unref(searchTable) : unref(tableList)));

      onBeforeMount(() => {});
      return {
        split,
        changeSelect,
        setSelect,
        changeSearch,
        getTableList,
        dbTreeRef,
        prefixCls,
        color,
        curNode,
        breadList
      };
    }
  };
</script>
<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-data-base";
  [data-theme="dark"] {
    .@{prefix-cls}-card-item {
      background: #212121;
    }
  }
  [data-theme="dark"] {
    .@{prefix-cls}{
      //border-left: 1px solid #303030
      background-color: #121212;
    }
    .ivu-split-trigger-vertical{
      background: black !important;
    }
    .ivu-split-trigger {
      border: 1px solid black !important;
    }
  }
  .@{prefix-cls} {
    //border-left: 1px solid #d9d9d9;
    background-color: #ffffff;
    &-left {
      padding: 6px;
    }

    &-right {
      display: flex;
      flex-direction: column;
    }
  }

  .@{prefix-cls}-card {
    margin: 5px 10px 10px 0;

    &-item {
      height: 70px;
      background: #ffffff;
      box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.05);
      display: flex;
      align-items: center;

      &:hover {
        border: 1px solid #e5e7eb;
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
        > span{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
</style>
