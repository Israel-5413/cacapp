import { CommentSectionWhereInput } from "./CommentSectionWhereInput";
import { CommentSectionOrderByInput } from "./CommentSectionOrderByInput";

export type CommentSectionFindManyArgs = {
  where?: CommentSectionWhereInput;
  orderBy?: Array<CommentSectionOrderByInput>;
  skip?: number;
  take?: number;
};
