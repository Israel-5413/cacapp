import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PrivateChatWhereInput = {
  id?: StringFilter;
  dateCreated?: DateTimeNullableFilter;
  incomingMessageId?: StringNullableFilter;
  outgoingMessageId?: StringNullableFilter;
  message?: StringNullableFilter;
};
