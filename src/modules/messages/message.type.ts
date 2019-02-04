import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class Message {
    @Field(type => ID)
    id: number;
  
    @Field()
    content: string;

    chatId: number;
}
