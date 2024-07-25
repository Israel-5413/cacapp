export type CommentSection = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  category: string | null;
  message: string | null;
  creatorId: string | null;
  dateCreated: string | null;
  status: boolean | null;
  uniqueId: string | null;
};
