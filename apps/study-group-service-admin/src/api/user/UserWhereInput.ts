import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  contact?: StringNullableFilter;
  status?: BooleanNullableFilter;
  uniqueId?: StringNullableFilter;
  profileImage?: StringNullableFilter;
  dateJoined?: StringNullableFilter;
};
