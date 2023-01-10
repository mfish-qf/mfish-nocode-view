import { SizeEnum } from "/@/enums/SizeEnum";

export interface LoadingProps {
  tip: string;
  size: SizeEnum;
  absolute: boolean;
  loading: boolean;
  background: string;
  theme: "dark" | "light";
}
