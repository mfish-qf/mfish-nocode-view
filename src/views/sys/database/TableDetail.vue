<!--
 @description:表详情
 @author: mfish
 @date: 2023/4/4 19:13
-->
<template>
  <div :class="`${prefixCls}`">
    <div class="header">
      <div class="flex gap-12">
        <div class="title">
          {{ `表空间：${curNode?.tableSchema?.toUpperCase() ? curNode.tableSchema.toUpperCase() : "无"}` }}
        </div>
        <div class="title">
          {{ `数据表：${curNode?.tableName?.toUpperCase() ? curNode.tableName.toUpperCase() : "无"}` }}
        </div>
      </div>
      <div>
        <slot name="button" v-bind="{ data: curNode }"></slot>
      </div>
    </div>
    <ATabs default-active-key="1" @change="changeTab">
      <ATabPane key="1" tab="基本信息">
        <div class="mt-3">
          <ADescriptions size="small">
            <ADescriptionsItem label="描述">
              {{ curNode?.tableComment ? curNode?.tableComment : "无" }}
            </ADescriptionsItem>
          </ADescriptions>
          <ADescriptions title="字段信息" class="mt-3" />
          <BasicTable @register="registerFieldTable" />
        </div>
      </ATabPane>
      <ATabPane key="2" tab="数据预览">
        <div class="mt-2">
          <BasicTable @register="registerDataTable" />
        </div>
      </ATabPane>
    </ATabs>
  </div>
</template>
<script lang="ts" setup>
  import { computed, ComputedRef, nextTick, onMounted, ref, watch } from "vue";
  import { BasicColumn, BasicTable, useTable } from "@mfish/core/components/Table";
  import { Descriptions as ADescriptions, Tabs as ATabs } from "ant-design-vue";
  import { getDataTable, getFieldList, ReqTable, TableInfo } from "@mfish/core/api";
  import { columns } from "@/views/sys/database/tableInfo.data";
  import { useDesign } from "@mfish/core/hooks";

  const props = defineProps({
    curNode: Object as () => TableInfo,
    resizeHeightOffset: { type: Number, default: 0 }
  });
  const ATabPane = ATabs.TabPane;
  const ADescriptionsItem = ADescriptions.Item;
  const curTab = ref("1");
  const changeTab = (tab) => {
    curTab.value = tab;
    setValue();
  };
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
      const tableSchema = values[1];
      const tableName = values[2];
      return { connectId, tableSchema, tableName };
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
    buildTableData();
  }

  async function buildTableData(page?: any) {
    if (!condition.value.connectId) return;
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
    getFieldList({ ...condition.value, pageNum: 1, pageSize: 10_000 })
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
