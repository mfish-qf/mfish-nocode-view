import { BasicColumn, FormSchema, TableImage } from "@mfish/core/components/Table";
import { DescItem } from "@mfish/core/components/Description";
import { queryCategoryTreeByCode } from "@mfish/core/api";
import { Icon } from "@mfish/core/components/Icon";
import { h } from "vue";
import { getLocalFileUrl, imageUrl } from "@mfish/core/utils/file/FileUtils";
import { FileUp } from "@mfish/core/components/FileUpDown";
import { Image as AImage } from "ant-design-vue";

/**
 * @description: 组件基础信息
 * @author: mfish
 * @date: 2024-11-19
 * @version: V2.1.1
 */
export const columns: BasicColumn[] = [
  {
    title: "组件名称",
    dataIndex: "name",
    width: 120
  },
  {
    title: "组件类型",
    dataIndex: "type",
    width: 120
  },
  {
    title: "所属分类",
    dataIndex: "categoryName",
    width: 120
  },
  {
    title: "图片",
    dataIndex: "picKey",
    width: 120,
    customRender: ({ value }) => {
      if (value) {
        const imgList = [imageUrl(getLocalFileUrl(value))];
        return h(TableImage, { size: 40, simpleShow: true, imgList });
      }
      return "";
    }
  },
  {
    title: "图标",
    dataIndex: "icon",
    width: 120,
    customRender: ({ record }) => {
      return h(Icon, { icon: record.icon });
    }
  },
  {
    title: "排序",
    dataIndex: "chartSort",
    width: 120
  }
];
export const searchFormSchema: FormSchema[] = [
  {
    field: "name",
    label: "组件名称",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "type",
    label: "组件类型",
    component: "Input",
    colProps: { xl: 5, md: 6 }
  },
  {
    field: "category",
    label: "所属分类",
    component: "ApiTreeSelect",
    componentProps: {
      api: () => queryCategoryTreeByCode("screen_charts_type", "down"),
      showSearch: true,
      treeNodeFilterProp: "categoryName",
      fieldNames: {
        label: "categoryName",
        key: "id",
        value: "id"
      },
      getPopupContainer: () => document.body
    },
    colProps: { xl: 5, md: 6 }
  }
];
export const screenChartsFormSchema = (setFieldsValue): FormSchema[] => {
  return [
    {
      field: "id",
      label: "唯一ID",
      component: "Input",
      show: false
    },
    {
      field: "name",
      label: "组件名称",
      component: "Input",
      required: true
    },
    {
      field: "type",
      label: "组件类型",
      component: "Input",
      required: true
    },
    {
      field: "category",
      label: "所属分类",
      component: "ApiTreeSelect",
      componentProps: {
        api: () => queryCategoryTreeByCode("screen_charts_type", "down"),
        showSearch: true,
        treeNodeFilterProp: "categoryName",
        fieldNames: {
          label: "categoryName",
          key: "id",
          value: "id"
        },
        getPopupContainer: () => document.body
      },
      required: true
    },

    {
      field: "icon",
      label: "图标",
      component: "IconPicker"
    },
    {
      field: "chartSort",
      label: "排序",
      component: "InputNumber"
    },
    {
      field: "picKey",
      label: "图片",
      component: "Input",
      render: (val: any) => {
        return h(FileUp, {
          fileKeys: val.values.picKey,
          accepts: ".jpg, .jpeg, .png,.svg,.gif",
          buttonText: "上传图片",
          filePath: "screen/charts",
          isPic: true,
          maxCount: 1,
          onSuccess: (_, fileList: any[]) => {
            if (fileList && fileList.length > 0) {
              setFieldsValue({
                picKey: fileList[0].fileKey
              });
            }
          },
          onRemove: () => {
            setFieldsValue({
              picKey: ""
            });
          }
        });
      }
    }
  ];
};

export class ScreenChartsDesc {
  viewSchema: DescItem[] = [
    {
      label: "id",
      field: "id",
      show: () => false
    },
    {
      field: "name",
      label: "组件名称"
    },
    {
      field: "type",
      label: "组件类型"
    },
    {
      field: "categoryName",
      label: "所属分类"
    },
    {
      field: "icon",
      label: "图标",
      render: (val: string) => {
        return h("div", { style: "display: flex;align-items: center;" }, [h(Icon, { icon: val }), h("div", val)]);
      }
    },
    {
      field: "chartSort",
      label: "排序"
    },
    {
      field: "picKey",
      label: "图片",
      render: (val: string) => {
        if (val) {
          const img = imageUrl(getLocalFileUrl(val));
          return h(AImage, {
            width: 200,
            src: img
          });
        }
        return "";
      }
    }
  ];
}
