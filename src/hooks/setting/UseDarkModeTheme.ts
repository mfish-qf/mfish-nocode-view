import { computed, reactive } from "vue";
import { theme } from "ant-design-vue";
import { useRootSetting } from "@/hooks/setting/UseRootSetting";
import { ThemeEnum } from "@/enums/AppEnum";

export function useDarkModeTheme() {
  const { getDarkMode } = useRootSetting();
  const { darkAlgorithm } = theme;
  const isDark = computed(() => getDarkMode.value === ThemeEnum.DARK);
  const color = {
    token: {
      colorPrimary: useRootSetting().getThemeColor,
      colorInfo: useRootSetting().getThemeColor,
      colorSuccess: "#55D187",
      colorWarning: "#EFBD47",
      colorError: "#ED6F6F"
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
