import { SortOrder } from "../../util/SortOrder";

export type CommentSectionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  category?: SortOrder;
  message?: SortOrder;
  creatorId?: SortOrder;
  dateCreated?: SortOrder;
  status?: SortOrder;
  uniqueId?: SortOrder;
};
