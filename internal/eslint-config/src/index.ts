import type { Linter } from "eslint";

import {
  command,
  comments,
  disableds,
  ignores,
  javascript,
  jsdoc,
  jsonc,
  prettier,
  regexp,
  turbo,
  typescript,
  unicorn,
  vue
} from "./configs";

type FlatConfig = Linter.Config;

type FlatConfigPromise = FlatConfig | FlatConfig[] | Promise<FlatConfig> | Promise<FlatConfig[]>;

async function defineConfig(config: FlatConfig[] = []) {
  const configs: FlatConfigPromise[] = [
    vue(),
    javascript(),
    ignores(),
    prettier(),
    typescript(),
    jsonc(),
    disableds(),
    comments(),
    jsdoc(),
    unicorn(),
    regexp(),
    command(),
    turbo(),
    ...config
  ];

  const resolved = await Promise.all(configs);

  return resolved.flat();
}

export { defineConfig };
