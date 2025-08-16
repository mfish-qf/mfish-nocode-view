import { defHttp } from "@mfish/core/utils/http/axios";
import { ChatResponseVo, QuestionModel } from "@/api/demo/model/QuestionModel";

/**
 * @description: 聊天机器人
 * @author: mfish
 * @date: 2023/2/8 20:18
 */
enum Api {
  Question = "/ai/ollama/chat/stream"
}

export function answer(question: QuestionModel) {
  return defHttp.get<ChatResponseVo>(
    {
      url: Api.Question,
      params: question,
      timeout: 10 * 60 * 1000
    },
    { successMessageMode: "none" }
  );
}
