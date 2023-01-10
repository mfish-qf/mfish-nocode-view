import { withInstall } from '/@/utils';
import description from './src/Description.vue';

export * from './src/Typing';
export { useDescription } from './src/UseDescription';
export const Description = withInstall(description);
