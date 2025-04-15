import { BasicColumn } from "@mfish/core/components/Table";
import { calcSize } from "@mfish/core/utils/file/FileUtils";

/**
 * @description: 文件目录
 * @author: mfish
 * @date: 2023/12/12
 */
export const columns: BasicColumn[] = [
  {
    title: "名称",
    dataIndex: "name",
    width: 120
  },
  {
    title: "大小",
    dataIndex: "fileSize",
    width: 120,
    customRender: ({ record }) => {
      if (record.fileSize) {
        return calcSize(record.fileSize, 1);
      }
      return "";
    }
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
    width: 120
  },
  {
    title: "创建人",
    dataIndex: "createBy",
    width: 120
  }
];
