/**
 * @description: 引入标题
 * @author: mfish
 * @date: 2022/10/8 17:49
 */
import { unref, watch } from "vue";
import { useRouter } from "vue-router";
import { useTitle as usePageTitle } from "@vueuse/core";
import { REDIRECT_NAME } from "@core/router/Constant";
import { useGlobSetting } from "@core/hooks/setting";
import { useI18n } from "@core/hooks/web/UseI18n";
import { useLocaleStore } from "@mfish/stores/modules";

export function useTitle() {
  const { shortName } = useGlobSetting();
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
      pageTitle.value = tTitle ? `${tTitle}-${shortName}` : shortName;
    },
    { immediate: true }
  );
}
