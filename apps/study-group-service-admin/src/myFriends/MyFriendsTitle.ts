import { MyFriends as TMyFriends } from "../api/myFriends/MyFriends";

export const MYFRIENDS_TITLE_FIELD = "myUniqueId";

export const MyFriendsTitle = (record: TMyFriends): string => {
  return record.myUniqueId?.toString() || String(record.id);
};
