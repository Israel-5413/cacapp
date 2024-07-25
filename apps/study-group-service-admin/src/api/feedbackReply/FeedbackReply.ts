export type FeedbackReply = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  feedbackId: string | null;
  replyerId: string | null;
  comment: string | null;
  dateCreated: string | null;
};
