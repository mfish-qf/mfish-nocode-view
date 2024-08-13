/**
 * @description: 引入标题
 * @author: mfish
 * @date: 2022/10/8 17:49
 */
import { unref, watch } from "vue";
import { useRouter } from "vue-router";
import { useTitle as usePageTitle } from "@vueuse/core";
import { REDIRECT_NAME } from "@/router/Constant";
import { useGlobSetting } from "@/hooks/setting";
import { useI18n } from "@/hooks/web/UseI18n";
import { useLocaleStore } from "@/store/modules/I18n";

export function useTitle() {
  const { title } = useGlobSetting();
  const { currentRoute } = useRouter();
  const pageTitle = usePageTitle();
  const { t } = useI18n();
  const localeStore = useLocaleStore();
  watch(
    [() => currentRoute.value.path, () => localeStore.getLocale],
    () => {
      const route = unref(currentRoute);
      if (route.name === REDIRECT_NAME) {
        return;
      }
      const tTitle = t(route?.meta?.title as string);
      pageTitle.value = tTitle ? `${tTitle}-${title}` : title;
    },
    { immediate: true }
  );
}
