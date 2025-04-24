<!--
 @description: 自助API
 @author: mfish
 @date: 2023/8/4
-->
<template>
  <div :class="prefixCls">
    <HeaderBar :title="title" :right-actions="barActions" />
    <div class="config-container">
      <div style="position: relative; height: 100%; width: 100%">
        <div :style="firstPaneStyle">
          <ScrollContainer>
            <div class="api-config">
              <ApiConfig
                :config-key="configKey"
                :sql-query="config.sqlQuery"
                :level="apiStore.getLevel"
                @config-change="configChange"
                :config-mitt="configMitt"
                :query-mode="queryMode"
              />
              <ASpin style="display: flex; justify-content: center" :spinning="loading" />
            </div>
          </ScrollContainer>
        </div>
        <div :style="secondPaneStyle">
          <div
            class="data-panel"
            :style="showData ? { '--hover-cursor--': 'row-resize' } : { '--hover-cursor--': 'auto' }"
            @mousedown="moveDataPanel"
            @click.stop
          >
            <div class="show-data" @click="switchShowData">
              <IconFont :color="themeColor" icon="icon-mfish-table" />
              <span>结果集</span>
              <Icon v-if="showData" icon="ant-design:caret-down-outlined" :color="themeColor" />
              <Icon v-else icon="ant-design:caret-up-outlined" :color="themeColor" />
            </div>
          </div>
          <ScrollContainer class="data-table">
            <BasicTable @register="registerDataTable" />
          </ScrollContainer>
        </div>
      </div>
    </div>
    <SqlQueryModal @register="registerQueryModal" />
    <ParamsModal @register="registerParamsModal" @submit="paramQuery" />
    <MfApiModal v-if="!queryMode" @register="registerMfApiModal" @success="saveSuccess" />
  </div>
</template>
<script setup lang="ts">
  import { computed, type CSSProperties, nextTick, onBeforeMount, onMounted, onUnmounted, reactive, ref } from "vue";
  import { useRoute } from "vue-router";
  import { useDesign, useMessage, useRootSetting } from "@mfish/core/hooks";
  import { useModal } from "@mfish/core/components/Modal";
  import {
    API_SAVE,
    ApiConfig,
    ApiConfigEvent,
    buildSql,
    getApiParamsList,
    getInnerFields,
    getMfApiById,
    getMfApiByResourceId,
    getParams,
    getQueryData,
    getSourceHeaders,
    getTablesByResourceId,
    Join,
    listenGlobalKeyboard,
    MfApi,
    ParamsModal,
    SqlQuery,
    SqlQueryModal,
    UndoRedoManager,
    useApiShortcut,
    useApiStore
  } from "@mfish/nocode";
  import HeaderBar from "@/components/nocode/common/HeaderBar/HeaderBar.vue";
  import { ScrollContainer } from "@mfish/core/components/Container";
  import { Icon, IconFont } from "@mfish/core/components/Icon";
  import { BasicColumn, BasicTable, useTable } from "@mfish/core/components/Table";
  import { HeaderBarAction } from "@/components/nocode/common/HeaderBar/HeaderBarUtils";
  import { useDebounceFn } from "@vueuse/core";
  import { mitt } from "@mfish/core/utils/Mitt";
  import MfApiModal from "@/views/nocode/mf-api/MfApiModal.vue";
  import { router } from "@mfish/core/router";
  import { useOutsideOpen } from "@mfish/core/utils/OutsideOpenUtils";
  import { Spin as ASpin } from "ant-design-vue";
  import { getTableList, PageResult, TableInfo } from "@mfish/core/api";

  const configKey = ref(1);
  const { query } = useRoute();
  const { prefixCls } = useDesign("mf-api");
  const split = ref<string>("1000px");
  const config = reactive<{ sqlQuery: SqlQuery }>({
    sqlQuery: {
      schema: "",
      sourceTable: "",
      fields: [],
      joins: [],
      filters: undefined,
      aggregates: undefined,
      groups: undefined,
      orders: undefined,
      customColumns: undefined,
      limit: undefined,
      sqlQuery: undefined
    }
  });
  const mfApi = ref<MfApi>({});
  const curSqlQuery = ref<SqlQuery>();
  const curParams = ref<any>({});
  const apiStore = useApiStore();
  const [registerQueryModal, { openModal: openQueryModal }] = useModal();
  const [registerParamsModal, { openModal: openParamsModal }] = useModal();
  const [registerMfApiModal, { openModal: openMfApiModal }] = useModal();
  const title = ref<string>("");
  const loading = ref<boolean>(false);
  const setTitle = (t: string) => {
    title.value = `API配置-${t}`;
    document.title = title.value;
  };
  const themeColor = useRootSetting().getThemeColor;
  const configMitt = mitt();
  const [
    registerDataTable,
    { setColumns, setTableData: setDataTable, setPagination, setLoading: tableLoading, redoHeight, setProps }
  ] = useTable({
    bordered: true,
    showIndexColumn: false
  });
  const buildTableData = useDebounceFn((page?) => {
    tableLoading(true);
    let pageNum = 1;
    let pageSize = 10;
    if (page) {
      pageNum = page.current;
      pageSize = page.pageSize;
    }
    getQueryData(
      {
        sourceId: apiStore.getSourceId,
        sourceType: apiStore.getSourceType,
        sqlQuery: curSqlQuery.value || {},
        params: curParams.value
      },
      { pageNum, pageSize }
    )
      .then((res) => {
        const columns: BasicColumn[] = Object.values(res.headers)
          .sort((a: any, b: any) => a.index - b.index)
          .map((value) => ({
            title: value.colName,
            dataIndex: value.colName
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
  }, 200);
  const showData = computed(() => apiStore.getShowData);
  const isUpdate = ref<boolean>(false);
  const { createMessage } = useMessage();
  const undoRedoManager = new UndoRedoManager(100);
  const screenId = ref<string>();
  const queryMode = computed(() => {
    return !!screenId.value;
  });
  const barActions = ref<HeaderBarAction[]>([
    {
      icon: "ant-design:undo-outlined",
      label: "撤回",
      click: undoClick,
      tooltip: "撤回 (CTRL+Z)",
      disabled: queryMode
    },
    {
      icon: "ant-design:redo-outlined",
      label: "重做",
      click: redoClick,
      tooltip: "重做 (CTRL+SHIFT+Z)",
      disabled: queryMode
    },
    {
      showDivider: true,
      icon: "ant-design:save-outlined",
      label: "保存",
      click: saveClick,
      tooltip: "保存 (CTRL+S)",
      disabled: queryMode
    }
  ]);

  onBeforeMount(async () => {
    setSplitValue().then();
    const configId = query.configId as string;
    screenId.value = query.screenId as string;
    const initData = async (mfApi: MfApi) => {
      try {
        apiStore.setSourceId(mfApi.sourceId || "");
        apiStore.setSourceType(mfApi.sourceType || 0);
        if (mfApi.sourceType === 0) {
          let pageTable: PageResult<TableInfo>;
          if (screenId.value) {
            pageTable = await getTablesByResourceId(`${screenId.value},${configId}`);
          } else {
            pageTable = await getTableList({
              connectId: apiStore.getSourceId,
              pageNum: 1,
              pageSize: 10_000
            });
          }
          apiStore.setTableList(pageTable);
        }
        const sqlQuery: SqlQuery = mfApi.config
          ? JSON.parse(mfApi.config)
          : { ...config.sqlQuery, schema: query.tableSchema, sourceTable: query.tableName };
        await getAllTableFields(sqlQuery);
        setTitle(mfApi.name || apiStore.tableName);
        configMitt.on(ApiConfigEvent.QUERY_DATA, queryData);
        configMitt.on(ApiConfigEvent.QUERY_SQL, querySql);
        return sqlQuery;
      } finally {
        loading.value = false;
      }
    };
    loading.value = true;
    if (configId) {
      if (screenId.value) {
        mfApi.value = await getMfApiByResourceId(`${screenId.value},${configId}`);
        mfApi.value.id = configId;
      } else {
        mfApi.value = await getMfApiById(configId);
      }
      if (!mfApi.value || !mfApi.value.config) {
        createMessage.error("错误:API配置信息不存在或没权限");
        return;
      }
      isUpdate.value = query.folderId === undefined;
      //如果存在配置和文件夹id，说明是克隆，修改名称
      if (!isUpdate.value) {
        mfApi.value.name = `${mfApi.value.name}_副本`;
      }
      getApiParamsList({ apiId: configId, pageNum: 1, pageSize: 10_000 }).then((res) =>
        apiStore.getVariables.push(...res.list)
      );
      initData(mfApi.value).then((sqlQuery: SqlQuery) => {
        config.sqlQuery = sqlQuery;
        apiStore.setLevel(calcLevel(sqlQuery));
        undoRedoManager.setData(sqlQuery);
      });
      return;
    }
    isUpdate.value = false;
    mfApi.value.sourceId = query.sourceId as string;
    mfApi.value.sourceType = Number.parseInt(query.sourceType as string);
    initData(mfApi.value).then((sqlQuery) => {
      config.sqlQuery = { ...sqlQuery, fields: apiStore.getTableFields };
      undoRedoManager.setData(config.sqlQuery);
    });
  });
  let globalKeyboard: any;

  onMounted(() => {
    setProps({ onChange: buildTableData });
    globalKeyboard = listenGlobalKeyboard(useApiShortcut(undoClick, redoClick, saveClick));
  });

  onUnmounted(() => {
    globalKeyboard.removeGlobalKeyboard();
  });
  const firstPaneStyle = computed((): CSSProperties => {
    const sp = Number.parseFloat(split.value.replaceAll("px", ""));
    return {
      top: 0,
      position: "absolute",
      width: "100%",
      bottom: `${100 - (sp * 100) / document.body.clientHeight}%`
    };
  });
  const secondPaneStyle = computed((): CSSProperties => {
    const sp = Number.parseFloat(split.value.replaceAll("px", ""));
    return {
      bottom: 0,
      position: "absolute",
      width: "100%",
      top: `${(sp * 100) / document.body.clientHeight}%`
    };
  });
  window.addEventListener("resize", () => {
    return (() => {
      setSplitValue();
    })();
  });

  async function getAllTableFields(sqlQuery: SqlQuery) {
    let query = sqlQuery;
    const setTableFields = async (tableName: string | undefined) => {
      if (!tableName) return;
      const tableFields = await getSourceHeaders({
        sourceId: apiStore.getSourceId,
        tableName,
        sourceType: apiStore.getSourceType
      });
      apiStore.addTableFieldsMap(tableName, tableFields);
    };
    const setJoinFields = async (joins: Join[] | undefined) => {
      if (!joins) return;
      for (const join of joins) {
        setTableFields(join.table).then();
      }
    };
    while (query.sqlQuery) {
      const res = await getInnerFields(query);
      apiStore.addTableFieldsMap(query?.sourceTable, res);
      await setJoinFields(query.joins);
      query = query.sqlQuery;
    }
    await setJoinFields(query.joins);
    await apiStore.setTableFields(apiStore.getSourceId, query.sourceTable);
    apiStore.setTableName(query.sourceTable);
  }

  function configChange(data: SqlQuery, levelChange: boolean) {
    config.sqlQuery = JSON.parse(JSON.stringify(data));
    // 判断层级是否变化
    if (levelChange) {
      configKey.value++;
      apiStore.setLevel(calcLevel(data));
    }
    undoRedoManager.setData(data);
  }

  function calcLevel(data: SqlQuery) {
    let i = 1;
    let query = data.sqlQuery;
    while (query) {
      i++;
      query = query.sqlQuery;
    }
    return i;
  }

  async function querySql(sqlQuery: SqlQuery) {
    buildSql(sqlQuery).then((res) => {
      openQueryModal(true, res);
    });
  }

  async function queryData({ sqlQuery, level }) {
    curSqlQuery.value = sqlQuery;
    const params = getParams(sqlQuery);
    // 如果有变量参数，需要输入参数值后查询
    if (params && params.size > 0) {
      openParamsModal(true, { params, level });
      return;
    }
    paramQuery({}, level);
  }

  function paramQuery(data: any, level: number) {
    curParams.value = data;
    buildTableData();
    if (!apiStore.getShowData) {
      apiStore.setShowData(true);
      setSplitValue();
    }
    apiStore.setShowDataLevel(level);
  }

  function switchShowData() {
    apiStore.setShowData(!showData.value);
    setSplitValue();
  }

  async function setSplitValue() {
    const clientHeight = document.body.clientHeight;
    if (apiStore.getShowData) {
      split.value = `${(clientHeight - 84) / 2}px`;
      await nextTick();
      redoHeight();
    } else {
      split.value = `${clientHeight - 42}px`;
    }
  }

  function moveDataPanel(e: any) {
    if (!apiStore.getShowData) return;
    const moveY = e.y - Number.parseInt(split.value.replaceAll("px", ""));
    const maxY = document.body.clientHeight - 42;
    const move = (e: any) => {
      let splitHeight = e.y - moveY;
      if (splitHeight <= 0) {
        splitHeight = 0;
      }
      if (splitHeight >= maxY) {
        splitHeight = maxY;
      }
      split.value = `${splitHeight}px`;
    };
    const up = () => {
      redoHeight();
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
  }

  function undoClick() {
    const sqlQuery = undoRedoManager.undo();
    if (sqlQuery) {
      config.sqlQuery = sqlQuery;
      configKey.value++;
    }
  }

  function redoClick() {
    const sqlQuery = undoRedoManager.redo();
    if (sqlQuery) {
      config.sqlQuery = sqlQuery;
      configKey.value++;
    }
  }

  function saveClick() {
    const useParams = getParams(config.sqlQuery);
    const paramFlag: number = useParams && useParams.size > 0 ? 1 : 0;
    const params = apiStore.getVariables.map((item) => {
      return { ...item, isUse: (item.isUse = item.name && useParams.has(item.name) ? 1 : 0) };
    });
    const record: MfApi = isUpdate.value
      ? { ...mfApi.value, params, paramFlag, config: JSON.stringify(config.sqlQuery) }
      : {
          name: mfApi.value.name || apiStore.tableName,
          remark: title.value,
          sourceType: apiStore.sourceType,
          queryType: 0,
          paramFlag,
          params,
          sourceId: apiStore.sourceId,
          config: JSON.stringify(config.sqlQuery)
        };
    openMfApiModal(true, {
      record,
      isUpdate
    });
  }

  const { end } = useOutsideOpen(API_SAVE);

  function saveSuccess(values: MfApi) {
    // 如果是新增更换参数
    if (!isUpdate.value) {
      router.replace({ query: { configId: values.id } });
    }
    isUpdate.value = true;
    if (values.name) {
      setTitle(values.name);
    }
    mfApi.value = { ...values };
    end();
  }
</script>
<style scoped lang="less">
  @prefix-cls: ~"@{namespace}-mf-api";
  [data-theme="dark"] {
    .@{prefix-cls} {
      .config-container {
        .data-panel {
          background: @header-bg-color;
          box-shadow: 0 0 3px 0 #303030;
        }
      }

      .api-config {
        background: @header-bg-color;
      }
    }
  }

  .@{prefix-cls} {
    .config-container {
      height: calc(100vh - 48px);

      .api-config {
        width: max-content;
        max-width: 100%;
        height: 100%;
        margin: 15px;
      }

      .data-panel {
        width: 100%;
        position: relative;
        padding-left: 50px;
        height: 42px;
        background: @component-background;
        box-shadow: 0 0 3px 0 @border-color-base;
        display: flex;
        align-items: center;
        z-index: 10;
        //border-top: 1px solid @border-color-base;
        .show-data {
          cursor: pointer;

          > span {
            padding: 6px;
          }
        }

        &:hover {
          cursor: var(--hover-cursor--);
        }
      }

      .data-table {
        height: calc(100% - 42px);
        top: -5px;
      }
    }
  }
</style>
