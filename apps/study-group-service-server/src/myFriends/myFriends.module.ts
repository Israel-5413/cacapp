import { Module } from "@nestjs/common";
import { MyFriendsModuleBase } from "./base/myFriends.module.base";
import { MyFriendsService } from "./myFriends.service";
import { MyFriendsController } from "./myFriends.controller";
import { MyFriendsResolver } from "./myFriends.resolver";

@Module({
  imports: [MyFriendsModuleBase],
  controllers: [MyFriendsController],
  providers: [MyFriendsService, MyFriendsResolver],
  exports: [MyFriendsService],
})
export class MyFriendsModule {}
