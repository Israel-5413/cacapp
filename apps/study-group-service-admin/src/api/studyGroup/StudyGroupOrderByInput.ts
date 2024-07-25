import { SortOrder } from "../../util/SortOrder";

export type StudyGroupOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  uniqueId?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  status?: SortOrder;
  category?: SortOrder;
  groupProfileImage?: SortOrder;
  creatorId?: SortOrder;
  dateCreated?: SortOrder;
};
