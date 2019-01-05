import { GraphQLModule } from '@graphql-modules/core';
import { CommonModule } from "@modules/common";
import { ChatsProvider } from "./chats.provider";
import { buildSchemaSync } from 'type-graphql';
import { ChatResolver } from './chat.resolver';

export const ChatsModule = new GraphQLModule({
  imports: [
    CommonModule.forChild()
  ],
  providers: [
    ChatsProvider,
    ChatResolver,
  ],
  extraSchemas: [
    buildSchemaSync({
      resolvers: [
        ChatResolver
      ]
    })
  ]
});
