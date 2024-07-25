import { CommentSection as TCommentSection } from "../api/commentSection/CommentSection";

export const COMMENTSECTION_TITLE_FIELD = "title";

export const CommentSectionTitle = (record: TCommentSection): string => {
  return record.title?.toString() || String(record.id);
};
