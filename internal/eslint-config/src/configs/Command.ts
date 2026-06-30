import type { Linter } from "eslint";

import createCommand from "eslint-plugin-command/config";

export async function command(): Promise<Linter.Config[]> {
  return [
    {
      ...createCommand()
    }
  ];
}
