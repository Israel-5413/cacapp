import * as graphql from "@nestjs/graphql";
import { MyFriendsResolverBase } from "./base/myFriends.resolver.base";
import { MyFriends } from "./base/MyFriends";
import { MyFriendsService } from "./myFriends.service";

@graphql.Resolver(() => MyFriends)
export class MyFriendsResolver extends MyFriendsResolverBase {
  constructor(protected readonly service: MyFriendsService) {
    super(service);
  }
}
