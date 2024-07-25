import { SortOrder } from "../../util/SortOrder";

export type TasksOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  taskBody?: SortOrder;
  creatorId?: SortOrder;
  dateToStart?: SortOrder;
  dateToFinish?: SortOrder;
  dateCreated?: SortOrder;
  uniqueId?: SortOrder;
  title?: SortOrder;
  category?: SortOrder;
  status?: SortOrder;
};
