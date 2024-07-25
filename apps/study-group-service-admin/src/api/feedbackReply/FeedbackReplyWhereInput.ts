import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FeedbackReplyWhereInput = {
  id?: StringFilter;
  feedbackId?: StringNullableFilter;
  replyerId?: StringNullableFilter;
  comment?: StringNullableFilter;
  dateCreated?: StringNullableFilter;
};
