import type { BasicColumn, ActionItem } from "/@/components/general/Table";
import { FileItem, UploadResultStatus } from "./Typing";
import { Progress, Switch, Input } from "ant-design-vue";
import TableAction from "/@/components/general/Table/src/components/TableAction.vue";
import ThumbUrl from "./ThumbUrl.vue";
import { useI18n } from "/@/hooks/web/UseI18n";
import { calcSize, getFileIcon } from "/@/utils/FileUtils";

const { t } = useI18n();

// 文件上传列表
export function createTableColumns(): BasicColumn[] {
  return [
    {
      dataIndex: "thumbUrl",
      title: t("component.upload.legend"),
      width: 80,
      align: "center",
      customRender: ({ record }) => {
        const { thumbUrl } = (record as FileItem) || {};
        if (thumbUrl) {
          return <ThumbUrl fileUrl={thumbUrl} />;
        }
        return getFileIcon(record.name);
      }
    },
    {
      title: "文件公开",
      dataIndex: "isPrivate",
      width: 80,
      align: "center",
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
      width: 150,
      align: "center",
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
      title: "文件目录",
      dataIndex: "path",
      width: 150,
      align: "center",
      customRender: ({ record }) => {
        function onChange(e) {
          record.path = e.target.value;
        }

        return <Input placeholder={"为空采用默认路径"} onChange={onChange} />;
      }
    },
    {
      dataIndex: "size",
      title: t("component.upload.fileSize"),
      width: 80,
      align: "center",
      customRender: ({ text = 0 }) => {
        return text && calcSize(text, 1);
      }
    },
    {
      dataIndex: "type",
      title: "文件类型",
      width: 80,
      align: "center"
    }
  ];
}

export function createActionColumn(handleRemove: Function): BasicColumn {
  return {
    width: 60,
    title: t("component.upload.operating"),
    dataIndex: "action",
    fixed: "right",
    align: "center",
    customRender: ({ record }) => {
      const actions: ActionItem[] = [
        {
          icon: "ant-design:delete-outlined",
          color: "error",
          onClick: handleRemove.bind(null, record)
        }
      ];
      return <TableAction actions={actions} outside={true} />;
    }
  };
}
