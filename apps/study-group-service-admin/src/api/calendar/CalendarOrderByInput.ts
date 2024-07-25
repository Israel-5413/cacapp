import { SortOrder } from "../../util/SortOrder";

export type CalendarOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  start?: SortOrder;
  end?: SortOrder;
  description?: SortOrder;
  color?: SortOrder;
  icon?: SortOrder;
};
