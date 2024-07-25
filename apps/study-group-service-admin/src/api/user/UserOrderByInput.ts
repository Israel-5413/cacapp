import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  username?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  contact?: SortOrder;
  status?: SortOrder;
  uniqueId?: SortOrder;
  profileImage?: SortOrder;
  dateJoined?: SortOrder;
};
