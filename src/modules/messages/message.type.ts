import { ObjectType, Field, ID } from "type-graphql";
import { Chat } from "@modules/chats/chat.type";

@ObjectType()
export class Message {
    @Field(type => ID)
    id: string;
  
    @Field()
    content: string;

}
