import type { BasicColumn, ActionItem } from "@core/components/Table";
import { FileItem, UploadResultStatus } from "./Typing";
import { Progress, Switch, Input } from "ant-design-vue";
import { TableAction } from "@core/components/Table";
import ThumbUrl from "./ThumbUrl.vue";
import { useI18n } from "@core/hooks/web/UseI18n";
import { calcSize, getFileIcon } from "@core/utils/file/FileUtils";
import { Fn } from "@mfish/types";

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
      title: t("component.upload.public"),
      dataIndex: "isPrivate",
      width: 80,
      align: "center",
      customRender: ({ record }) => {
        function onChange(checked: boolean | string | number) {
          record.isPrivate = checked ? 0 : 1;
        }

        return (
          <Switch
            checked={record.isPrivate === 0}
            checkedChildren='已公开'
            unCheckedChildren='已私密'
            onChange={onChange}
          />
        );
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
        switch (uploadStatus) {
          case UploadResultStatus.ERROR: {
            status = "exception";
            break;
          }
          case UploadResultStatus.UPLOADING: {
            status = "active";
            break;
          }
          case UploadResultStatus.SUCCESS: {
            status = "success";
            break;
          }
          // No default
        }
        return (
          <span>
            <p class='truncate mb-1' title={text}>
              {text}
            </p>
            <Progress percent={percent} size='small' status={status} />
          </span>
        );
      }
    },
    {
      title: t("component.upload.folder"),
      dataIndex: "path",
      width: 150,
      align: "center",
      customRender: ({ record }) => {
        function onChange(e: any) {
          record.path = e.target.value;
        }

        return <Input placeholder={"为空采用默认路径"} defaultValue={record.path} onChange={onChange} />;
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
      title: t("component.upload.fileType"),
      dataIndex: "type",
      width: 80,
      align: "center"
    }
  ];
}

export function createActionColumn(handleRemove: Fn): BasicColumn {
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
