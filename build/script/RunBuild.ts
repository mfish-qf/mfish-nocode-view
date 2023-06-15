/**
 * @description: 构建运行
 * @author: mfish
 * @date: 2022/10/9 16:23
 */
import { runBuildConfig } from "./BuildConfig";
import pkg from "../../package.json";
import colors from "picocolors";

async function runBuild() {
  try {
    const argvList = process.argv.splice(2);

    // Generate configuration file
    if (!argvList.includes("disabled-config")) {
      runBuildConfig();
    }

    console.log(colors.cyan(`[${pkg.name}]) - build successfully!`));
  } catch (error) {
    console.log(colors.red(`vite build error:\n ${error}`));
    process.exit(1);
  }
}

runBuild().then();
