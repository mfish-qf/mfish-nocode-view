import { ROW_KEY } from "./Const";
import type { BasicTableProps } from "./types/Table";

export function parseRowKey<RecordType = any>(
  rowKey: BasicTableProps["rowKey"],
  record: RecordType,
  autoCreateKey?: boolean
): number | string {
  if (autoCreateKey) {
    return ROW_KEY;
  } else {
    if (typeof rowKey === "string") {
      return rowKey;
    } else if (rowKey) {
      return rowKey(record);
    } else {
      return ROW_KEY;
    }
  }
}

export function parseRowKeyValue<RecordType = any>(
  rowKey: BasicTableProps["rowKey"],
  record: RecordType,
  autoCreateKey?: boolean
): number | string {
  //@ts-ignore 忽略类型错误
  return record[parseRowKey(rowKey, record, autoCreateKey)];
}
