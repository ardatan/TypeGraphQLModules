import { ChatsProvider } from "./chats.provider";
import { Resolver, Mutation, Arg, Int, Query } from 'type-graphql';
import { Chat } from "./chat.type";

@Resolver(of => Chat)
export class ChatResolver {
  constructor(private chatsProvider: ChatsProvider){}

  @Query(returns => [Chat])
  chats() {
    return this.chatsProvider.getChats();
  }
  
  @Query(returns => Chat)
  chat(@Arg('id') id: number) {
    return this.chatsProvider.getChat(id);
  }

  @Mutation(returns => Chat)
  createChat(@Arg('title') title: string, @Arg('description') description: string) {
    return this.chatsProvider.createChat({ id: Math.random(), title, description });
  }

  @Mutation(returns => Int)
  deleteChat(@Arg('id') id: number) {
    return this.chatsProvider.deleteChat(id);
  }

}

