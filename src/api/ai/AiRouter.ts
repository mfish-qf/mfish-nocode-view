import { defHttp } from "@mfish/core/utils/http/axios";
import { AiRouter } from "@/api/ai/model/AiRouterModel";

/**
 * @description: 天气表
 * @author: mfish
 * @date: 2025-08-18
 * @version: V2.1.1
 */
enum Api {
  AiRouter = "/ai/router"
}

export const getAiRouter = (prompt?: string) => {
  return defHttp.get<AiRouter>({ url: Api.AiRouter, params: { prompt } }, { errorMessageMode: "none" });
};
