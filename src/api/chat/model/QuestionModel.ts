/**
 * @description: 问题
 * @author: mfish
 * @date: 2023/2/8 20:19
 */
export interface QuestionModel {
  id: string;
  data: string;
}

export interface ChatsModel {
  id: string;
  user: string;
  chat: string;
}

export interface CompletionResult {
  id: string;
  result: string;
}