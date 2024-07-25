import { FeedbackReply as TFeedbackReply } from "../api/feedbackReply/FeedbackReply";

export const FEEDBACKREPLY_TITLE_FIELD = "feedbackId";

export const FeedbackReplyTitle = (record: TFeedbackReply): string => {
  return record.feedbackId?.toString() || String(record.id);
};
