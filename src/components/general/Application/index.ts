import { withInstall } from "@mfish/core/src/utils";

import appLogo from "./src/AppLogo.vue";
import appProvider from "./src/AppProvider.vue";
import appSearch from "./src/search/AppSearch.vue";
import appLocalePicker from "./src/AppLocalePicker.vue";
import appDarkModeToggle from "./src/AppDarkModeToggle.vue";

export { useAppProviderContext } from "@mfish/core";

export const AppLogo = withInstall(appLogo);
export const AppProvider = withInstall(appProvider);
export const AppSearch = withInstall(appSearch);
export const AppLocalePicker = withInstall(appLocalePicker);
export const AppDarkModeToggle = withInstall(appDarkModeToggle);
