import { Resolver, FieldResolver, Root, Mutation, Int, Arg } from 'type-graphql';
import { MessagesProvider } from "./messages.provider";
import { Chat } from "@modules/chats/chat.type";
import { Message } from "./message.type";
import { ChatsProvider } from '@modules/chats/chats.provider';

@Resolver(of => Chat)
export class ChatResolver {
    constructor(private messagesProvider: MessagesProvider, private chatsProvider: ChatsProvider) {}
    
    @FieldResolver(returns => [Message])
    messages(@Root() root: Chat){
        return this.messagesProvider.getMessages(root.id)
    }

    @Mutation(returns => Int)
    deleteChat(@Arg('id') id: number) {
      const messages = this.messagesProvider.getMessages(id);
      for ( const message of messages ) {
        this.messagesProvider.deleteMessage(message.id);
      }
      return this.chatsProvider.deleteChat(id);
    }
}
