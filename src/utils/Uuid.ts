import { v4 } from "uuid";

export function buildUUID(): string {
  return v4().replace(/-/g, "");
}