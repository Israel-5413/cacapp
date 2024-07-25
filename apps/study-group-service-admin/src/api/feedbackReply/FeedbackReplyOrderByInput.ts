import { SortOrder } from "../../util/SortOrder";

export type FeedbackReplyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  feedbackId?: SortOrder;
  replyerId?: SortOrder;
  comment?: SortOrder;
  dateCreated?: SortOrder;
};
