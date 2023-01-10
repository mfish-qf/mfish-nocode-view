<template>
  <div ref="wrapRef" :class="getWrapperClass">
    <BasicForm ref="formRef" submitOnReset v-bind="getFormProps"
               v-if="getBindValues.useSearchForm" :tableAction="tableAction"
               @register="registerForm" @submit="handleSearchInfoChange" @advanced-change="redoHeight">

      <template #[replaceFormSlotKey(item)]="data" v-for="item in getFormSlotKeys">
        <slot :name="item" v-bind="data || {}"></slot>
      </template>
    </BasicForm>

    <Table ref="tableElRef" v-bind="getBindValues" :rowClassName="getRowClassName"
           v-show="getEmptyDataIsShowTable" @change="handleTableChange">
      <template #[item]="data" v-for="item in Object.keys($slots)" :key="item">
        <slot :name="item" v-bind="data || {}"></slot>
      </template>
      <template #headerCell="{ column }">
        <HeaderCell :column="column" />
      </template>
      <!-- 增加对antdv3.x兼容 -->
      <template #bodyCell="data">
        <slot name="bodyCell" v-bind="data || {}"></slot>
      </template>
    </Table>
  </div>
</template>
<script lang="ts">
import type {
  BasicTableProps,
  TableActionType,
  SizeType,
  ColumnChangeParam
} from "./types/Table";
import { defineComponent, ref, computed, unref, toRaw, inject, watchEffect } from "vue";
import { Table } from "ant-design-vue";
import { BasicForm, useForm } from "/@/components/general/Form";
import { PageWrapperFixedHeightKey } from "/@/components/general/Page";
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
import { useDesign } from "/@/hooks/web/UseDesign";
import { omit } from "lodash-es";
import { basicProps } from "./Props";
import { isFunction } from "/@/utils/Is";
import { warn } from "/@/utils/Log";

export default defineComponent({
  name:'BasicTable',
  components: {
    Table,
    BasicForm,
    HeaderCell
  },
  props: basicProps,
  emits: [
    "fetch-success",
    "fetch-error",
    "selection-change",
    "register",
    "row-click",
    "row-dbClick",
    "row-contextmenu",
    "row-mouseenter",
    "row-mouseleave",
    "edit-end",
    "edit-cancel",
    "edit-row-end",
    "edit-change",
    "expanded-rows-change",
    "change",
    "columns-change"
  ],
  setup(props, { attrs, emit, slots, expose }) {
    const tableElRef = ref(null);
    const tableData = ref<Recordable[]>([]);
    const wrapRef = ref(null);
    const formRef = ref(null);
    const innerPropsRef = ref<Partial<BasicTableProps>>();
    const { prefixCls } = useDesign("basic-table");
    const [registerForm, formActions] = useForm();
    const getProps = computed(() => {
      return { ...props, ...unref(innerPropsRef) } as BasicTableProps;
    });
    const isFixedHeightPage = inject(PageWrapperFixedHeightKey, false);
    watchEffect(() => {
      unref(isFixedHeightPage) &&
      props.canResize &&
      warn(
        "BasicTable的'canResize'可能无法在具有'fixedHeight'的PageWrapper中工作（尤其是在热更新中）"
      );
    });
    const { getLoading, setLoading } = useLoading(getProps);
    const {
      getPaginationInfo,
      getPagination,
      setPagination,
      setShowPagination,
      getShowPagination
    } = usePagination(getProps);
    const {
      getRowSelection,
      getRowSelectionRef,
      getSelectRows,
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

    function handleTableChange(...args) {
      onTableChange.call(undefined, ...args);
      emit("change", ...args);
      // 解决通过useTable注册onChange时不起作用的问题
      const { onChange } = unref(getProps);
      onChange && isFunction(onChange) && onChange.call(undefined, ...args);
    }

    const {
      getViewColumns,
      getColumns,
      setCacheColumnsByField,
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
    const { scrollTo } = useTableScrollTo(tableElRef, getDataSourceRef);
    const { customRow } = useCustomRow(getProps, {
      setSelectedRowKeys,
      getSelectRowKeys,
      clearSelectedRowKeys,
      getAutoCreateKey,
      emit
    });
    const { getRowClassName } = useTableStyle(getProps, prefixCls);
    const { getExpandOption, expandAll, expandRows, collapseAll } = useTableExpand(
      getProps,
      tableData,
      emit
    );
    const handlers: InnerHandlers = {
      onColumnsChange: (data: ColumnChangeParam[]) => {
        emit("columns-change", data);
        // support useTable
        unref(getProps).onColumnsChange?.(data);
      }
    };
    const { getHeaderProps } = useTableHeader(getProps, slots, handlers);
    const { getFooterProps } = useTableFooter(
      getProps,
      getScrollRef,
      tableElRef,
      getDataSourceRef
    );

    const { getFormProps, replaceFormSlotKey, getFormSlotKeys, handleSearchInfoChange } =
      useTableForm(getProps, slots, fetch, getLoading);

    const getBindValues = computed(() => {
      const dataSource = unref(getDataSourceRef);
      let propsData: Recordable = {
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
      return !!unref(getDataSourceRef).length;
    });

    function setProps(props: Partial<BasicTableProps>) {
      innerPropsRef.value = { ...unref(innerPropsRef), ...props };
    }

    const tableAction: TableActionType = {
      reload,
      getSelectRows,
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
      expandRows,
      collapseAll,
      scrollTo,
      getSize: () => {
        return unref(getBindValues).size as SizeType;
      }
    };
    createTableContext({ ...tableAction, wrapRef, getBindValues });
    expose(tableAction);
    emit("register", tableAction, formActions);
    return {
      formRef,
      tableElRef,
      getBindValues,
      getLoading,
      registerForm,
      handleSearchInfoChange,
      getEmptyDataIsShowTable,
      handleTableChange,
      getRowClassName,
      wrapRef,
      tableAction,
      redoHeight,
      getFormProps: getFormProps as any,
      replaceFormSlotKey,
      getFormSlotKeys,
      getWrapperClass,
      columns: getViewColumns
    };
  }
});
</script>
<style lang="less">
@border-color: #cecece4d;

@prefix-cls: ~'@{namespace}-basic-table';

[data-theme='dark'] {
  .ant-table-tbody > tr:hover.ant-table-row-selected > td,
  .ant-table-tbody > tr.ant-table-row-selected td {
    background-color: #262626;
  }
}

.@{prefix-cls} {
  max-width: 100%;
  height: 100%;

  &-row__striped {
    td {
      background-color: @app-content-background;
    }
  }

  &-form-container {
    padding: 16px;

    .ant-form {
      width: 100%;
      padding: 12px 10px 6px;
      margin-bottom: 16px;
      background-color: @component-background;
      border-radius: 2px;
    }
  }

  .ant-tag {
    margin-right: 0;
  }

  .ant-table-wrapper {
    padding: 6px;
    background-color: @component-background;
    border-radius: 2px;

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
      padding: 8px 6px;
      border-bottom: none;
      justify-content: space-between;
      align-items: center;
    }

    //.ant-table-tbody > tr.ant-table-row-selected td {
    //background-color: fade(@primary-color, 8%) !important;
    //}
  }

  .ant-pagination {
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
      //  overflow-y: scroll !important;
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
