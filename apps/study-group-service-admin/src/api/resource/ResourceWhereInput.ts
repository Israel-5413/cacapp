import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ResourceWhereInput = {
  id?: StringFilter;
  file?: StringNullableFilter;
  creatorId?: StringNullableFilter;
  dateCreated?: StringNullableFilter;
  status?: BooleanNullableFilter;
};
