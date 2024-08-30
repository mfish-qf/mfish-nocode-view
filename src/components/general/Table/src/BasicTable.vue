<template>
  <div ref="wrapRef" :class="getWrapperClass">
    <BasicForm
      ref="formRef"
      submit-on-reset
      v-bind="getFormProps"
      v-if="getBindValues.useSearchForm"
      :table-action="tableAction"
      @register="registerForm"
      @submit="handleSearchInfoChange"
      @advanced-change="redoHeight"
    >
      <template #[replaceFormSlotKey(item)]="data" v-for="item in getFormSlotKeys">
        <slot :name="item" v-bind="data || {}"></slot>
      </template>
    </BasicForm>

    <Table
      ref="tableElRef"
      v-bind="getBindValues"
      :row-class-name="getRowClassName"
      v-show="getEmptyDataIsShowTable"
      @change="handleTableChange"
      @resize-column="setColumnWidth"
      @expand="handleTableExpand"
    >
      <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
        <slot :name="item" v-bind="data || {}"></slot>
      </template>
      <template #headerCell="{ column }">
        <slot name="headerCell" v-bind="{ column }">
          <HeaderCell :column="column" />
        </slot>
      </template>
      <template #bodyCell="data">
        <slot name="bodyCell" v-bind="data || {}"></slot>
      </template>
    </Table>
  </div>
</template>
<script lang="ts" setup>
  import type { BasicTableProps, TableActionType, SizeType, ColumnChangeParam, InnerMethods } from "./types/Table";
  import { ref, computed, unref, toRaw, inject, useSlots, useAttrs, watch } from "vue";
  import { Table } from "ant-design-vue";
  import { BasicForm, useForm } from "@/components/general/Form";
  import { PageWrapperFixedHeightKey } from "@/components/general/Page";
  import HeaderCell from "./components/HeaderCell.vue";
  import { InnerHandlers } from "./types/Table";
  import { usePagination } from "./hooks/UsePagination";
  import { useColumns } from "./hooks/UseColumns";
  import { useDataSource } from "./hooks/UseDataSource";
  import { useLoading } from "./hooks/UseLoading";
  import { useRowSelection } from "./hooks/UseRowSelection";
  import { useTableScroll } from "./hooks/UseTableScroll";
  import { useTableScrollTo } from "./hooks/UseScrollTo";
  import { useCustomRow } from "./hooks/UseCustomRow";
  import { useTableStyle } from "./hooks/UseTableStyle";
  import { useTableHeader } from "./hooks/UseTableHeader";
  import { useTableExpand } from "./hooks/UseTableExpand";
  import { createTableContext } from "./hooks/UseTableContext";
  import { useTableFooter } from "./hooks/UseTableFooter";
  import { useTableForm } from "./hooks/UseTableForm";
  import { useDesign } from "@/hooks/web/UseDesign";
  import { debounce, omit } from "lodash-es";
  import { basicProps } from "./Props";
  import { isFunction } from "@/utils/Is";
  import { useElementSize } from "@vueuse/core";

  defineOptions({ name: "BasicTable" });

  const props = defineProps(basicProps);

  const emit = defineEmits([
    "fetchSuccess",
    "fetchError",
    "selectionChange",
    "register",
    "rowClick",
    "rowDbClick",
    "rowContextmenu",
    "rowMouseenter",
    "rowMouseleave",
    "editEnd",
    "editCancel",
    "editRowEnd",
    "editChange",
    "expandedRowsChange",
    "change",
    "columnsChange"
  ]);
  const attrs = useAttrs();
  const slots = useSlots();
  const tableElRef = ref(null);
  const tableData = ref([]);
  const wrapRef = ref(null);
  const formRef = ref(null);
  const innerPropsRef = ref<Partial<BasicTableProps>>();
  const { height } = useElementSize(wrapRef);
  const { prefixCls } = useDesign("basic-table");
  const [registerForm, formActions] = useForm();

  const getProps = computed(() => {
    return { ...props, ...unref(innerPropsRef) } as BasicTableProps;
  });
  const isFixedHeightPage = inject(PageWrapperFixedHeightKey, false);
  const { getLoading, setLoading } = useLoading(getProps);
  const { getPaginationInfo, getPagination, setPagination, setShowPagination, getShowPagination } =
    usePagination(getProps);
  const {
    getRowSelection,
    getRowSelectionRef,
    getSelectRows,
    setSelectedRows,
    clearSelectedRowKeys,
    getSelectRowKeys,
    deleteSelectRowByKey,
    setSelectedRowKeys
  } = useRowSelection(getProps, tableData, emit);

  const {
    handleTableChange: onTableChange,
    getDataSourceRef,
    getDataSource,
    getRawDataSource,
    getSearchInfo,
    setTableData,
    updateTableDataRecord,
    deleteTableDataRecord,
    insertTableDataRecord,
    findTableDataRecord,
    fetch,
    getRowKey,
    reload,
    getAutoCreateKey,
    updateTableData
  } = useDataSource(
    getProps,
    {
      tableData,
      getPaginationInfo,
      setLoading,
      setPagination,
      getFieldsValue: formActions.getFieldsValue,
      clearSelectedRowKeys
    },
    emit
  );

  function handleTableChange(pagination: any, filters: any, sorter: any, extra: any) {
    onTableChange(pagination, filters, sorter);
    emit("change", pagination, filters, sorter);
    // 解决通过useTable注册onChange时不起作用的问题
    const { onChange } = unref(getProps);
    onChange && isFunction(onChange) && onChange(pagination, filters, sorter, extra);
  }

  const {
    getViewColumns,
    getColumns,
    setCacheColumnsByField,
    setCacheColumns,
    setColumnWidth,
    setColumns,
    getColumnsRef,
    getCacheColumns
  } = useColumns(getProps, getPaginationInfo);

  const { getScrollRef, redoHeight } = useTableScroll(
    getProps,
    tableElRef,
    getColumnsRef,
    getRowSelectionRef,
    getDataSourceRef,
    wrapRef,
    formRef
  );
  const debounceRedoHeight = debounce(redoHeight, 50);

  const { scrollTo } = useTableScrollTo(tableElRef, getDataSourceRef);

  const { customRow } = useCustomRow(getProps, {
    setSelectedRowKeys,
    getSelectRowKeys,
    clearSelectedRowKeys,
    getAutoCreateKey,
    emit
  });

  const { getRowClassName } = useTableStyle(getProps, prefixCls);

  const { getExpandOption, expandAll, expandRows, collapseRows, collapseAll, handleTableExpand } = useTableExpand(
    getProps,
    tableData,
    emit
  );

  const handlers: InnerHandlers = {
    onColumnsChange: (data: ColumnChangeParam[]) => {
      emit("columnsChange", data);
      // support useTable
      unref(getProps).onColumnsChange?.(data);
    }
  };

  const methods: InnerMethods = {
    clearSelectedRowKeys,
    getSelectRowKeys
  };

  const { getHeaderProps } = useTableHeader(getProps, slots, handlers, methods);

  const { getFooterProps } = useTableFooter(getProps, getScrollRef, tableElRef, getDataSourceRef);

  const { getFormProps, replaceFormSlotKey, getFormSlotKeys, handleSearchInfoChange } = useTableForm(
    getProps,
    slots,
    fetch,
    getLoading
  );

  const getBindValues = computed(() => {
    const dataSource = unref(getDataSourceRef);
    let propsData: any = {
      ...attrs,
      customRow,
      ...unref(getProps),
      ...unref(getHeaderProps),
      scroll: unref(getScrollRef),
      loading: unref(getLoading),
      tableLayout: "fixed",
      rowSelection: unref(getRowSelectionRef),
      rowKey: unref(getRowKey),
      columns: toRaw(unref(getViewColumns)),
      pagination: toRaw(unref(getPaginationInfo)),
      dataSource,
      footer: unref(getFooterProps),
      ...unref(getExpandOption)
    };
    // if (slots.expandedRowRender) {
    //   propsData = omit(propsData, 'scroll');
    // }

    propsData = omit(propsData, ["class", "onChange"]);
    return propsData;
  });

  const getWrapperClass = computed(() => {
    const values = unref(getBindValues);
    return [
      prefixCls,
      attrs.class,
      {
        [`${prefixCls}-form-container`]: values.useSearchForm,
        [`${prefixCls}--inset`]: values.inset
      }
    ];
  });

  const getEmptyDataIsShowTable = computed(() => {
    const { emptyDataIsShowTable, useSearchForm } = unref(getProps);
    if (emptyDataIsShowTable || !useSearchForm) {
      return true;
    }
    return unref(getDataSourceRef).length > 0;
  });

  watch(height, () => {
    unref(isFixedHeightPage) && props.canResize && debounceRedoHeight();
  });

  function setProps(props: Partial<BasicTableProps>) {
    innerPropsRef.value = { ...unref(innerPropsRef), ...props };
  }

  const tableAction: TableActionType = {
    reload,
    getSelectRows,
    setSelectedRows,
    clearSelectedRowKeys,
    getSelectRowKeys,
    deleteSelectRowByKey,
    setPagination,
    setTableData,
    updateTableDataRecord,
    deleteTableDataRecord,
    insertTableDataRecord,
    findTableDataRecord,
    redoHeight,
    setSelectedRowKeys,
    setColumns,
    setLoading,
    getDataSource,
    getRawDataSource,
    getSearchInfo,
    setProps,
    getRowSelection,
    getPaginationRef: getPagination,
    getColumns,
    getCacheColumns,
    emit,
    updateTableData,
    setShowPagination,
    getShowPagination,
    setCacheColumnsByField,
    expandAll,
    collapseAll,
    expandRows,
    collapseRows,
    scrollTo,
    getSize: () => {
      return unref(getBindValues).size as SizeType;
    },
    setCacheColumns
  };
  createTableContext({ ...tableAction, wrapRef, getBindValues });

  emit("register", tableAction, formActions);

  defineExpose({ tableElRef, ...tableAction });
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-basic-table";
  .@{prefix-cls} {
    max-width: 100%;
    height: 100%;

    &-row__striped:not(.ant-table-row-selected) {
      td {
        background-color: @app-content-background !important;
      }
    }
    &-form-container {
      padding: 16px;

      .ant-form {
        width: 100%;
        margin-bottom: 16px;
        padding: 12px 10px 6px;
        border-radius: 2px;
        background-color: @component-background;
      }
    }

    .ant-table-cell {
      .ant-tag {
        margin-right: 0;
      }
    }

    .ant-table-wrapper {
      .ant-table-container {
        border-radius: 8px !important;
      }
      padding: 6px;
      border-radius: 2px;
      background-color: @component-background;

      .ant-table-title {
        min-height: 40px;
        padding: 0 0 8px !important;
      }

      .ant-table.ant-table-bordered .ant-table-title {
        border: none !important;
      }
    }

    .ant-table {
      width: 100%;
      overflow-x: hidden;

      &-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 6px;
        border-bottom: none;
      }
    }

    .ant-table-wrapper .ant-pagination {
      margin: 10px 0 0;
    }

    .ant-table-footer {
      padding: 0;

      .ant-table-wrapper {
        padding: 0;
      }

      table {
        border: none !important;
      }

      .ant-table-body {
        overflow-x: hidden !important;
      }

      td {
        padding: 12px 8px;
      }
    }

    &--inset {
      .ant-table-wrapper {
        padding: 0;
      }
    }
  }
</style>
