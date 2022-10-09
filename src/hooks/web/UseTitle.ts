/**
 * @description：引入标题
 * @author     ：qiufeng
 * @date       ：2022/10/8 17:49
 */

import { unref, watch } from "vue";
import { useRouter } from "vue-router";
import { useTitle as usePageTitle } from "@vueuse/core";
import { REDIRECT_NAME } from "/@/router/Constant";
import { getEnvConfig } from "/@/utils/env";

export function useTitle() {
  const { title } = getEnvConfig();
  const { currentRoute } = useRouter();
  const pageTitle = usePageTitle();
  watch([() => currentRoute.value.path], () => {
      const route = unref(currentRoute);
      if (route.name === REDIRECT_NAME) {
        return;
      }
      //TODO 增加i18n

      const tTitle = route?.meta?.title;
      pageTitle.value = tTitle ? `${tTitle}-${title}` : title;
      console.log(pageTitle.value, "title");
    }, { immediate: true }
  );
}