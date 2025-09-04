<!--
 @description: 大屏资源信息
 @author: mfish
 @date: 2025-03-19
 @version: V2.1.1
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="资源发布">
    <template #appendFooter>
      <APopconfirm ok-text="是" cancel-text="否" @confirm="handleSubmit">
        <template #title>
          <span style="color: red">注意：</span>
          <br />
          <span>发布向所有人展示你的作品</span>
          <br />
          是否确认发布！
        </template>
        <AButton type="primary" :loading="confirmLoading" @click.stop.prevent>发布</AButton>
      </APopconfirm>
    </template>
    <div style="display: flex; overflow: hidden">
      <ScreenPreview v-if="preview" border-radius="6px" :fix-scale="0.5" />
      <BasicForm :style="{ width: preview ? '40%' : '' }" @register="registerForm" />
    </div>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { h, ref, unref } from "vue";
  import { BasicForm, useForm } from "@mfish/core/components/Form";
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import {
    getScreenResourceBySourceId,
    insertScreenResource,
    ScreenPreview,
    ScreenResource,
    updateScreenResource,
    useScreenEditStore
  } from "@mfish/nocode";
  import { queryCategoryTreeByCode } from "@mfish/core/api";
  import { Image as AImage, Popconfirm as APopconfirm } from "ant-design-vue";
  import { FormSchema } from "@mfish/core/components/Table";
  import { getLocalFileUrl, imageUrl } from "@mfish/core/utils/file/FileUtils";

  defineOptions({ name: "ScreenResourceModal" });
  const props = defineProps({
    preview: {
      type: Boolean,
      default: true
    }
  });
  const emit = defineEmits(["success", "register"]);
  const isUpdate = ref(true);
  const screenEditStore = useScreenEditStore();
  const confirmLoading = ref(false);
  const screenResourceFormSchema: FormSchema[] = [
    {
      field: "id",
      label: "唯一ID",
      component: "Input",
      show: false
    },
    {
      field: "sourceId",
      label: "来源id",
      component: "Input",
      required: true,
      show: false
    },
    {
      field: "category",
      label: "分类",
      component: "TreeSelect",
      required: true,
      componentProps: {
        treeDefaultExpandAll: true,
        showSearch: true,
        treeNodeFilterProp: "categoryName",
        fieldNames: {
          label: "categoryName",
          key: "id",
          value: "id"
        },
        getPopupContainer: () => document.body
      }
    },
    {
      field: "name",
      label: "名称",
      component: "Input",
      required: true
    },
    {
      field: "price",
      label: "价格",
      component: "InputNumber",
      defaultValue: 0,
      componentProps: {
        precision: 2,
        prefix: "￥",
        addonAfter: "元"
      },
      dynamicDisabled: true
    },
    {
      field: "remark",
      label: "描述",
      component: "InputTextArea"
    },
    {
      field: "picKey",
      label: "缩略图",
      component: "Input",
      render: (val) => {
        if (val.values.picKey) {
          const img = imageUrl(getLocalFileUrl(val.values.picKey));
          return h(AImage, {
            width: 150,
            src: img,
            style: {
              borderRadius: "6px"
            }
          });
        }
        return "";
      }
    }
  ];
  const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
    name: "model_form_item",
    labelWidth: 100,
    baseColProps: { span: 24 },
    schemas: screenResourceFormSchema,
    showActionButtonGroup: false,
    autoSubmitOnEnter: true
  });

  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    resetFields().then();
    setModalProps({
      confirmLoading: false,
      width: props.preview ? "1200px" : "500px",
      destroyOnClose: true,
      showOkBtn: false
    });
    screenEditStore.setId(data.sourceId as string);
    let resource: ScreenResource = await getScreenResourceBySourceId(data.sourceId);
    if (resource) {
      isUpdate.value = true;
    } else {
      isUpdate.value = false;
      resource = {
        sourceId: data.sourceId,
        name: data?.name,
        remark: data?.remark,
        picKey: data?.picKey,
        price: 0
      };
    }
    setTreeData().then(() => {
      if (!unref(isUpdate) && resource.category) {
        setFieldsValue({
          category: resource.category
        }).then();
      }
    });
    setFieldsValue({
      ...resource
    }).then();
  });

  async function setTreeData() {
    const treeData = await queryCategoryTreeByCode("screen_resource", "down");
    if (treeData.length > 0) {
      updateSchema([
        {
          field: "category",
          componentProps: {
            treeData: treeData[0].children.filter(
              (item) => item.categoryCode === "mf_screen_template" || item.categoryCode === "mf_screen_demo"
            )
          }
        }
      ]).then();
    }
  }

  async function handleSubmit() {
    const values = await validate();
    confirmLoading.value = true;
    if (unref(isUpdate)) {
      saveScreenResource(updateScreenResource, values);
    } else {
      saveScreenResource(insertScreenResource, values);
    }
  }

  function saveScreenResource(save, values) {
    save(values)
      .then(() => {
        emit("success");
        closeModal();
      })
      .finally(() => {
        confirmLoading.value = false;
      });
  }
</script>
