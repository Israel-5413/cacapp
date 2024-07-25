import { SortOrder } from "../../util/SortOrder";

export type MyFriendsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  myUniqueId?: SortOrder;
  friendsUniqueId?: SortOrder;
  status?: SortOrder;
  dateCreated?: SortOrder;
};
