---
name: frontend-crud
description: 为 mfish-nocode-pro 项目前端（Vue3 + TypeScript）生成标准增删改查页面代码，包括 Model、API、data、index.vue、Modal、ViewModal 六个文件。当用户说"帮我生成前端增删改查"、"新增前端页面"、"生成前端CRUD"时使用此 skill。
---

# 前端 CRUD 代码生成器

## 项目前端架构

```
mfish-nocode-view/src/
├── api/
│   └── {apiPrefix}/              # 如：sys、demo、nocode
│       ├── model/
│       │   └── {类名}Model.ts    # 接口类型定义
│       └── {类名}.ts             # API 请求函数
└── views/
    └── {apiPrefix}/
        └── {entity-kebab-case}/  # 如：demo-order、sys-dict
            ├── {变量名}.data.ts   # 表格列、搜索表单、表单Schema、详情Schema
            ├── index.vue          # 列表页主页面
            ├── {类名}Modal.vue    # 新增/编辑弹窗
            └── {类名}ViewModal.vue # 详情查看弹窗
```

## 技术栈约定

- 框架：**Vue 3** + **TypeScript** + `<script lang="ts" setup>`
- HTTP：`defHttp`（来自 `@mfish/core/utils/http/axios`）
- 表格：`BasicTable` + `useTable`（来自 `@mfish/core/components/Table`）
- 弹窗：`BasicModal` + `useModal` / `useModalInner`（来自 `@mfish/core/components/Modal`）
- 表单：`BasicForm` + `useForm`（来自 `@mfish/core/components/Form`）
- 详情：`Description` + `useDescription`（来自 `@mfish/core/components/Description`）
- 字典：`buildDictTag` + `getDictProps`（来自 `@mfish/core/components/DictTag`）
- 权限：`v-auth="'{apiPrefix}:{entityName}:操作'"`（insert/update/delete/query/export）
- 基础类型：`BaseEntity<string>`、`PageResult<T>`、`ReqPage`（来自 `@mfish/core/api`）
- ID 类型：默认 `string`，数值型主键时为 `number`

---

## ⚠️ 严重警告：popConfirm 与 onClick 绝对不能同时使用

**AI 经常犯这个错误，必须严格遵守以下规则：**

### ❌ 错误示例（会导致方法被调用两次）

```typescript
// 严重错误！不要这样做！
{
  icon: 'ant-design:cloud-upload-outlined',
  onClick: handlePublish.bind(null, record),  // ❌ 第一次调用
  auth: 'workflow:flowManage:publish',
  color: 'warning',
  tooltip: '发布',
  popConfirm: {
    title: '是否确认发布',
    confirm: handlePublish.bind(null, record)  // ❌ 第二次调用
  }
}
```

### ✅ 正确示例

**使用 popConfirm（需要二次确认）：**
```typescript
{
  icon: 'ant-design:cloud-upload-outlined',
  // 注意：没有 onClick
  auth: 'workflow:flowManage:publish',
  color: 'warning',
  tooltip: '发布',
  ifShow: () => record.released !== 1,
  popConfirm: {
    title: '是否确认发布',
    placement: 'left',
    confirm: handlePublish.bind(null, record)
  }
}
```

**使用 onClick（不需要确认）：**
```typescript
{
  icon: 'ant-design:info-circle-outlined',
  onClick: handleQuery.bind(null, record),
  // 注意：没有 popConfirm
  auth: 'workflow:flowManage:query',
  color: 'success',
  tooltip: '查看'
}
```

### 检查清单（生成代码后必须检查）

- [ ] 如果使用了 `popConfirm`，是否有 `onClick`？如果有，**立即删除**
- [ ] 如果使用了 `onClick`，是否有 `popConfirm`？如果有，**立即删除**
- [ ] **两者只能存在一个，绝对不能同时使用**

### 什么时候用哪个？

**使用 popConfirm（需要二次确认）：**
- 删除操作
- 发布操作
- 撤回操作
- 审核操作
- 批量操作
- 任何不可逆或影响数据的操作

**使用 onClick（不需要确认）：**
- 查看
- 编辑
- 下载
- 其他安全的操作

---

## ⚠️ 严格禁止：绝对不要修改用户未要求的代码

**这是最重要的规则，必须严格遵守：**

### ❌ 严重错误

用户要求：“已发布的流程不允许修改和删除”

AI 错误做法（**绝对不要这样做**）：
```typescript
// ❌ 错误：擅自修改了权限配置
{
  icon: 'ant-design:cloud-upload-outlined',
  auth: 'workflow:flowManage:publish',  // ❌ 用户没让你改这个！
  color: 'warning',
  tooltip: '发布',
  ifShow: () => record.released !== 1
}
```

### ✅ 正确做法

用户要求什么，就只做什么：
```typescript
// ✅ 正确：只添加 ifShow，其他保持不变
{
  icon: 'ant-design:cloud-upload-outlined',
  auth: 'workflow:flowManage:update',  // 保持用户的原配置不动
  color: 'warning',
  tooltip: '发布',
  ifShow: () => record.released !== 1  // 只添加用户要求的这一行
}
```

### 严格遵守的原则

1. **只修改用户明确要求修改的部分**
2. **绝对不要修改用户未提及的代码**
3. **即使用户代码“看起来有问题”，也不要擅自修改**
4. **如果认为有其他问题，应该询问用户，而不是直接修改**
5. **用户的代码可能是经过深思熟虑的配置，AI 无权擅自修改**

### 检查清单（每次修改代码前必须确认）

- [ ] 我是否只修改了用户明确要求修改的部分？
- [ ] 我是否修改了用户未提及的代码？
- [ ] 如果有其他建议，我是否先询问用户而不是直接修改？

### 真实教训

用户已经配置好权限：
- 发布按钮使用 `workflow:flowManage:update` 权限
- 撤回按钮使用 `workflow:flowManage:update` 权限

AI 自作主张改成：
- 发布按钮使用 `workflow:flowManage:publish` 权限
- 撤回按钮使用 `workflow:flowManage:unpublish` 权限

**结果：用户的权限配置被覆盖，导致功能异常！**

**记住：AI 的工作是帮助用户，不是替用户做决定！**

---

## 生成步骤

### 第一步：收集信息

询问用户（如未提供）：
1. **模块名（apiPrefix）**（如：`demo`、`sys`、`nocode`）
2. **类名（PascalCase）**（如：`DemoOrder`）
3. **中文名称**（如：销售订单）
4. **字段列表**：字段名(camelCase)、TS 类型（`string`/`number`/`boolean`）、中文描述、是否可选
5. **搜索字段**：哪些字段出现在搜索表单中（及组件类型：`Input` / `ApiSelect`+字典编码 / `DatePicker`）
6. **表单字段**：哪些字段出现在新增/编辑表单中（及组件类型，是否必填）
7. **字典字段**：哪些字段使用字典渲染（需提供字典编码）

---

### 第二步：生成六个文件

按以下顺序生成，所有文件路径基于 `mfish-nocode-view/src/` 目录。

#### 1. Model 类型定义（`api/{apiPrefix}/model/{类名}Model.ts`）

```typescript
import { BaseEntity, PageResult, ReqPage } from "@mfish/core/api";

/**
 * @description: {中文名称}
 * @author: mfish
 * @date: {当前日期}
 * @version: V2.3.1
 */
export interface {类名} extends BaseEntity<string> {
  //{字段注释}
  {字段名}?: {TS类型};
  // ... 更多字段
}

export interface Req{类名} extends ReqPage {
  //{搜索字段注释}
  {搜索字段名}?: {TS类型};
  // ... 更多搜索字段
}

//分页结果集
export type {类名}PageModel = PageResult<{类名}>;
```

**字段类型映射规则：**

| Java/DB 类型 | TS 类型 |
|---|---|
| `String`、`Date` | `string` |
| `Integer`、`Long`、`Short`、`Double`、`BigDecimal` | `number` |
| `Boolean` | `boolean` |

---

#### 2. API 请求文件（`api/{apiPrefix}/{类名}.ts`）

```typescript
import { defHttp } from "@mfish/core/utils/http/axios";
import { {类名}, Req{类名}, {类名}PageModel } from "@/api/{apiPrefix}/model/{类名}Model";

/**
 * @description: {中文名称}
 * @author: mfish
 * @date: {当前日期}
 * @version: V2.3.1
 */
enum Api {
  {类名} = "/{apiPrefix}/{变量名}"
}

/**
 * 分页列表查询
 */
export const get{类名}List = (req{类名}?: Req{类名}) => {
  return defHttp.get<{类名}PageModel>({ url: Api.{类名}, params: req{类名} });
};

/**
 * 通过id查询
 */
export function get{类名}ById(id: string) {
  return defHttp.get<{类名}>({ url: `${Api.{类名}}/${id}` });
}

/**
 * 导出{中文名称}
 */
export function export{类名}(req{类名}?: Req{类名}) {
  return defHttp.download({ url: `${Api.{类名}}/export`, params: req{类名} });
}

/**
 * 新增{中文名称}
 */
export function insert{类名}({变量名}: {类名}) {
  return defHttp.post<{类名}>({ url: Api.{类名}, params: {变量名} }, { successMessageMode: "message" });
}

/**
 * 修改{中文名称}
 */
export function update{类名}({变量名}: {类名}) {
  return defHttp.put<{类名}>({ url: Api.{类名}, params: {变量名} }, { successMessageMode: "message" });
}

/**
 * 删除{中文名称}
 */
export function delete{类名}(id: string) {
  return defHttp.delete<boolean>({ url: `${Api.{类名}}/${id}` }, { successMessageMode: "message" });
}

/**
 * 批量删除{中文名称}
 */
export function deleteBatch{类名}(ids: string) {
  return defHttp.delete<boolean>({ url: `${Api.{类名}}/batch/${ids}` }, { successMessageMode: "message" });
}
```

> 若 ID 类型为数值型（`number`），`delete{类名}` 参数类型改为 `number`。

---

#### 3. data 配置文件（`views/{apiPrefix}/{entity-kebab-case}/{变量名}.data.ts`）

```typescript
import { BasicColumn, FormSchema } from "@mfish/core/components/Table";
import { DescItem } from "@mfish/core/components/Description";
// 有字典字段时引入（无字典字段则删除）
import { buildDictTag, getDictProps } from "@mfish/core/components/DictTag";

/**
 * @description: {中文名称}
 * @author: mfish
 * @date: {当前日期}
 * @version: V2.3.1
 */

// ========== 表格列定义 ==========
export const columns: BasicColumn[] = [
  // 普通字段
  {
    title: "{字段中文名}",
    dataIndex: "{字段名}",
    width: 120
  },
  // 字典字段（有字典时使用 customRender）
  {
    customRender: ({ record }) => {
      return buildDictTag("{字典编码}", record.{字段名});
    },
    title: "{字段中文名}",
    dataIndex: "{字段名}",
    width: 120
  }
];

// ========== 搜索表单 Schema ==========
export const searchFormSchema: FormSchema[] = [
  // 普通输入框
  {
    field: "{字段名}",
    label: "{字段中文名}",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  // 字典下拉（单选）
  {
    field: "{字段名}",
    label: "{字段中文名}",
    component: "ApiSelect",
    componentProps: getDictProps("{字典编码}"),
    colProps: { xl: 5, md: 6 }
  },
  // 字典下拉（多选）
  {
    field: "{字段名}",
    label: "{字段中文名}",
    component: "ApiSelect",
    componentProps: { ...getDictProps("{字典编码}"), mode: "multiple" },
    colProps: { xl: 5, md: 6 }
  }
];

// ========== 新增/编辑表单 Schema ==========
export const {变量名}FormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false
  },
  // 文本输入
  {
    field: "{字段名}",
    label: "{字段中文名}",
    component: "Input",
    required: true  // 必填时加上
  },
  // 数值输入
  {
    field: "{字段名}",
    label: "{字段中文名}",
    component: "InputNumber"
  },
  // 字典下拉
  {
    field: "{字段名}",
    label: "{字段中文名}",
    component: "ApiSelect",
    componentProps: getDictProps("{字典编码}")
  },
  // 日期（仅日期）
  {
    field: "{字段名}",
    label: "{字段中文名}",
    component: "DatePicker",
    componentProps: {
      valueFormat: "YYYY-MM-DD",
      format: "YYYY-MM-DD",
      getPopupContainer: () => document.body
    }
  },
  // 日期时间
  {
    field: "{字段名}",
    label: "{字段中文名}",
    component: "DatePicker",
    componentProps: {
      valueFormat: "YYYY-MM-DD HH:mm:ss",
      format: "YYYY-MM-DD HH:mm:ss",
      showTime: { format: "HH:mm:ss" },
      getPopupContainer: () => document.body
    }
  }
];

// ========== 详情查看 Schema ==========
export class {类名}Desc {
  viewSchema: DescItem[] = [
    {
      label: "id",
      field: "id",
      show: () => false
    },
    // 普通字段
    {
      field: "{字段名}",
      label: "{字段中文名}"
    },
    // 字典字段
    {
      render: (val) => {
        if (val === undefined) return;
        return buildDictTag("{字典编码}", val);
      },
      field: "{字段名}",
      label: "{字段中文名}"
    }
  ];
}
```

**组件选择规则：**

| 字段类型 | 表单组件 |
|---|---|
| `string`（普通文本） | `Input` |
| `number`（整数/小数） | `InputNumber` |
| `string`（日期） | `DatePicker`（dateFormat: YYYY-MM-DD）|
| `string`（日期时间） | `DatePicker`（showTime）|
| 有字典 | `ApiSelect` + `getDictProps("{字典编码}")` |

---

#### 4. 列表主页面（`views/{apiPrefix}/{entity-kebab-case}/index.vue`）

```vue
<!--
 @description: {中文名称}
 @author: mfish
 @date: {当前日期}
 @version: V2.3.1
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <AButton type="primary" @click="handleCreate" v-auth="'{apiPrefix}:{变量名}:insert'">新增</AButton>
        <AButton color="warning" @click="handleExport" v-auth="'{apiPrefix}:{变量名}:export'">导出</AButton>
        <AButton color="error" @click="handleBatchDelete" v-auth="'{apiPrefix}:{变量名}:delete'">批量删除</AButton>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:info-circle-outlined',
                onClick: handleQuery.bind(null, record),
                auth: '{apiPrefix}:{变量名}:query',
                color: 'success',
                tooltip: '查看'
              },
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: '{apiPrefix}:{变量名}:update',
                tooltip: '修改'
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record)
                },
                auth: '{apiPrefix}:{变量名}:delete',
                tooltip: '删除'
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <{类名}Modal @register="registerModal" @success="handleSuccess" />
    <{类名}ViewModal @register="registerViewModal" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from "@mfish/core/components/Table";
  import { useModal } from "@mfish/core/components/Modal";
  import { Button as AButton } from "@mfish/core/components/Button";
  import { deleteBatch{类名}, delete{类名}, export{类名}, get{类名}List } from "@/api/{apiPrefix}/{类名}";
  import {类名}Modal from "./{类名}Modal.vue";
  import {类名}ViewModal from "./{类名}ViewModal.vue";
  import { columns, searchFormSchema } from "./{变量名}.data";
  import { {类名} } from "@/api/{apiPrefix}/model/{类名}Model";
  import { ref } from "vue";
  import { useMessage } from "@mfish/core/hooks";

  defineOptions({ name: "{类名}Management" });
  const [registerModal, { openModal }] = useModal();
  const [registerViewModal, { openModal: openViewModal }] = useModal();
  const selectedRowKeys = ref<any[]>([]);
  const [registerTable, { reload, getForm }] = useTable({
    title: "{中文名称}列表",
    api: get{类名}List,
    rowKey: "id",
    columns,
    formConfig: {
      name: "search_form_item",
      labelWidth: 100,
      schemas: searchFormSchema,
      autoSubmitOnEnter: true
    },
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    showIndexColumn: false,
    rowSelection: {
      onChange: (rowKeys: any[]) => {
        selectedRowKeys.value = rowKeys;
      }
    },
    actionColumn: {
      width: 120,
      title: "操作",
      dataIndex: "action"
    }
  });
  const { createMessage } = useMessage();

  function handleCreate() {
    openModal(true, { isUpdate: false });
  }

  function handleExport() {
    export{类名}({ ...getForm().getFieldsValue(), pageNum: 1, pageSize: 1000 });
  }

  function handleQuery({变量名}: {类名}) {
    openViewModal(true, { record: {变量名} });
  }

  function handleEdit({变量名}: {类名}) {
    openModal(true, { record: {变量名}, isUpdate: true });
  }

  function handleDelete({变量名}: {类名}) {
    if ({变量名}.id) {
      delete{类名}({变量名}.id).then(() => {
        handleSuccess();
      });
    }
  }

  function handleBatchDelete() {
    if (selectedRowKeys.value.length > 0) {
      deleteBatch{类名}(selectedRowKeys.value.join(",")).then(() => {
        handleSuccess();
      });
    } else {
      createMessage.warning("请勾选要删除的数据");
    }
  }

  function handleSuccess() {
    reload();
  }
</script>
```

---

#### 5. 新增/编辑弹窗（`views/{apiPrefix}/{entity-kebab-case}/{类名}Modal.vue`）

```vue
<!--
 @description: {中文名称}
 @author: mfish
 @date: {当前日期}
 @version: V2.3.1
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { ref, computed, unref } from "vue";
  import { BasicForm, useForm } from "@mfish/core/components/Form";
  import { {变量名}FormSchema } from "./{变量名}.data";
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { insert{类名}, update{类名} } from "@/api/{apiPrefix}/{类名}";

  defineOptions({ name: "{类名}Modal" });
  const emit = defineEmits(["success", "register"]);
  const isUpdate = ref(true);
  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    name: "model_form_item",
    labelWidth: 100,
    baseColProps: { span: 12 },
    schemas: {变量名}FormSchema,
    showActionButtonGroup: false,
    autoSubmitOnEnter: true
  });
  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    resetFields().then();
    setModalProps({ confirmLoading: false, width: "800px" });
    isUpdate.value = !!data?.isUpdate;
    if (unref(isUpdate)) {
      setFieldsValue({ ...data.record }).then();
    }
  });
  const getTitle = computed(() => (unref(isUpdate) ? "编辑{中文名称}" : "新增{中文名称}"));

  async function handleSubmit() {
    const values = await validate();
    setModalProps({ confirmLoading: true });
    if (unref(isUpdate)) {
      save{类名}(update{类名}, values);
    } else {
      save{类名}(insert{类名}, values);
    }
  }

  function save{类名}(save, values) {
    save(values)
      .then(() => {
        emit("success");
        closeModal();
      })
      .finally(() => {
        setModalProps({ confirmLoading: false });
      });
  }
</script>
```

---

#### 6. 详情查看弹窗（`views/{apiPrefix}/{entity-kebab-case}/{类名}ViewModal.vue`）

```vue
<!--
 @description: {中文名称}查看
 @author: mfish
 @date: {当前日期}
 @version: V2.3.1
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="{中文名称}信息">
    <Description @register="registerDesc" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { Description, useDescription } from "@mfish/core/components/Description";
  import { ref } from "vue";
  import { {类名}Desc } from "./{变量名}.data";

  defineOptions({ name: "{类名}ViewModal" });
  const {变量名}Data = ref();
  const {变量名}Desc = new {类名}Desc();
  const [registerModal, { setModalProps }] = useModalInner(async (data) => {
    setModalProps({
      confirmLoading: false,
      width: "800px",
      cancelText: "关闭",
      showOkBtn: false
    });
    {变量名}Data.value = data.record;
  });
  const [registerDesc] = useDescription({
    data: {变量名}Data,
    schema: {变量名}Desc.viewSchema,
    column: 2
  });
</script>
```

---

## 命名约定

| 占位符 | 说明 | 示例 |
|--------|------|------|
| `{类名}` | PascalCase 类名 | `DemoOrder` |
| `{变量名}` | camelCase 变量名 | `demoOrder` |
| `{apiPrefix}` | 模块路径（小写） | `demo` |
| `{entity-kebab-case}` | kebab-case 目录名 | `demo-order` |

---

## 注意事项

1. **字典字段**：`columns` 和 `viewSchema` 中使用 `buildDictTag`，`searchFormSchema` 和 `FormSchema` 中使用 `getDictProps`；只要有字典字段就需要在文件顶部引入 `buildDictTag` 和 `getDictProps`
2. **无搜索表单字段**：`searchFormSchema` 可以为空数组 `[]`，`useSearchForm` 设为 `false`
3. **数值型主键**：`delete{类名}` 参数类型改为 `number`，`Model` 中 `BaseEntity<number>`
4. **导出功能可选**：若不需要导出，删除 `handleExport`、`export{类名}` 的引入和 toolbar 中的导出按钮
5. **批量删除可选**：若不需要批量删除，删除 `handleBatchDelete`、`deleteBatch{类名}` 的引入、`rowSelection` 配置和 toolbar 中的批量删除按钮
6. **配合后端 CRUD**：前端文件路径中的 `{apiPrefix}/{变量名}` 对应后端 Controller 的 `@RequestMapping` 路径
7. **自定义操作权限**：新增的自定义操作（如发布、审核）需要在后端配置对应的权限标识，并在前端按钮中使用 `auth` 属性进行权限控制
8. **条件显示按钮**：使用 `ifShow` 属性可以根据记录状态动态显示/隐藏按钮，避免无效操作
9. **二次确认（重要）**：
   - **使用 popConfirm 时，不要同时使用 onClick**，否则会导致方法被调用两次
   - 对于删除、发布、撤回、审核等重要操作，**必须使用 popConfirm** 添加二次确认对话框
   - popConfirm 的 `confirm` 属性已经绑定了处理函数，不需要再使用 `onClick`
   - 查看、编辑等不需要确认的操作可以使用 `onClick`
10. **错误处理**：API 调用失败时，由 axios 拦截器统一处理错误提示，一般不需要在组件中单独处理
11. **避免重复定义方法**：
    - 在添加新的处理函数前，先检查文件中是否已存在同名函数
    - 每个处理函数（如 handlePublish、handleUnpublish）只定义一次
    - 如果按钮的 popConfirm 和 onClick 都引用同一函数，会导致重复执行

---

## 扩展现有 CRUD 功能

### 添加自定义操作按钮（如：发布、审核、导入等）

当后端增加了新的接口（如发布、审核等），需要在前端列表页添加对应按钮时，按以下步骤操作：

#### 1. 在 API 文件中添加接口方法

```typescript
/**
 * 发布流程
 *
 * @param id 唯一ID
 * @return 返回结果
 */
export function publishFlowManage(id: string) {
  return defHttp.put<boolean>({ url: `${Api.FlowManage}/publish/${id}` }, { successMessageMode: "message" });
}
```

**要点：**
- 根据后端接口选择正确的 HTTP 方法（`get`/`post`/`put`/`delete`）
- URL 拼接遵循 RESTful 风格：`${Api.{类名}}/{action}/{id}`
- 设置 `successMessageMode: "message"` 显示成功提示
- 返回值类型根据实际接口响应确定（`boolean`/`void`/具体类型）

#### 2. 在列表页导入 API 方法

```typescript
import { deleteFlowManage, getFlowManageList, publishFlowManage } from "@/api/workflow/FlowManage";
```

#### 3. 在操作列添加按钮

在 `index.vue` 的 `TableAction` 中添加：

**重要原则：避免重复定义方法**
- ✅ 正确：每个处理函数只定义一次
- ❌ 错误：在 popConfirm 的 confirm 和 onClick 中重复调用同一方法
- 检查方法：在添加新函数前，先搜索文件中是否已存在同名函数

**按钮配置规则：**

**规则 1：使用 popConfirm 时，不要同时使用 onClick**
```typescript
// ✅ 正确：只使用 popConfirm
{
  icon: 'ant-design:cloud-upload-outlined',
  auth: 'workflow:flowManage:publish',
  color: 'warning',
  tooltip: '发布',
  ifShow: () => record.released !== 1,
  popConfirm: {
    title: '是否确认发布',
    placement: 'left',
    confirm: handlePublish.bind(null, record)
  }
}

// ❌ 错误：同时使用 onClick 和 popConfirm（会导致重复调用）
{
  icon: 'ant-design:cloud-upload-outlined',
  onClick: handlePublish.bind(null, record),  // 不要这样！
  auth: 'workflow:flowManage:publish',
  color: 'warning',
  tooltip: '发布',
  popConfirm: {
    title: '是否确认发布',
    confirm: handlePublish.bind(null, record)  // 重复调用！
  }
}
```

**规则 2：重要操作必须使用 popConfirm**

以下操作需要二次确认：
- 删除操作（delete）
- 发布操作（publish）
- 撤回操作（unpublish/revoke）
- 审核操作（audit）
- 批量操作（batch operations）
- 任何不可逆或影响数据的操作

```typescript
// 需要确认的操作
{
  icon: 'ant-design:cloud-upload-outlined',
  auth: 'workflow:flowManage:publish',
  color: 'warning',
  tooltip: '发布',
  ifShow: () => record.released !== 1,
  popConfirm: {
    title: '是否确认发布',
    placement: 'left',
    confirm: handlePublish.bind(null, record)
  }
}

// 不需要确认的操作（如查看、编辑）
{
  icon: 'ant-design:info-circle-outlined',
  onClick: handleQuery.bind(null, record),
  auth: 'workflow:flowManage:query',
  color: 'success',
  tooltip: '查看'
}
```

**按钮配置项说明：**

| 配置项 | 说明 | 示例值 |
|--------|------|--------|
| `icon` | 图标（ant-design 图标名） | `'ant-design:cloud-upload-outlined'` |
| `onClick` | 点击事件处理函数 | `handlePublish.bind(null, record)` |
| `auth` | 权限标识 | `'workflow:flowManage:publish'` |
| `color` | 按钮颜色 | `'success'`/`'warning'`/`'error'`/`'primary'` |
| `tooltip` | 鼠标悬停提示 | `'发布'` 或根据状态动态显示 |
| `ifShow` | 条件显示（布尔值或函数） | `record.status === 0` |
| `popConfirm` | 二次确认对话框 | `{ title: '是否确认操作', confirm: handler }` |

**常用图标：**
- 发布：`ant-design:cloud-upload-outlined`
- 审核：`ant-design:audit-outlined`
- 导入：`ant-design:import-outlined`
- 导出：`ant-design:export-outlined`
- 启用/禁用：`ant-design:check-circle-outlined` / `ant-design:stop-outlined`

#### 4. 添加处理函数

```typescript
/**
 * 发布
 * @param flowManage 流程管理对象
 */
function handlePublish(flowManage: FlowManage) {
  if (flowManage.id) {
    publishFlowManage(flowManage.id).then(() => {
      handleSuccess();
    });
  }
}
```

**要点：**
- 添加 JSDoc 注释说明函数用途
- 检查必要参数（如 id）是否存在
- 调用 API 成功后调用 `handleSuccess()` 刷新列表
- 错误处理由 API 拦截器统一处理（显示错误消息）

#### 5. 根据状态动态控制按钮

**场景 1：根据状态显示不同文案**
```typescript
tooltip: record.released === 1 ? '重新发布' : '发布'
```

**场景 2：根据状态显示/隐藏按钮**
```typescript
ifShow: record.released !== 1  // 未发布时显示
```

**场景 3：根据状态改变按钮颜色**
```typescript
color: record.status === 0 ? 'warning' : 'success'
```

**场景 4：需要二次确认的操作**
```typescript
{
  icon: 'ant-design:delete-outlined',
  color: 'error',
  popConfirm: {
    title: '是否确认删除',
    placement: 'left',
    confirm: handleDelete.bind(null, record)
  },
  auth: 'workflow:flowManage:delete',
  tooltip: '删除'
}
```

**场景 5：发布操作（需要确认）**
```typescript
{
  icon: 'ant-design:cloud-upload-outlined',
  auth: 'workflow:flowManage:publish',
  color: 'warning',
  tooltip: '发布',
  ifShow: () => record.released !== 1,
  popConfirm: {
    title: '是否确认发布',
    placement: 'left',
    confirm: handlePublish.bind(null, record)
  }
}
```

**场景 6：撤回发布操作（需要确认）**
```typescript
{
  icon: 'ant-design:rollback-outlined',
  auth: 'workflow:flowManage:unpublish',
  color: 'error',
  tooltip: '撤回发布',
  ifShow: () => record.released === 1,
  popConfirm: {
    title: '是否确认撤回发布',
    placement: 'left',
    confirm: handleUnpublish.bind(null, record)
  }
}
```

### 添加状态列显示

在 `data.ts` 的 `columns` 中添加状态列：

```typescript
{
  title: '发布状态',
  dataIndex: 'released',
  width: 120,
  customRender: ({ record }) => {
    return YNTag_Name(record.released === 1, '已发布', '未发布');
  }
}
```

**要点：**
- 使用 `YNTag_Name` 渲染是/否状态标签
- 或使用 `buildDictTag` 渲染字典标签
- 设置合适的列宽（通常 100-120）

---

## 参考实现

- 含字典的完整示例：[demoOrder.data.ts](mfish-nocode-view/src/views/demo/demo-order/demoOrder.data.ts)
- API 文件示例：[DemoOrder.ts](mfish-nocode-view/src/api/demo/DemoOrder.ts)
- Model 示例：[DemoOrderModel.ts](mfish-nocode-view/src/api/demo/model/DemoOrderModel.ts)
- 无字典简单示例：[demoDataScope.data.ts](mfish-nocode-view/src/views/demo/demo-data-scope/demoDataScope.data.ts)
- 后端 CRUD 配套请使用 **crud-generator** skill
