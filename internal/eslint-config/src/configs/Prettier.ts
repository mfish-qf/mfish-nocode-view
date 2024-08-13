import type { Linter } from "eslint";

import { interopDefault } from "../Util";

export async function prettier(): Promise<Linter.Config[]> {
  const [pluginPrettier] = await Promise.all([interopDefault(import("eslint-plugin-prettier"))] as const);
  return [
    {
      plugins: {
        prettier: pluginPrettier
      },
      rules: {
        "prettier/prettier": "error"
      }
    }
  ];
}
