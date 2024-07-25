import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MyFriendsService } from "./myFriends.service";
import { MyFriendsControllerBase } from "./base/myFriends.controller.base";

@swagger.ApiTags("myFriends")
@common.Controller("myFriends")
export class MyFriendsController extends MyFriendsControllerBase {
  constructor(protected readonly service: MyFriendsService) {
    super(service);
  }
}
