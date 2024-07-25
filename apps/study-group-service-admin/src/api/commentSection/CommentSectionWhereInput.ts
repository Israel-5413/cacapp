import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type CommentSectionWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  category?: StringNullableFilter;
  message?: StringNullableFilter;
  creatorId?: StringNullableFilter;
  dateCreated?: StringNullableFilter;
  status?: BooleanNullableFilter;
  uniqueId?: StringNullableFilter;
};
