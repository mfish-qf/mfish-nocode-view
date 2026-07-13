import { BaseEntity, PageResult, ReqPage } from "@mfish/core/api";

/**
 * @description: AI模型配置信息
 * @author: mfish
 * @date: 2026-07-03
 * @version: V2.4.0
 */
export interface AiModelConfig extends BaseEntity<string> {
  //租户ID
  tenantId?: string;
  //提供者: openai/ollama/deepseek/zhipuai/anthropic
  provider: string;
  //模型名称: gpt-4o, qwen3:8b, deepseek-v3 等
  modelName: string;
  //API密钥(加密存储)
  apiKey?: string;
  //API基础地址
  baseUrl?: string;
  //最大token数
  maxTokens?: number;
  //温度参数
  temperature?: number;
  //top_p参数
  topP?: number;
  //补全项路径
  completionsPath?: string;
  //是否启用 1启用 0禁用
  enabled?: number;
  //排序(决定fallback优先级)
  sortOrder?: number;
  //备注
  remark?: string;
}

export interface ReqAiModelConfig extends ReqPage {
  //模型名称: gpt-4o, qwen3:8b, deepseek-v3 等
  modelName?: string;
  //是否启用 1启用 0禁用
  enabled?: number;
  //提供者: openai/ollama/deepseek/zhipuai/anthropic
  provider?: string;
}

//分页结果集
export type AiModelConfigPageModel = PageResult<AiModelConfig>;
