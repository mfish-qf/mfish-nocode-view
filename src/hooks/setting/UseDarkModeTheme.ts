import { computed, reactive } from "vue";
import { theme } from "ant-design-vue";
import { useRootSetting } from "@/hooks/setting/UseRootSetting";
import { ThemeEnum } from "@/enums/AppEnum";
import { colorError, colorSuccess, colorWarning } from "@mfish/types";

export function useDarkModeTheme() {
  const { getDarkMode } = useRootSetting();
  const { darkAlgorithm } = theme;
  const isDark = computed(() => getDarkMode.value === ThemeEnum.DARK);
  const color = {
    token: {
      colorPrimary: useRootSetting().getThemeColor,
      colorInfo: useRootSetting().getThemeColor,
      colorSuccess,
      colorWarning,
      colorError
    }
  };

  const darkTheme = reactive({
    ...color,
    algorithm: darkAlgorithm
  });
  const lightTheme = reactive(color);

  return {
    isDark,
    darkTheme,
    lightTheme
  };
}
