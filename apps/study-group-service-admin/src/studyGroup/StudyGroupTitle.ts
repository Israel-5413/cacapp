import { StudyGroup as TStudyGroup } from "../api/studyGroup/StudyGroup";

export const STUDYGROUP_TITLE_FIELD = "name";

export const StudyGroupTitle = (record: TStudyGroup): string => {
  return record.name?.toString() || String(record.id);
};
