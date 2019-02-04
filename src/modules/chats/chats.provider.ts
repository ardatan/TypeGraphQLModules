import { Injectable, Inject } from '@graphql-modules/di';
import { Chat } from './chat.type';
import { CHATS } from './chats.symbol';

@Injectable()
export class ChatsProvider {

  constructor(
    @Inject(CHATS) private chats: Chat[],
  ) {}

  getChats(): Chat[] {
    return this.chats;
  }

  getChat(id: number): Chat {
    return this.chats.find(chat => chat.id === id);
  }

  createChat(chat: Chat): Chat {
    const id = this.chats[this.chats.length-1].id + 1;

    const newChat: Chat = {
      id,
      ...chat,
    };

    this.chats.push(newChat);

    return newChat;
  }

  deleteChat(id: number): number {
    this.chats = this.chats.filter(chat => chat.id !== id);

    return id;
  }
}