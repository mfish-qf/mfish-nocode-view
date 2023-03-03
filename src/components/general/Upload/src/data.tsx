import type { BasicColumn, ActionItem } from "/@/components/general/Table";
import { FileItem, UploadResultStatus } from "./Typing";
import { Progress, Tag, Switch } from "ant-design-vue";
import TableAction from "/@/components/general/Table/src/components/TableAction.vue";
import ThumbUrl from "./ThumbUrl.vue";
import { useI18n } from "/@/hooks/web/UseI18n";

const { t } = useI18n();

// 文件上传列表
export function createTableColumns(): BasicColumn[] {
  return [
    {
      dataIndex: "thumbUrl",
      title: t("component.upload.legend"),
      width: 100,
      customRender: ({ record }) => {
        const { thumbUrl } = (record as FileItem) || {};
        return thumbUrl && <ThumbUrl fileUrl={thumbUrl} />;
      }
    },
    {
      title: "文件公开",
      dataIndex: "isPrivate",
      width: 100,
      customRender: ({ record }) => {
        function onChange(checked: boolean) {
          record.isPrivate = checked ? 0 : 1;
        }

        return <Switch checked={record.isPrivate === 0} checkedChildren="已公开" unCheckedChildren="已私密" onChange={onChange} />;
      }
    },
    {
      dataIndex: "name",
      title: t("component.upload.fileName"),
      align: "left",
      width: 150,
      customRender: ({ text, record }) => {
        const { percent, status: uploadStatus } = (record as FileItem) || {};
        let status: "normal" | "exception" | "active" | "success" = "normal";
        if (uploadStatus === UploadResultStatus.ERROR) {
          status = "exception";
        } else if (uploadStatus === UploadResultStatus.UPLOADING) {
          status = "active";
        } else if (uploadStatus === UploadResultStatus.SUCCESS) {
          status = "success";
        }
        return (
          <span>
            <p class="truncate mb-1" title={text}>
              {text}
            </p>
            <Progress percent={percent} size="small" status={status} />
          </span>
        );
      }
    },
    {
      dataIndex: "size",
      title: t("component.upload.fileSize"),
      width: 100,
      customRender: ({ text = 0 }) => {
        return text && (text / 1024).toFixed(2) + "KB";
      }
    },
    {
      dataIndex: "type",
      title: "文件类型",
      width: 100
    },
    {
      dataIndex: "status",
      title: t("component.upload.fileStatue"),
      width: 100,
      customRender: ({ text }) => {
        if (text === UploadResultStatus.SUCCESS) {
          return <Tag color="green">{() => t("component.upload.uploadSuccess")}</Tag>;
        } else if (text === UploadResultStatus.ERROR) {
          return <Tag color="red">{() => t("component.upload.uploadError")}</Tag>;
        } else if (text === UploadResultStatus.UPLOADING) {
          return <Tag color="blue">{() => t("component.upload.uploading")}</Tag>;
        }
        return text;
      }
    }
  ];
}

export function createActionColumn(handleRemove: Function): BasicColumn {
  return {
    width: 80,
    title: t("component.upload.operating"),
    dataIndex: "action",
    fixed: true,
    customRender: ({ record }) => {
      const actions: ActionItem[] = [
        {
          icon: "ant-design:delete-outlined",
          label: t("component.upload.del"),
          color: "error",
          onClick: handleRemove.bind(null, record)
        }
      ];
      return <TableAction actions={actions} outside={true} />;
    }
  };
}
