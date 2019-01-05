import { GraphQLModule } from '@graphql-modules/core';
import { MessagesProvider } from "@modules/messages/messages.provider";
import { CommonModule } from "@modules/common";
import { ChatsModule } from "@modules/chats";
import { MessageResolver } from './message.resolver';
import { buildSchemaSync } from 'type-graphql';
import { ChatResolver } from './chat.resolver';

export const MessagesModule = new GraphQLModule({
  imports: [
    CommonModule.forChild(),
    ChatsModule,
  ],
  providers: [
    MessagesProvider,
    ChatResolver,
    MessageResolver
  ],
  extraSchemas: [
    buildSchemaSync({
      resolvers: [
        ChatResolver,
        MessageResolver
      ]
    })
  ]
});