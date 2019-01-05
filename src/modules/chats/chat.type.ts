import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class Chat {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

}
