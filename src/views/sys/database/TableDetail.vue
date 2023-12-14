<!--
 @description:表详情
 @author: mfish
 @date: 2023/4/4 19:13
-->
<template>
  <div :class="`${prefixCls}`">
    <div class="header">
      <div class="title">{{ `数据表：${curNode?.tableName?.toUpperCase()}` }}</div>
      <div><slot name="button" v-bind="{ data: curNode }"></slot></div>
    </div>
    <a-tabs default-active-key="1" @change="changeTab">
      <a-tab-pane key="1" tab="基本信息">
        <div class="mt-3">
          <a-descriptions size="small">
            <a-descriptions-item label="描述">
              {{ curNode?.tableComment ? curNode?.tableComment : "无" }}
            </a-descriptions-item>
          </a-descriptions>
          <a-descriptions title="字段信息" class="mt-3" />
          <BasicTable @register="registerFieldTable" />
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="数据预览">
        <div class="mt-2">
          <BasicTable @register="registerDataTable" />
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts">
  import { ref, watch, onMounted, computed, nextTick, ComputedRef } from "vue";
  import { BasicColumn, BasicTable, TableActionType, useTable } from "/@/components/general/Table";
  import { Descriptions, Tabs } from "ant-design-vue";
  import { ReqTable, TableInfo } from "/@/api/sys/model/DbConnectModel";
  import { getDataTable, getFieldList } from "/@/api/sys/DbConnect";
  import { columns } from "/@/views/sys/database/tableInfo.data";
  import { useDesign } from "/@/hooks/web/UseDesign";

  export default {
    name: "TableDetail",
    components: {
      BasicTable,
      [Descriptions.name]: Descriptions,
      [Descriptions.Item.name]: Descriptions.Item,
      [Tabs.name]: Tabs,
      [Tabs.TabPane.name]: Tabs.TabPane
    },
    props: {
      curNode: Object as () => TableInfo,
      resizeHeightOffset: { type: Number, default: 0 }
    },
    setup(props) {
      const curTab = ref("1");
      const changeTab = (tab) => {
        curTab.value = tab;
        setValue();
      };
      const dataTableRef = ref<Nullable<TableActionType>>(null);
      const { prefixCls } = useDesign("table-detail");

      const [registerFieldTable, { setTableData, setLoading: fieldLoading }] = useTable({
        columns,
        bordered: true,
        showIndexColumn: true,
        pagination: false,
        resizeHeightOffset: props.resizeHeightOffset
      });
      const condition: ComputedRef<ReqTable> = computed(() => {
        const curKey = props.curNode?.key;
        if (curKey) {
          const values = curKey.split(",");
          const connectId = values[0];
          const tableName = values[1];
          return { connectId, tableName };
        }
        return { connectId: "" };
      });
      const [registerDataTable, { setColumns, setTableData: setDataTable, setPagination, setLoading: tableLoading }] =
        useTable({
          bordered: true,
          showIndexColumn: false,
          resizeHeightOffset: props.resizeHeightOffset,
          onChange: buildTableData
        });
      watch(
        () => props.curNode?.key,
        () => {
          setValue();
        }
      );

      function setValue() {
        if (curTab.value === "1") {
          setFields();
          return;
        }
        buildTableData(undefined);
      }

      async function buildTableData(page) {
        await nextTick();
        tableLoading(true);
        let pageNum = 1;
        let pageSize = 10;
        if (page) {
          pageNum = page.current;
          pageSize = page.pageSize;
        }
        getDataTable({ ...condition.value, pageNum, pageSize })
          .then((res) => {
            const columns: BasicColumn[] = Object.keys(res.headers).map((key) => ({
              title: key,
              dataIndex: key
            }));
            setColumns(columns);
            setDataTable(res.table.list);
            setPagination({
              total: res.table.total,
              pageSize: res.table.pageSize,
              current: res.table.pageNum
            });
          })
          .catch(() => {
            setColumns([]);
          })
          .finally(() => {
            tableLoading(false);
          });
      }

      onMounted(() => {
        setFields();
      });

      async function setFields() {
        await nextTick();
        if (!condition.value.connectId) {
          setTableData([]);
          return;
        }
        fieldLoading(true);
        getFieldList({ ...condition.value, pageNum: 1, pageSize: 10000 })
          .then((res) => {
            setTableData(res.list);
          })
          .catch(() => {
            setTableData([]);
          })
          .finally(() => {
            fieldLoading(false);
          });
      }

      return {
        curTab,
        changeTab,
        registerFieldTable,
        registerDataTable,
        dataTableRef,
        prefixCls
      };
    }
  };
</script>
<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-table-detail";
  .@{prefix-cls} {
    margin: 0 10px 0 20px;
    .title {
      font-size: 18px;
      font-weight: bold;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
  }
</style>
