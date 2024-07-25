import { SortOrder } from "../../util/SortOrder";

export type ResourceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  file?: SortOrder;
  creatorId?: SortOrder;
  dateCreated?: SortOrder;
  status?: SortOrder;
};
