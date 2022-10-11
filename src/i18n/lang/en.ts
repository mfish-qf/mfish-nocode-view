import { genMessage } from "../Helper";
import antdLocale from "ant-design-vue/es/locale/en_US";

const modules = import.meta.glob("./en/**/*.ts", { eager: true });

export default {
  message: {
    ...genMessage(modules as Record<string, Record<string, any>> , "en"),
    antdLocale
  },
  dateLocale: null,
  dateLocaleName: "en"
};
