import { FeedbackReplyWhereInput } from "./FeedbackReplyWhereInput";
import { FeedbackReplyOrderByInput } from "./FeedbackReplyOrderByInput";

export type FeedbackReplyFindManyArgs = {
  where?: FeedbackReplyWhereInput;
  orderBy?: Array<FeedbackReplyOrderByInput>;
  skip?: number;
  take?: number;
};
