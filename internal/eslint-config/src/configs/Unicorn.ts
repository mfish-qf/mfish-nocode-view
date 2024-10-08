import type { Linter } from "eslint";

import { interopDefault } from "../Util";

export async function unicorn(): Promise<Linter.Config[]> {
  const [pluginUnicorn] = await Promise.all([interopDefault(import("eslint-plugin-unicorn"))] as const);

  return [
    {
      plugins: {
        unicorn: pluginUnicorn
      },
      rules: {
        ...pluginUnicorn.configs.recommended.rules,
        "unicorn/consistent-destructuring": "off",
        "unicorn/consistent-function-scoping": "off",
        "unicorn/filename-case": "off",
        "unicorn/import-style": "off",
        "unicorn/no-array-for-each": "off",
        "unicorn/no-null": "off",
        "unicorn/prefer-at": "off",
        "unicorn/prefer-dom-node-text-content": "off",
        "unicorn/prefer-export-from": ["error", { ignoreUsedVariables: true }],
        "unicorn/prefer-top-level-await": "off",
        "unicorn/prevent-abbreviations": "off",
        "unicorn/no-array-reduce": "off",
        "unicorn/no-nested-ternary": "off",
        "unicorn/prefer-ternary": "off",
        "unicorn/prefer-structured-clone": "off"
      }
    },
    {
      files: ["scripts/**/*.?([cm])[jt]s?(x)", "internal/**/*.?([cm])[jt]s?(x)"],
      rules: {
        "unicorn/no-process-exit": "off"
      }
    }
  ];
}
