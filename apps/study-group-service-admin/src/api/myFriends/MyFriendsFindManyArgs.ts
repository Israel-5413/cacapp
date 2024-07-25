import { MyFriendsWhereInput } from "./MyFriendsWhereInput";
import { MyFriendsOrderByInput } from "./MyFriendsOrderByInput";

export type MyFriendsFindManyArgs = {
  where?: MyFriendsWhereInput;
  orderBy?: Array<MyFriendsOrderByInput>;
  skip?: number;
  take?: number;
};
