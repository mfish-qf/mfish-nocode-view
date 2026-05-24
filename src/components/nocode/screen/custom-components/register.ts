import { registerCustomComponents } from "@mfish/nocode";

const modules = import.meta.glob("./**/*.vue");

const registry: Record<string, () => Promise<any>> = {};
for (const [path, loader] of Object.entries(modules)) {
  // ./DemoComponent.vue -> DemoComponent, ./charts/BarChart.vue -> charts/BarChart
  const match = path.match(/^\.\//) && path.replace(/^\.\//, "").replace(/\.vue$/, "");
  if (match) {
    registry[match] = loader as () => Promise<any>;
  }
}

registerCustomComponents(registry);
