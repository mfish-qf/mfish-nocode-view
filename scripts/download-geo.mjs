/**
 * 下载阿里云DataV GeoJSON地图数据到本地
 * 运行: node scripts/download-geo.mjs
 */
import { mkdirSync, writeFileSync, existsSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const GEO_DIR = join(__dirname, "..", "public", "geo");
const BASE_URL = "https://geo.datav.aliyun.com/areas_v3/bound";

const provinces = [
  { label: "全国", adcode: "100000" },
  { label: "北京市", adcode: "110000" },
  { label: "天津市", adcode: "120000" },
  { label: "河北省", adcode: "130000" },
  { label: "山西省", adcode: "140000" },
  { label: "内蒙古自治区", adcode: "150000" },
  { label: "辽宁省", adcode: "210000" },
  { label: "吉林省", adcode: "220000" },
  { label: "黑龙江省", adcode: "230000" },
  { label: "上海市", adcode: "310000" },
  { label: "江苏省", adcode: "320000" },
  { label: "浙江省", adcode: "330000" },
  { label: "安徽省", adcode: "340000" },
  { label: "福建省", adcode: "350000" },
  { label: "江西省", adcode: "360000" },
  { label: "山东省", adcode: "370000" },
  { label: "河南省", adcode: "410000" },
  { label: "湖北省", adcode: "420000" },
  { label: "湖南省", adcode: "430000" },
  { label: "广东省", adcode: "440000" },
  { label: "广西壮族自治区", adcode: "450000" },
  { label: "海南省", adcode: "460000" },
  { label: "重庆市", adcode: "500000" },
  { label: "四川省", adcode: "510000" },
  { label: "贵州省", adcode: "520000" },
  { label: "云南省", adcode: "530000" },
  { label: "西藏自治区", adcode: "540000" },
  { label: "陕西省", adcode: "610000" },
  { label: "甘肃省", adcode: "620000" },
  { label: "青海省", adcode: "630000" },
  { label: "宁夏回族自治区", adcode: "640000" },
  { label: "新疆维吾尔自治区", adcode: "650000" },
  { label: "台湾省", adcode: "710000" },
  { label: "香港特别行政区", adcode: "810000" },
  { label: "澳门特别行政区", adcode: "820000" }
];

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function download(url, dest) {
  if (existsSync(dest)) {
    console.log(`[跳过] 已存在 ${dest.split("\\").pop()}`);
    return true;
  }
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      console.error(`[失败] ${url.split("/").pop()} => ${resp.status}`);
      return false;
    }
    const data = await resp.json();
    writeFileSync(dest, JSON.stringify(data));
    console.log(`[完成] ${dest.split("\\").pop()}`);
    return true;
  } catch (e) {
    console.error(`[错误] ${url.split("/").pop()}`, e.message);
    return false;
  }
}

async function main() {
  mkdirSync(GEO_DIR, { recursive: true });

  console.log("开始下载省份地图数据...");

  // 1. 下载全国和各省 _full.json（包含子区域）
  for (const p of provinces) {
    const url = `${BASE_URL}/${p.adcode}_full.json`;
    const dest = join(GEO_DIR, `${p.adcode}_full.json`);
    await download(url, dest);
    await sleep(200);
  }

  console.log("\n开始下载地市地图数据...");

  // 2. 下载各地市 .json（用于单独显示地市地图）
  for (const p of provinces) {
    if (p.adcode === "100000") continue;
    const provinceFile = join(GEO_DIR, `${p.adcode}_full.json`);
    if (!existsSync(provinceFile)) {
      console.log(`[跳过] ${p.label} 省份文件不存在`);
      continue;
    }
    try {
      const geoJson = JSON.parse(readFileSync(provinceFile, "utf8"));
      if (!geoJson.features) continue;

      for (const f of geoJson.features) {
        const cityAdcode = String(f.properties.adcode);
        const url = `${BASE_URL}/${cityAdcode}.json`;
        const dest = join(GEO_DIR, `${cityAdcode}.json`);
        await download(url, dest);
        await sleep(100);
      }
    } catch (e) {
      console.error(`[错误] 处理 ${p.label} 地市数据失败:`, e.message);
    }
  }

  console.log("\n下载完成！");
}

main();
