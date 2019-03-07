import { GraphQLModule } from '@graphql-modules/core';
import { MessagesProvider } from "@modules/messages/messages.provider";
import { ChatsModule } from "@modules/chats";
import { MessageResolver } from './message.resolver';
import { buildSchemaSync } from 'type-graphql';
import { ChatResolver } from './chat.resolver';
import { Message } from './message.type';
import { MESSAGES } from './messages.symbol';

export const MessagesModule = new GraphQLModule({
  imports: [
    ChatsModule,
  ],
  providers: ({ config }: { config: { messages: Message[] } }) => [
    {
      provide: MESSAGES,
      useValue: config.messages,
    },
    MessagesProvider,
    ChatResolver,
    MessageResolver
  ],
  extraSchemas: () => [
    buildSchemaSync({
      resolvers: [
        ChatResolver,
        MessageResolver
      ],
      container: ({ context }) => context.injector
    })
  ] 
});
