#!/usr/bin/env node

/**
 * 扫描项目源码中的 iconify 图标引用，从 @iconify-json/* 包中提取所需图标数据，
 * 生成 src/assets/icons/local-iconify-data.ts 实现本地图标。
 *
 * 用法: pnpm generate:icons
 */

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// 项目中使用的 iconify 图标前缀
const KNOWN_PREFIXES = new Set(["ant-design", "ion", "ri", "mdi", "carbon", "simple-icons"]);

// 递归扫描目录
function walkDir(dir, exts, skipDirs = ["node_modules"]) {
  const results = [];
  try {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith(".")) continue;
      if (skipDirs.includes(entry.name) && entry.isDirectory()) continue;
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        results.push(...walkDir(fullPath, exts, skipDirs));
      } else if (exts.some((ext) => entry.name.endsWith(ext))) {
        results.push(fullPath);
      }
    }
  } catch {
    /* ignore */
  }
  return results;
}

// 从源码中提取 prefix:name 格式的图标引用
function scanIconRefs(files) {
  const refs = new Map();
  const regex = /['"`]([a-z0-9-]+):([a-z0-9-]+)['"`]/g;

  for (const file of files) {
    try {
      const content = readFileSync(file, "utf8");
      let match;
      while ((match = regex.exec(content)) !== null) {
        const [, prefix, name] = match;
        if (!KNOWN_PREFIXES.has(prefix)) continue;
        if (!refs.has(prefix)) refs.set(prefix, new Set());
        refs.get(prefix).add(name);
      }
    } catch {
      /* ignore */
    }
  }
  return refs;
}

// 读取 IconPicker 的图标列表 (icons.data.ts)
function readPickerIcons() {
  const filePath = resolve(ROOT, "packages/core/src/components/Icon/data/icons.data.ts");
  try {
    const content = readFileSync(filePath, "utf8");
    const prefixMatch = content.match(/prefix:\s*["']([^"']+)["']/);
    const iconsMatch = content.match(/icons:\s*\[([\s\S]*?)\]/);
    if (!prefixMatch || !iconsMatch) return [];
    const prefix = prefixMatch[1];
    return [...iconsMatch[1].matchAll(/"([^"]+)"/g)].map((m) => ({
      prefix,
      name: m[1]
    }));
  } catch {
    return [];
  }
}

// 从完整图标数据中提取需要的图标（含别名解析）
function extractNeededIcons(fullData, neededNames) {
  const icons = {};
  const aliases = {};
  const resolved = new Set();

  for (const name of neededNames) {
    if (fullData.icons[name]) {
      icons[name] = fullData.icons[name];
      resolved.add(name);
    } else if (fullData.aliases?.[name]) {
      aliases[name] = fullData.aliases[name];
      const parent = fullData.aliases[name].parent;
      if (fullData.icons[parent] && !resolved.has(parent)) {
        icons[parent] = fullData.icons[parent];
        resolved.add(parent);
      }
    }
  }

  return { icons, aliases };
}

async function main() {
  console.log("扫描源码中的 iconify 图标引用...\n");

  // 1. 扫描源码
  const sourceFiles = [
    ...walkDir(resolve(ROOT, "src"), [".vue", ".ts", ".tsx", ".js"]),
    ...walkDir(resolve(ROOT, "packages"), [".vue", ".ts", ".tsx", ".js"])
  ];
  const scannedRefs = scanIconRefs(sourceFiles);

  // 2. 合并 IconPicker 图标列表
  const pickerIcons = readPickerIcons();
  const allRefs = new Map(scannedRefs);
  for (const { prefix, name } of pickerIcons) {
    if (!allRefs.has(prefix)) allRefs.set(prefix, new Set());
    allRefs.get(prefix).add(name);
  }

  // 3. 从 @iconify-json/* 包中提取图标数据
  const collections = [];

  for (const [prefix, names] of allRefs) {
    try {
      const pkgName = `@iconify-json/${prefix}`;
      const mod = await import(pkgName);
      const fullData = mod.icons || mod.default || mod;

      if (!fullData?.icons) {
        console.log(`⚠ ${prefix}: 无图标数据`);
        continue;
      }

      const { icons, aliases } = extractNeededIcons(fullData, names);
      const iconCount = Object.keys(icons).length;
      const aliasCount = Object.keys(aliases).length;

      if (iconCount === 0 && aliasCount === 0) {
        console.log(`⚠ ${prefix}: 未匹配到图标`);
        continue;
      }

      const collection = {
        prefix,
        icons,
        ...(aliasCount > 0 ? { aliases } : {}),
        ...(fullData.width ? { width: fullData.width } : {}),
        ...(fullData.height ? { height: fullData.height } : {})
      };

      collections.push({ prefix, collection, iconCount, aliasCount });
      console.log(`✓ ${prefix}: ${iconCount} 图标${aliasCount > 0 ? `, ${aliasCount} 别名` : ""}`);
    } catch {
      console.log(`✗ 未安装 @iconify-json/${prefix}，请执行: pnpm add -D @iconify-json/${prefix}`);
    }
  }

  if (collections.length === 0) {
    console.log("\n❌ 未生成任何图标数据。");
    process.exit(1);
  }

  // 4. 生成 TypeScript 文件
  const outputPath = resolve(ROOT, "src/assets/icons/local-iconify-data.ts");
  let code = `// 由 scripts/generate-icons.mjs 自动生成 — 请勿手动编辑\n`;
  code += `// 运行 pnpm generate:icons 重新生成\n\n`;
  code += `import { addCollection } from "@iconify/vue";\n\n`;

  for (const { prefix, collection, iconCount, aliasCount } of collections) {
    code += `// ${prefix}: ${iconCount} 图标${aliasCount > 0 ? `, ${aliasCount} 别名` : ""}\n`;
    code += `addCollection(${JSON.stringify(collection)});\n\n`;
  }

  writeFileSync(outputPath, code, "utf8");

  const total = collections.reduce((sum, c) => sum + c.iconCount, 0);
  console.log(`\n✅ 共 ${total} 个图标已生成 → ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
