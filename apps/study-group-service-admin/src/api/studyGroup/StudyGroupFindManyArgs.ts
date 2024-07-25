import { StudyGroupWhereInput } from "./StudyGroupWhereInput";
import { StudyGroupOrderByInput } from "./StudyGroupOrderByInput";

export type StudyGroupFindManyArgs = {
  where?: StudyGroupWhereInput;
  orderBy?: Array<StudyGroupOrderByInput>;
  skip?: number;
  take?: number;
};
