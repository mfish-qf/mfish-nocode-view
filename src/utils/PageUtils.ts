import { reactive, ref } from "vue";
import { PAGE_SIZE, PAGE_SIZE_OPTIONS } from "@/components/general/Table/src/Const";
import { useI18n } from "@/hooks/web/UseI18n";

/**
 * @description: 翻页通用处理
 * @author: mfish
 * @date: 2024/7/29
 */

export const usePagination = (pageRefresh: () => void) => {
  const pageNum = ref<number>(1);
  const pageSize = ref<number>(10);
  const total = ref<number>(0);
  const { t } = useI18n();

  const paginationProp = reactive<any>({
    defaultPageSize: pageSize.value || PAGE_SIZE,
    pageSizeOptions: [...PAGE_SIZE_OPTIONS],
    pageSize,
    size: "small",
    current: pageNum,
    showSizeChanger: true,
    showQuickJumper: true,
    total,
    showTotal: (total) => t("component.table.total", { total }),
    onChange: pageChange,
    onShowSizeChange: pageSizeChange
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
  return { pageNum, pageSize, total, paginationProp };
};
