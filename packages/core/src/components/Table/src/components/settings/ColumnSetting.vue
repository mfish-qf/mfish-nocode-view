<template>
  <Tooltip placement="top">
    <template #title>
      <span>{{ t("component.table.settingColumn") }}</span>
    </template>
    <Popover
      placement="bottomLeft"
      trigger="click"
      @open-change="onOpenChange"
      :overlay-class-name="`${prefixCls}__column-list`"
      :get-popup-container="getPopupContainer"
    >
      <template #title>
        <div :class="`${prefixCls}__popover-title`">
          <Checkbox
            :indeterminate="indeterminate"
            v-model:checked="isColumnAllSelected"
            @change="onColumnAllSelectChange"
          >
            {{ t("component.table.settingColumnShow") }}
          </Checkbox>

          <Checkbox v-model:checked="isIndexColumnShow" @change="onIndexColumnShowChange">
            {{ t("component.table.settingIndexColumnShow") }}
          </Checkbox>
          <!-- 设置了 rowSelection 才出现 -->
          <Checkbox
            v-model:checked="isRowSelectionShow"
            @change="onRowSelectionShowChange"
            v-if="defaultIsRowSelectionShow"
          >
            {{ t("component.table.settingSelectColumnShow") }}
          </Checkbox>

          <a-button size="small" type="link" @click="onReset">
            {{ t("common.resetText") }}
          </a-button>
          <a-button size="small" type="link" color="success" @click="onSave">
            {{ t("common.saveText") }}
          </a-button>
        </div>
      </template>

      <template #content>
        <ScrollContainer>
          <Checkbox.Group v-model:value="columnCheckedOptions" ref="columnOptionsRef">
            <template v-for="opt in columnOptions" :key="opt.value">
              <div :class="`${prefixCls}__check-item`" :data-no="opt.value">
                <DragOutlined class="table-column-drag-icon" />
                <Checkbox :value="opt.value">
                  {{ opt.label }}
                </Checkbox>

                <Tooltip placement="bottomLeft" :mouse-leave-delay="0.4" :get-popup-container="getPopupContainer">
                  <template #title>
                    {{ t("component.table.settingFixedLeft") }}
                  </template>
                  <Icon
                    icon="line-md:arrow-align-left"
                    :class="[
                      `${prefixCls}__fixed-left`,
                      {
                        active: opt.fixed === 'left',
                        disabled: opt.value ? !columnCheckedOptions.includes(opt.value) : true
                      }
                    ]"
                    @click="onColumnFixedChange(opt, 'left')"
                  />
                </Tooltip>
                <Divider type="vertical" />
                <Tooltip placement="bottomLeft" :mouse-leave-delay="0.4" :get-popup-container="getPopupContainer">
                  <template #title>
                    {{ t("component.table.settingFixedRight") }}
                  </template>
                  <Icon
                    icon="line-md:arrow-align-left"
                    :class="[
                      `${prefixCls}__fixed-right`,
                      {
                        active: opt.fixed === 'right',
                        disabled: opt.value ? !columnCheckedOptions.includes(opt.value) : true
                      }
                    ]"
                    @click="onColumnFixedChange(opt, 'right')"
                  />
                </Tooltip>
              </div>
            </template>
          </Checkbox.Group>
        </ScrollContainer>
      </template>
      <SettingOutlined />
    </Popover>
  </Tooltip>
</template>
<script lang="ts" setup>
  import type { BasicColumn, ColumnChangeParam, ColumnOptionsType, TableRowSelection } from "../../types/Table";
  import { computed, nextTick, onMounted, ref, unref, watch } from "vue";
  import { Checkbox, Divider, Popover, Tooltip } from "ant-design-vue";
  import type { CheckboxChangeEvent } from "ant-design-vue/lib/checkbox/interface";
  import { DragOutlined, SettingOutlined } from "@ant-design/icons-vue";
  import { Icon } from "@core/components/Icon";
  import { ScrollContainer } from "@core/components/Container";
  import { useDesign, useI18n } from "@core/hooks";
  import { useTableContext } from "../../hooks/UseTableContext";
  import { isFunction } from "@core/utils/Is";
  import { getPopupContainer as getParentContainer } from "@core/utils";
  import { cloneDeep, isNil, omit } from "lodash-es";
  import Sortablejs from "sortablejs";
  import { useRoute } from "vue-router";
  import { Recordable } from "@mfish/types";
  import { INDEX_COLUMN_FLAG } from "@core/components/Table/src/Const";
  import { useTableSettingStore } from "@mfish/stores/modules";
  import { saveSysConfig } from "@/api/sys/SysConfig";

  defineOptions({ name: "ColumnSetting" });
  const props = defineProps({
    title: {
      type: String,
      default: ""
    },
    getPopupContainer: {
      type: Function,
      default: () => {
        return getParentContainer();
      }
    }
  });

  const emit = defineEmits(["columnsChange"]);
  const tableSettingStore = useTableSettingStore();
  const tableKey: string = (useRoute().name as string) + props.title;
  const { t } = useI18n();
  const { prefixCls } = useDesign("basic-column-setting");
  const table = useTableContext();
  const getPopupContainer = () => {
    return isFunction(props.getPopupContainer) ? props.getPopupContainer() : getParentContainer();
  };

  // 默认值
  let defaultIsIndexColumnShow: boolean = false;
  let defaultIsRowSelectionShow: boolean = false;
  let defaultRowSelection: TableRowSelection<Recordable>;
  let defaultColumnOptions: ColumnOptionsType[] = [];

  // 是否已经从缓存恢复
  let isRestored = false;
  let isInnerChange = false;

  // 列可选项
  const columnOptions = ref<ColumnOptionsType[]>([]);
  const columnOptionsRef = ref(null);
  // 已选列
  const columnCheckedOptions = ref<string[]>([]);
  // 已选变化
  watch(columnCheckedOptions, () => {
    // 恢复缓存后生效
    if (isRestored) {
      // 显示
      columnOptions.value
        .filter((o) => columnCheckedOptions.value.includes(o.value))
        .forEach((o) => {
          o.column.defaultHidden = false;
        });
      // 隐藏
      columnOptions.value
        .filter((o) => !columnCheckedOptions.value.includes(o.value))
        .forEach((o) => {
          o.column.defaultHidden = true;
          o.fixed = undefined;
        });
      // 从 列可选项 更新 全选状态
      isColumnAllSelectedUpdate();

      // 列表列更新
      tableColumnsUpdate();
      // 更新列缓存
      columnOptionsSave();
    }
  });

  // 全选
  const isColumnAllSelected = ref<boolean>(false);
  const onColumnAllSelectChange = () => {
    if (columnCheckedOptions.value.length < columnOptions.value.length) {
      columnCheckedOptions.value = columnOptions.value.map((o) => o.value);
    } else {
      columnCheckedOptions.value = [];
    }
  };

  // 半选状态
  const indeterminate = computed(() => {
    return columnCheckedOptions.value.length > 0 && columnCheckedOptions.value.length < columnOptions.value.length;
  });

  // 是否显示序号列
  const isIndexColumnShow = ref<boolean>(false);
  // 序号列更新
  const onIndexColumnShowChange = (e: CheckboxChangeEvent) => {
    // 更新 showIndexColumn
    showIndexColumnUpdate(e.target.checked);
    // 更新 showIndexColumn 缓存
    tableSettingStore.setShowIndexColumn(tableKey, e.target.checked);
  };

  // 是否显示选择列
  const isRowSelectionShow = ref<boolean>(false);
  // 选择列更新
  const onRowSelectionShowChange = (e: CheckboxChangeEvent) => {
    // 更新 showRowSelection
    showRowSelectionUpdate(e.target.checked);
    // 更新 showRowSelection 缓存
    tableSettingStore.setShowRowSelection(tableKey, e.target.checked);
  };

  // 更新列缓存
  const columnOptionsSave = () => {
    tableSettingStore.setColumns(tableKey, columnOptions.value);
  };

  // 重置
  const onReset = () => {
    // 重置默认值
    isIndexColumnShow.value = defaultIsIndexColumnShow;
    // 序号列更新
    onIndexColumnShowChange({
      target: { checked: defaultIsIndexColumnShow }
    } as CheckboxChangeEvent);
    // 重置默认值
    isRowSelectionShow.value = defaultIsRowSelectionShow;
    // 选择列更新
    onRowSelectionShowChange({
      target: { checked: defaultIsRowSelectionShow }
    } as CheckboxChangeEvent);
    // 重置默认值
    columnOptions.value = cloneDeep(defaultColumnOptions);
    // 更新表单状态
    formUpdate();
  };

  const onSave = () => {
    saveSysConfig({ config: JSON.stringify(tableSettingStore.getTableSetting), type: 1 });
  };
  // 设置列的 fixed
  const onColumnFixedChange = (opt: ColumnOptionsType, type: "left" | "right") => {
    if (type === "left") {
      opt.fixed = !opt.fixed || opt.fixed === "right" ? "left" : undefined;
    } else if (type === "right") {
      opt.fixed = !opt.fixed || opt.fixed === "left" ? "right" : undefined;
    }

    // 列表列更新
    tableColumnsUpdate();
    // 更新列缓存
    columnOptionsSave();
  };

  // 沿用逻辑
  const sortableFix = async () => {
    // Sortablejs存在bug，不知道在哪个步骤中会向el append了一个childNode，因此这里先清空childNode
    // 有可能复现上述问题的操作：拖拽一个元素，快速的上下移动，最后放到最后的位置中松手
    if (columnOptionsRef.value) {
      const el = (columnOptionsRef.value as InstanceType<typeof Checkbox.Group>).$el;
      [...el.children].forEach((item) => item.remove());
    }
    await nextTick();
  };

  // 列是否显示逻辑
  const columnIfShow = (column?: Partial<Omit<BasicColumn, "children">>) => {
    if (column) {
      if ("ifShow" in column) {
        if (typeof column.ifShow === "boolean") {
          return column.ifShow;
        } else if (column.ifShow) {
          return column.ifShow(column);
        }
      }
      return true;
    }
    return false;
  };

  // 获取数据列
  const getTableColumns = () => {
    return table.getColumns({ ignoreIndex: true, ignoreAction: true }).filter((col) => columnIfShow(col));
  };

  // 设置列表列
  const tableColumnsSet = (columns: BasicColumn[]) => {
    isInnerChange = true;
    table?.setColumns(columns);

    // 沿用逻辑
    const columnChangeParams: ColumnChangeParam[] = columns.map((col) => ({
      dataIndex: col.dataIndex ? col.dataIndex.toString() : "",
      fixed: col.fixed,
      visible: !col.defaultHidden
    }));
    emit("columnsChange", columnChangeParams);
  };

  // 列表列更新
  const tableColumnsUpdate = () => {
    // 考虑了所有列
    const columns = cloneDeep(table.getColumns());
    // 从左 fixed 最一列开始排序（除了 序号列）
    let count = columns.filter((o) => o.flag !== INDEX_COLUMN_FLAG && (o.fixed === "left" || o.fixed === true)).length;

    // 序号列提前
    if (isIndexColumnShow.value) {
      count++;
    }

    // 按 columnOptions 的排序 调整 table.getColumns() 的顺序和值
    for (const opt of columnOptions.value) {
      const colIdx = columns.findIndex((o) => o.dataIndex === opt.value);
      //
      if (colIdx !== -1) {
        const target = columns[colIdx];
        target.defaultHidden = opt.column?.defaultHidden;
        target.fixed = opt.fixed;
        columns.splice(colIdx, 1);
        columns.splice(count++, 0, target); // 递增插入
      }
    }

    // 是否存在 action
    const actionIndex = columns.findIndex((o) => o.dataIndex === "action");
    if (actionIndex !== -1) {
      const actionCol = columns.splice(actionIndex, 1);
      columns.push(actionCol[0]);
    }

    // 设置列表列
    tableColumnsSet(columns);
  };

  // 打开浮窗
  const onOpenChange = async () => {
    await nextTick();

    if (columnOptionsRef.value) {
      // 注册排序实例
      const el = (columnOptionsRef.value as InstanceType<typeof Checkbox.Group>).$el;
      Sortablejs.create(unref(el), {
        animation: 500,
        delay: 400,
        delayOnTouchOnly: true,
        handle: ".table-column-drag-icon ",
        dataIdAttr: "data-no",
        onEnd: (evt) => {
          const { oldIndex, newIndex } = evt;
          if (isNil(oldIndex) || isNil(newIndex) || oldIndex === newIndex) {
            return;
          }

          const options = cloneDeep(columnOptions.value);

          // 排序
          if (oldIndex > newIndex) {
            options.splice(newIndex, 0, options[oldIndex]);
            options.splice(oldIndex + 1, 1);
          } else {
            options.splice(newIndex + 1, 0, options[oldIndex]);
            options.splice(oldIndex, 1);
          }
          // 更新 列可选项
          columnOptions.value = options;
          // 列表列更新
          tableColumnsUpdate();
          // 更新列缓存
          columnOptionsSave();
        }
      });
    }
  };

  // remove消失的列、push新出现的列
  const diff = () => {
    let cache = tableSettingStore.getColumns(tableKey);
    // value、label是否一致
    if (
      cache &&
      JSON.stringify(columnOptions.value.map((o) => ({ value: o.value, label: o.label }))) !==
        JSON.stringify(cache.map((o: any) => ({ value: o.value, label: o.label })))
    ) {
      const map = columnOptions.value.reduce((map: any, item: any) => {
        map[item.value] = item.label;
        return map;
      }, {});
      if (Array.isArray(cache)) {
        // remove消失的列
        cache = cache.filter((o) => map[o.value]);
        // 更新label
        cache.forEach((o: any) => {
          o.label = map[o.value];
        });
        const cacheKeys = new Set(cache.map((o: any) => o.value));
        // push新出现的列
        cache = [...cache, ...columnOptions.value.filter((o) => !cacheKeys.has(o.value))];
        // 更新缓存
        tableSettingStore.setColumns(tableKey, cache);
      }
    }
  };

  // 从缓存恢复
  const restore = () => {
    const isIndexColumnShowCache = tableSettingStore.getShowIndexColumn(tableKey);
    // 设置过才恢复
    if (typeof isIndexColumnShowCache === "boolean") {
      isIndexColumnShow.value = defaultIsIndexColumnShow && isIndexColumnShowCache;
    }
    const isRowSelectionShowCache = tableSettingStore.getShowRowSelection(tableKey);
    // 设置过才恢复
    if (typeof isRowSelectionShowCache === "boolean") {
      isRowSelectionShow.value = defaultIsRowSelectionShow && isRowSelectionShowCache;
    }
    // 序号列更新
    onIndexColumnShowChange({
      target: { checked: isIndexColumnShow.value }
    } as CheckboxChangeEvent);
    // 选择列更新
    onRowSelectionShowChange({
      target: { checked: isRowSelectionShow.value }
    } as CheckboxChangeEvent);

    const cache = tableSettingStore.getColumns(tableKey);
    // 设置过才恢复
    if (Array.isArray(cache)) {
      columnOptions.value = cache;
    }
  };

  // 从 列可选项 更新 已选列
  const columnCheckedOptionsUpdate = () => {
    columnCheckedOptions.value = columnOptions.value.filter((o) => !o.column?.defaultHidden).map((o) => o.value);
  };
  // 从 列可选项 更新 全选状态
  const isColumnAllSelectedUpdate = () => {
    isColumnAllSelected.value = columnOptions.value.length === columnCheckedOptions.value.length;
  };
  // 更新 showIndexColumn
  const showIndexColumnUpdate = (showIndexColumn: any) => {
    isInnerChange = true;
    table.setProps({
      showIndexColumn
    });
  };
  // 更新 rowSelection
  const showRowSelectionUpdate = (showRowSelection: any) => {
    isInnerChange = true;
    table.setProps({
      rowSelection: showRowSelection
        ? {
            ...omit(defaultRowSelection, ["selectedRowKeys"]),
            fixed: true
          }
        : undefined
    });
  };

  // 更新表单状态
  const formUpdate = () => {
    // 从 列可选项 更新 已选列
    columnCheckedOptionsUpdate();
    // 从 列可选项 更新 全选状态
    isColumnAllSelectedUpdate();
    // 更新 showIndexColumn
    showIndexColumnUpdate(isIndexColumnShow.value);
    // 更新 showRowSelection
    showRowSelectionUpdate(isRowSelectionShow.value);
    // 列表列更新
    tableColumnsUpdate();
  };

  const init = async () => {
    if (!isRestored) {
      // 获取数据列
      const columns = getTableColumns();
      // 沿用逻辑
      table.setCacheColumns?.(columns);
      // 生成 默认值
      const options: ColumnOptionsType[] = [];
      for (const col of columns) {
        // 只缓存 string 类型的列
        options.push({
          label: typeof col.title === "string" ? col.title : typeof col.customTitle === "string" ? col.customTitle : "",
          value: typeof col.dataIndex === "string" ? col.dataIndex : typeof col.title === "string" ? col.title : "",
          column: {
            defaultHidden: col.defaultHidden
          },
          fixed: col.fixed
        });
      }
      // 默认值 缓存
      defaultIsIndexColumnShow = table.getBindValues.value.showIndexColumn || false;
      defaultRowSelection = table.getRowSelection();
      defaultIsRowSelectionShow = !!defaultRowSelection; // 设置了 rowSelection 才出现
      defaultColumnOptions = options;
      // 默认值 赋值
      isIndexColumnShow.value = defaultIsIndexColumnShow;
      isRowSelectionShow.value = defaultIsRowSelectionShow;
      columnOptions.value = cloneDeep(options);
      // remove消失的列、push新出现的列
      diff();
      // 从缓存恢复
      restore();
      // 更新表单状态
      formUpdate();
      isRestored = true;
    }
  };

  // 初始化
  const once = async () => {
    // 仅执行一次
    await sortableFix();
    init().then();
  };
  once();

  // 外部列改变
  const getColumns = computed(() => {
    return table?.getColumns();
  });
  const getValues = computed(() => {
    return table?.getBindValues;
  });

  onMounted(() => {
    watch([getColumns, getValues], () => {
      if (isInnerChange) {
        isInnerChange = false;
      } else {
        isRestored = false;
        init();
      }
    });
  });
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-basic-column-setting";

  .table-column-drag-icon {
    margin: 0 5px;
    cursor: move;
  }

  .@{prefix-cls} {
    &__popover-title {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: space-between;
    }

    &__check-item {
      display: flex;
      align-items: center;
      min-width: 100%;
      padding: 4px 16px 8px 0;

      .ant-checkbox-wrapper {
        width: 100%;

        &:hover {
          color: @button-primary-color;
        }
      }
    }

    &__fixed-left,
    &__fixed-right {
      cursor: pointer;

      &.active,
      &:hover {
        color: @button-primary-color;
      }

      &.disabled {
        cursor: not-allowed;
      }
    }

    &__fixed-right {
      transform: rotate(180deg);
    }

    &__column-list {
      svg {
        width: 1em !important;
        height: 1em !important;
      }

      .ant-popover-inner-content {
        padding-right: 0;
        padding-left: 0;
      }

      .ant-checkbox-group {
        display: inline-block;
        width: 100%;
        min-width: 260px;
      }

      .scrollbar {
        height: 220px;
      }
    }
  }
</style>
