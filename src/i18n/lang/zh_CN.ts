import { genMessage } from '../Helper';
import antdLocale from 'ant-design-vue/es/locale/zh_CN';

const modules = import.meta.glob('./zh-CN/**/*.ts');

export default {
  message: {
    ...genMessage(modules , 'zh-CN'),
    antdLocale,
  },
};
