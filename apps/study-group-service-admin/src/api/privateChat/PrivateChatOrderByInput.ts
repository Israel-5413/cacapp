import { SortOrder } from "../../util/SortOrder";

export type PrivateChatOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dateCreated?: SortOrder;
  incomingMessageId?: SortOrder;
  outgoingMessageId?: SortOrder;
  message?: SortOrder;
};
