import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type TasksWhereInput = {
  id?: StringFilter;
  taskBody?: StringNullableFilter;
  creatorId?: StringNullableFilter;
  dateToStart?: StringNullableFilter;
  dateToFinish?: StringNullableFilter;
  dateCreated?: StringNullableFilter;
  uniqueId?: StringNullableFilter;
  title?: StringNullableFilter;
  category?: StringNullableFilter;
  status?: BooleanNullableFilter;
};
