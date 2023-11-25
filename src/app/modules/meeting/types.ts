import { ChatMessage, UserPreview } from '@modules/chat/types';

export type Meeting = {
  id: string;
  name: string;
  client: UserPreview;
  chat: {
    id: string;
    messages: ChatMessage[];
  };
};
