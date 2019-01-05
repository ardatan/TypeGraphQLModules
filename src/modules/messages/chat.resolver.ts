import { Resolver, FieldResolver, Root } from "type-graphql";
import { MessagesProvider } from "./messages.provider";
import { ChatDbObject } from "@models";
import { Chat } from "@modules/chats/chat.type";
import { Message } from "./message.type";

@Resolver(of => Chat)
export class ChatResolver {
    constructor(private messageProvider: MessagesProvider) {}
    
    @FieldResolver(returns => [Message])
    messages(@Root() root: ChatDbObject){
        return this.messageProvider.getMessages(root.id)
    }
}
