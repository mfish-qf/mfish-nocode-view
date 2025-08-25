/**
 * @description: 问题
 * @author: mfish
 * @date: 2023/2/8 20:19
 */
export interface QuestionModel {
  id: string;
  prompt: string;
}

export interface ChatsModel {
  id: string;
  user: string;
  chat: string;
  enter?: boolean;
}

export interface ChatResponseVo {
  id: string;
  content: string;
}
