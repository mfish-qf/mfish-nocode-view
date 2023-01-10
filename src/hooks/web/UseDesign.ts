import { useAppProviderContext } from '/@/components/general/Application';
export function useDesign(scope: string) {
  const values = useAppProviderContext();

  return {
    prefixCls: `${values.prefixCls}-${scope}`,
    prefixVar: values.prefixCls,
  };
}
