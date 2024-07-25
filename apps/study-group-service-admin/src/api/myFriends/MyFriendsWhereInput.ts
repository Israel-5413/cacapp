import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type MyFriendsWhereInput = {
  id?: StringFilter;
  myUniqueId?: StringNullableFilter;
  friendsUniqueId?: StringNullableFilter;
  status?: BooleanNullableFilter;
  dateCreated?: StringNullableFilter;
};
