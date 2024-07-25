import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type StudyGroupWhereInput = {
  id?: StringFilter;
  uniqueId?: StringNullableFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  status?: BooleanNullableFilter;
  category?: StringNullableFilter;
  groupProfileImage?: StringNullableFilter;
  creatorId?: StringNullableFilter;
  dateCreated?: StringNullableFilter;
};
