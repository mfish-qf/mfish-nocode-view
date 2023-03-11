/**
 * Independent time operation tool to facilitate subsequent switch to dayjs
 */
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { useLocaleStoreWithOut } from "/@/store/modules/I18n";

const localeStore = useLocaleStoreWithOut();
dayjs.locale(localeStore.getLocale);

const DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss";
const DATE_FORMAT = "YYYY-MM-DD";

export function formatToDateTime(
  date: dayjs.Dayjs | undefined = undefined,
  format = DATE_TIME_FORMAT
): string {
  return dayjs(date).format(format);
}

export function formatToDate(
  date: dayjs.Dayjs | string | undefined = undefined,
  format = DATE_FORMAT
): string {
  return dayjs(date).format(format);
}

export const dateUtil = dayjs;
