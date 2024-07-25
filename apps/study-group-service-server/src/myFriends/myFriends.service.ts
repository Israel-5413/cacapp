import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MyFriendsServiceBase } from "./base/myFriends.service.base";

@Injectable()
export class MyFriendsService extends MyFriendsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
