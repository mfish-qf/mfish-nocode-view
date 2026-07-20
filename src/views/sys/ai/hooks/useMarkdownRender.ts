/**
 * @description: markdown / json 内容渲染抽象，chat 与 agent 模式共用
 * @author: mfish
 */
import { h, type VNode } from "vue";
import markdownit from "markdown-it";
import { JsonPreview } from "@mfish/core/components/CodeEditor";

const md = markdownit({ html: true, breaks: true });

/** 将 markdown 文本渲染为带 HTML 的 div */
export function renderMarkdown(content: string) {
  return h("div", { innerHTML: md.render(content) });
}

/** 消息渲染函数类型 */
export type MessageRender = (content: any) => VNode;

/**
 * 智能渲染：尝试按 JSON 渲染为可折叠预览，失败则回退到 markdown
 * - 空内容或非 JSON 起始字符 → markdown
 * - JSON 解析成功 → JsonPreview
 * - JSON 解析失败 → markdown
 */
export const renderSmart: MessageRender = (content) => {
  if (
    content === undefined ||
    content === null ||
    content === "" ||
    (!content.startsWith("{") && !content.startsWith("["))
  ) {
    return renderMarkdown(content);
  }
  try {
    const json = JSON.parse(content);
    return h(JsonPreview, {
      data: json,
      deep: 2,
      showLine: false,
      showLineNumber: false,
      collapsedNodeLength: 10
    });
  } catch {
    return renderMarkdown(content);
  }
};
