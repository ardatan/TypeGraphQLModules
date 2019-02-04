import { Inject, Injectable } from '@graphql-modules/di';
import { Message } from './message.type';
import { MESSAGES } from './messages.symbol';

@Injectable()
export class MessagesProvider {

  constructor(
    @Inject(MESSAGES) private messages: Message[],
  ) {}

  getMessages(chatId: number): Message[] {
    return this.messages.filter(message => message.chatId === chatId);
  }

  getMessage(id: number): Message {
    return this.messages.find(message => message.id === id);
  }

  createMessage(content: string, chatId: number): Message {
    const id = this.messages[this.messages.length-1].id + 1;

    const newMessage: Message = {id, chatId, content};

    this.messages.push(newMessage);

    return newMessage;
  }

  deleteMessage(id: number): number {
    
    const message = this.messages.find(message => message.id === id);
    this.messages.splice(this.messages.indexOf(message), 1);

    return id;
  }
}