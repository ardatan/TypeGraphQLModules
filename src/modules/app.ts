import { GraphQLModule } from "@graphql-modules/core";

import { ChatsModule } from "./chats";
import { MessagesModule } from "./messages";
import { Chat } from "./chats/chat.type";
import { Message } from "./messages/message.type";

export const AppModule = new GraphQLModule({
    imports: ({ config: { chats, messages} }: { config: { chats: Chat[], messages: Message[] } }) => [
        ChatsModule.forRoot({ chats }),
        MessagesModule.forRoot({ messages }),
    ],
    configRequired: true,
});