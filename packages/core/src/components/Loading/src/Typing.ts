import { SizeEnum } from "@core/enums";

export interface LoadingProps {
  tip: string;
  size: SizeEnum;
  absolute: boolean;
  loading: boolean;
  background: string;
  theme: "dark" | "light";
}
