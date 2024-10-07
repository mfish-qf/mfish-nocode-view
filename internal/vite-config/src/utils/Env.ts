import { join } from "node:path";
import dotenv from "dotenv";
import { promises } from "node:fs";

/**
 * 获取当前环境下生效的配置文件名
 */
function getConfFiles() {
  const script = process.env.npm_lifecycle_script as string;
  const reg = /--mode ([\d_a-z]+)/;
  const result = reg.exec(script);
  if (result) {
    const mode = result[1];
    return [".env", `.env.${mode}`];
  }
  return [".env", ".env.production"];
}

/**
 * Get the environment variables starting with the specified prefix
 * @param match prefix
 * @param confFiles ext
 */
export async function getEnvConfig(
  match = "VITE_GLOB_",
  confFiles = getConfFiles()
): Promise<{
  [key: string]: string;
}> {
  let envConfig = {};

  for (const confFile of confFiles) {
    try {
      const envPath = await promises.readFile(join(process.cwd(), confFile), { encoding: "utf8" });
      const env = dotenv.parse(envPath);
      envConfig = { ...envConfig, ...env };
    } catch (error) {
      console.error(`Error in parsing ${confFile}`, error);
    }
  }
  const reg = new RegExp(`^(${match})`);
  Object.keys(envConfig).forEach((key) => {
    if (!reg.test(key)) {
      Reflect.deleteProperty(envConfig, key);
    }
  });
  return envConfig;
}
