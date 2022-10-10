/**
 * @description：引入标题
 * @author     ：qiufeng
 * @date       ：2022/10/8 17:49
 */
import { unref, watch } from "vue";
import { useRouter } from "vue-router";
import { useTitle as usePageTitle } from "@vueuse/core";
import { REDIRECT_NAME } from "/@/router/Constant";
import { getEnvConfig } from "/@/utils/Env";
import { useI18n } from "vue-i18n";

export function useTitle() {
  const { title } = getEnvConfig();
  const { currentRoute } = useRouter();
  const pageTitle = usePageTitle();
  const { t } = useI18n();
  watch([() => currentRoute.value.path], () => {
      const route = unref(currentRoute);
      if (route.name === REDIRECT_NAME) {
        return;
      }
      const tTitle = t(route?.meta?.title as string);
      pageTitle.value = tTitle ? `${tTitle}-${title}` : title;
      console.log(pageTitle.value, "title");
    }, { immediate: true }
  );
}