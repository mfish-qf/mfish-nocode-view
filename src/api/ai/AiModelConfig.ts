import { defHttp } from "@mfish/core/utils/http/axios";
import { AiModelConfig, ReqAiModelConfig, AiModelConfigPageModel } from "@/api/ai/model/AiModelConfigModel";

/**
 * @description: AI模型配置信息
 * @author: mfish
 * @date: 2026-07-03
 * @version: V2.4.0
 */
enum Api {
  AiModelConfig = "/ai/aiModelConfig"
}

/**
 * 分页列表查询
 *
 * @param reqAiModelConfig
 * @return 返回分页列表
 */
export const getAiModelConfigList = (reqAiModelConfig?: ReqAiModelConfig) => {
  return defHttp.get<AiModelConfigPageModel>({ url: Api.AiModelConfig, params: reqAiModelConfig });
};

/**
 * 通过id查询
 *
 * @param id 唯一ID
 * @return 返回分页列表
 */
export function getAiModelConfigById(id: string) {
  return defHttp.get<AiModelConfig>({ url: `${Api.AiModelConfig}/${id}` });
}

/**
 * 导出AI模型配置信息
 * @param reqAiModelConfig 请求参数
 */
export function exportAiModelConfig(reqAiModelConfig?: ReqAiModelConfig) {
  return defHttp.download({ url: `${Api.AiModelConfig}/export`, params: reqAiModelConfig });
}

/**
 * 新增AI模型配置信息
 *
 * @param aiModelConfig 请求参数
 * @return 返回结果
 */
export function insertAiModelConfig(aiModelConfig: AiModelConfig) {
  return defHttp.post<AiModelConfig>(
    { url: Api.AiModelConfig, params: aiModelConfig },
    { successMessageMode: "message" }
  );
}

/**
 * 修改AI模型配置信息
 *
 * @param aiModelConfig
 * @return 返回结果
 */
export function updateAiModelConfig(aiModelConfig: AiModelConfig) {
  return defHttp.put<AiModelConfig>(
    { url: Api.AiModelConfig, params: aiModelConfig },
    { successMessageMode: "message" }
  );
}

/**
 * 删除AI模型配置信息
 *
 * @param id 唯一ID
 * @return 返回结果
 */
export function deleteAiModelConfig(id: string) {
  return defHttp.delete<boolean>({ url: `${Api.AiModelConfig}/${id}` }, { successMessageMode: "message" });
}

/**
 * 批量删除AI模型配置信息
 *
 * @param ids 唯一ID多个逗号隔开
 * @return 返回结果
 */
export function deleteBatchAiModelConfig(ids: string) {
  return defHttp.delete<boolean>({ url: `${Api.AiModelConfig}/batch/${ids}` }, { successMessageMode: "message" });
}
