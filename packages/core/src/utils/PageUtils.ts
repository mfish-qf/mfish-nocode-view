import { reactive, ref } from "vue";
import { useI18n } from "@core/hooks/web/UseI18n";
import componentSetting from "@core/settings/ComponentSetting.ts";

/**
 * @description: 翻页通用处理
 * @author: mfish
 * @date: 2024/7/29
 */
interface PageOptions {
  pageSize?: number;
  showSizeChanger?: boolean;
  showQuickJumper?: boolean;
}
export const usePagination = (pageRefresh: () => void, options?: PageOptions) => {
  const { pageSizeOptions, defaultPageSize } = componentSetting.table;
  const pageNum = ref<number>(1);
  const pageSize = ref<number>(options?.pageSize ?? defaultPageSize);
  const total = ref<number>(0);
  const { t } = useI18n();

  const paginationProp = reactive<any>({
    defaultPageSize: pageSize.value || defaultPageSize,
    pageSizeOptions: [...pageSizeOptions],
    pageSize,
    size: "small",
    current: pageNum,
    total,
    showTotal: (total: number) => t("component.table.total", { total }),
    onChange: pageChange,
    onShowSizeChange: pageSizeChange,
    ...options
  });

  function pageChange(_pageNum: number, _pageSize: number) {
    pageNum.value = _pageNum;
    pageSize.value = _pageSize;
    pageRefresh();
  }

  function pageSizeChange(current: number, size: number) {
    pageSize.value = size;
    pageNum.value = current;
  }
  function setCurrentPage(current: number) {
    pageNum.value = current;
  }
  function setTotal(_total: number) {
    total.value = _total;
  }
  const getPageNum = () => {
    return pageNum.value;
  };
  const getPageSize = () => {
    return pageSize.value;
  };
  const getTotal = () => {
    return total.value;
  };
  return { setCurrentPage, getPageNum, getPageSize, setTotal, getTotal, paginationProp };
};
