/**
 * @description: 模块类型
 * @author: mfish
 * @date: 2022/10/10 11:51
 */
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const Component: DefineComponent<object, object, any>;
  export default Component;
}

// declare module "ant-design-vue/es/locale/*" {
//   import { Locale } from "ant-design-vue/types/locale-provider";
//   const locale: Locale & ReadonlyRecordable;
//   export default locale as Locale & ReadonlyRecordable;
// }

declare module "virtual:*" {
  const result: any;
  export default result;
}
