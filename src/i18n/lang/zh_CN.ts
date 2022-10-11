import { genMessage } from "../Helper";
import antdLocale from "ant-design-vue/es/locale/zh_CN";

const modules = import.meta.glob("./zh-CN/**/*.ts", { eager: true });

export default {
  message: {
    ...genMessage(modules as Record<string, Record<string, any>>, "zh-CN"),
    antdLocale
  }
};
