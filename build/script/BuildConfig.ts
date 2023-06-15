/**
 * @description: 构建配置
 * @author: mfish
 * @date: 2022/10/9 15:58
 */
import { GLOB_CONFIG_FILE_NAME, OUTPUT_DIR } from "../Constant";
import fs, { writeFileSync } from "fs-extra";
import { getConfigFileName, getEnvConfig, getRootPath } from "../BuildUtils";
import pkg from "../../package.json";
import colors from "picocolors";

interface ConfigParams {
  configName: string;
  config: any;
  configFileName?: string;
}

function createConfig(params: ConfigParams) {
  const { configName, config, configFileName } = params;
  try {
    const windowConf = `window.${configName}`;
    let configStr = `${windowConf}=${JSON.stringify(config)};`;
    configStr += `
      Object.freeze(${windowConf});
      Object.defineProperty(window, "${configName}", {configurable: false,writable: false,});`.replace(/\s/g, "");
    fs.mkdirp(getRootPath(OUTPUT_DIR)).then();
    writeFileSync(getRootPath(`${OUTPUT_DIR}/${configFileName}`), configStr);
    console.log(colors.cyan(`[${pkg.name}] - configuration file is build successfully:`));
    console.log(`${OUTPUT_DIR}/${configFileName}\n`);
  } catch (ex) {
    console.log(colors.red(`configuration file configuration file failed to package${ex}`));
  }
}

export function runBuildConfig() {
  const config = getEnvConfig();
  const configFileName = getConfigFileName(config);
  createConfig({ config, configName: configFileName, configFileName: GLOB_CONFIG_FILE_NAME });
}
