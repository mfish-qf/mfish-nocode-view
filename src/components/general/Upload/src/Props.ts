import type { PropType } from "vue";
import { FileBasicColumn } from "./Typing";

export type UploadColumnName = "thumbUrl" | "isPrivate" | "name" | "path" | "size" | "type" | "action";
export const basicProps = {
  helpText: {
    type: String as PropType<string>,
    default: ""
  },
  // 文件最大多少MB
  maxSize: {
    type: Number as PropType<number>,
    default: 2
  },
  // 最大数量的文件，Infinity不限制
  maxNumber: {
    type: Number as PropType<number>,
    default: Infinity
  },
  // 根据后缀，或者其他
  accept: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  multiple: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  uploadParams: {
    type: Object as PropType<any>,
    default: () => ({})
  },
  api: {
    type: Function as PropType<PromiseFn>,
    default: null
  },
  name: {
    type: String as PropType<string>,
    default: "file"
  },
  filename: {
    type: String as PropType<string>,
    default: null
  },
  //默认上传路径
  defaultPath: {
    type: String as PropType<string>,
    default: null
  },
  //隐藏列
  hideColumn: {
    type: Array as PropType<UploadColumnName[]>,
    default: null
  },
  modalTitle: {
    type: String as PropType<string>,
    default: null
  },
  modalWidth: {
    type: Number as PropType<number>,
    default: 900
  },
  modalHeight: {
    type: Number as PropType<number>,
    default: 300
  }
};

export const uploadContainerProps = {
  value: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  ...basicProps,
  showPreviewNumber: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  emptyHidePreview: {
    type: Boolean as PropType<boolean>,
    default: false
  }
};

export const previewProps = {
  value: {
    type: Array as PropType<string[]>,
    default: () => []
  }
};

export const fileListProps = {
  columns: {
    type: [Array] as PropType<FileBasicColumn[]>,
    default: null
  },
  actionColumn: {
    type: Object as PropType<FileBasicColumn>,
    default: null
  },
  dataSource: {
    type: Array as PropType<any[]>,
    default: null
  }
};
