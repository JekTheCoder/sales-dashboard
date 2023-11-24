export type ChatPreview = {
  id: string;
  user: UserPreview;
};

export type UserPreview = {
  id: string;
  name: string;
  avatar: string;
};

export type Chat = {
  id: string;
  messages: ChatMessage[];
};

export type ChatMessage = {
  id: string;
  user: UserPreview;
  content: string;
};
