import { Injectable } from '@angular/core';
import { Chat, ChatMessage, ChatPreview } from './types';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatsService {
  get() {
    const chats: ChatPreview[] = [
      {
        id: 'chat001',
        user: {
          id: 'user101',
          name: 'Alice Smith',
          avatar: 'https://example.com/alice_avatar.jpg',
        },
      },
      {
        id: 'chat002',
        user: {
          id: 'user202',
          name: 'Bob Johnson',
          avatar: 'https://example.com/bob_avatar.jpg',
        },
      },
      {
        id: 'chat003',
        user: {
          id: 'user303',
          name: 'Eva Martinez',
          avatar: 'https://example.com/eva_avatar.jpg',
        },
      },
      {
        id: 'chat004',
        user: {
          id: 'user404',
          name: 'David Kim',
          avatar: 'https://example.com/david_avatar.jpg',
        },
      },
      {
        id: 'chat005',
        user: {
          id: 'user505',
          name: 'Grace Chen',
          avatar: 'https://example.com/grace_avatar.jpg',
        },
      },
    ];

    return of(chats);
  }

  getOne(id: string) {
    const messages: ChatMessage[] = [
      {
        id: 'message001',
        user: {
          id: 'user101',
          name: 'Alice Smith',
          avatar: 'https://example.com/alice_avatar.jpg',
        },
        content: 'Hello, how are you?',
      },
      {
        id: 'message002',
        user: {
          id: 'user202',
          name: 'Bob Johnson',
          avatar: 'https://example.com/bob_avatar.jpg',
        },
        content: 'I am fine, thank you',
      }
    ];

    const chat: Chat = {
      id,
      messages,
    };

    return of(chat);
  }
}
