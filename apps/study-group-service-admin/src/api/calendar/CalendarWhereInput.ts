import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CalendarWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  start?: DateTimeNullableFilter;
  end?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  color?: StringNullableFilter;
  icon?: StringNullableFilter;
};
