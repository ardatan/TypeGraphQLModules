import { GraphQLModule } from '@graphql-modules/core';
import { ChatsProvider } from "./chats.provider";
import { buildSchemaSync } from 'type-graphql';
import { ChatResolver } from './chat.resolver';
import { Chat } from './chat.type';
import { CHATS } from './chats.symbol';

export const ChatsModule = new GraphQLModule({
  providers: ({ config }: { config: { chats: Chat[] } }) => [
    {
      provide: CHATS,
      useValue: config.chats,
    },
    ChatsProvider,
    ChatResolver
  ],
  extraSchemas: () => [
    buildSchemaSync({
      resolvers: [
        ChatResolver
      ],
      container: ({ context }) => context.injector
    })
  ]
});
