import { Resolver, Query, Arg, Mutation, Int, FieldResolver, Root } from "type-graphql";
import { Message } from "./message.type";
import { MessagesProvider } from "./messages.provider";
import { duplicateDirectiveMessage } from "graphql/validation/rules/UniqueDirectivesPerLocation";
import { MessageDbObject } from "@models";
import { ChatsProvider } from "@modules/chats/chats.provider";
import { Chat } from "@modules/chats/chat.type";

@Resolver(of => Message)
export class MessageResolver {
    constructor(private chatsProvider: ChatsProvider, private messagesProvider: MessagesProvider){}
    
    @FieldResolver(returns => Chat)
    chat(@Root() root: MessageDbObject) {
        return this.chatsProvider.getChat(root.chatId);
    }
    
    @Query(returns => [Message])
    messages(@Arg('chatId') chatId: number) {
        return this.messagesProvider.getMessages(chatId);
    }

    @Query(returns => Message)
    message(@Arg('id') id: number) {
        return this.messagesProvider.getMessage(id);
    }

    @Mutation(returns => Message)
    createMessage(@Arg('content') content: string, @Arg('chatId') chatId: number) {
        return this.messagesProvider.createMessage(content, chatId);
    }

    @Mutation(returns => Int)
    deleteMessage(@Arg('id') id: number) {
        return this.messagesProvider.deleteMessage(id);
    }
}