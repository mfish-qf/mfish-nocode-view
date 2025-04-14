import { defHttp } from "@mfish/core/src/utils/http/axios";
import { CompletionResult, QuestionModel } from "@/api/demo/model/QuestionModel";

/**
 * @description: 聊天机器人
 * @author: mfish
 * @date: 2023/2/8 20:18
 */
enum Api {
  Question = "/demo/openai/answer"
}

export function answer(question: QuestionModel) {
  return defHttp.post<CompletionResult>(
    {
      url: Api.Question,
      params: question,
      timeout: 10 * 60 * 1000
    },
    { successMessageMode: "none" }
  );
}
