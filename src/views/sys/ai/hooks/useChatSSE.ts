/**
 * @description: SSE 请求抽象，chat 与 agent 模式共用
 *   - 统一 SSE 解析逻辑（带缓冲防跨 chunk 截断）
 *   - 通过 onEvent 回调把每条解析后的事件交给上层按 type 分发
 * @author: mfish
 */
import { ref, type Ref } from "vue";
import { XRequest } from "ant-design-x-vue";
import { getToken } from "@mfish/core/utils/auth";

export type ChatStatus = "pending" | "loading" | "success" | "error";

export interface SseEvent {
  id?: string;
  type?: string;
  content?: string;
  stepIndex?: number | null;
  finishReason?: string | null;
  timestamp?: number;
  [key: string]: any;
}

export interface UseChatSseOptions {
  /** 后端接口路径，如 /ai/router 或 /ai/agent/chat */
  path: string;
  /** 当前会话 ID（用于后端区分会话上下文） */
  sessionId: Ref<string>;
  /** SSE 事件回调（每个解析后的事件都会调用一次） */
  onEvent: (event: SseEvent) => void;
  /** 流结束时回调（无论成功与否，data 是最终累计的事件数组） */
  onComplete?: (events: SseEvent[]) => void;
  /** 出错回调 */
  onError?: (error: Error) => void;
  /** 流开始回调（拿到 AbortController 用于中止） */
  onStream?: (controller: AbortController) => void;
  /** 本次请求附带的上传文件 fileKey 数组（聊天时带上文件 ID 供后端读取文件内容） */
  fileIds?: string[];
}

/**
 * 创建一次 SSE 请求。SSE 解析逻辑内置带缓冲的 TransformStream，
 * 防止跨 chunk 的 JSON 被截断导致丢数据（参考之前的 sseBuffer 实现）。
 */
export function useChatSSE() {
  const abortController = ref<AbortController>();

  /**
   * 发起一次请求
   * @param id      本条消息 ID（透传给后端）
   * @param val     用户输入文本
   * @param options 选项（path / sessionId / 回调）
   */
  function sseRequest(id: string, val: string, options: UseChatSseOptions) {
    const { path, sessionId, onEvent, onComplete, onError, onStream, fileIds } = options;
    const chatRequest = XRequest({
      baseURL: `/api${path}?access_token=${getToken()}`
    });

    let sseBuffer = "";

    chatRequest.value.create(
      {
        id,
        sessionId: sessionId.value,
        message: { role: "user", content: val },
        // 附带上传文件 ID 数组，便于后端读取文件内容做上下文
        fileIds: fileIds && fileIds.length > 0 ? fileIds : undefined
      },
      {
        onSuccess: (data) => {
          if (data && data.length > 0) {
            onComplete?.(data);
          } else {
            onError?.(new Error("empty response"));
          }
        },
        onError: (error: Error) => {
          onError?.(error);
        },
        onUpdate: (data) => {
          onEvent(data);
        },
        onStream: (controller) => {
          abortController.value = controller;
          onStream?.(controller);
        }
      },
      // 解析 SSE 流数据（带缓冲，防止跨 chunk 的 JSON 被截断导致丢数据）
      // 每条 SSE 事件单独入队，保留 type 字段供 agent 模式按类型分发
      new TransformStream<string, SseEvent>({
        transform(chunk, controller) {
          sseBuffer += chunk.replaceAll("\r\n", "\n");
          // SSE 事件以 \n\n 分隔，最后一段可能不完整，保留在缓冲区等下次拼接
          const events = sseBuffer.split("\n\n");
          sseBuffer = events.pop() || "";
          for (const event of events) {
            for (const line of event.split("\n")) {
              if (line.startsWith("data:")) {
                try {
                  const data = JSON.parse(line.slice(5));
                  if (data) {
                    controller.enqueue(data);
                  }
                } catch (error) {
                  console.error(error);
                }
              }
            }
          }
        },
        flush(controller) {
          if (!sseBuffer) return;
          for (const line of sseBuffer.split("\n")) {
            if (line.startsWith("data:")) {
              try {
                const data = JSON.parse(line.slice(5));
                if (data) {
                  controller.enqueue(data);
                }
              } catch (error) {
                console.error(error);
              }
            }
          }
        }
      })
    );
  }

  /** 中止当前请求 */
  function abort() {
    try {
      abortController.value?.abort();
    } catch (error) {
      console.error(error);
    }
  }

  return { abortController, sseRequest, abort };
}
