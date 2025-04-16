import { reactive, Ref, watch } from "vue";
import { theme } from "ant-design-vue";
import { useRootSetting } from "@core/hooks";
import { colorError, colorSuccess, colorWarning } from "@mfish/types/BtnColor";
import { ThemeEnum } from "../../enums";

export function useDarkModeTheme(darkMode: Ref<ThemeEnum>) {
  const { darkAlgorithm, defaultAlgorithm } = theme;

  const color = {
    token: {
      colorPrimary: useRootSetting().getThemeColor,
      colorInfo: useRootSetting().getThemeColor,
      colorSuccess,
      colorWarning,
      colorError
    }
  };
  /**
   * 全局ANT主题
   */
  const antTheme = reactive({
    ...color,
    algorithm: defaultAlgorithm
  });

  watch(
    darkMode,
    () => {
      antTheme.algorithm = darkMode.value === ThemeEnum.DARK ? darkAlgorithm : defaultAlgorithm;
    },
    { immediate: true }
  );

  return {
    antTheme
  };
}
