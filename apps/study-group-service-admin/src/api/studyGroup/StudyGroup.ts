export type StudyGroup = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  uniqueId: string | null;
  name: string | null;
  description: string | null;
  status: boolean | null;
  category: string | null;
  groupProfileImage: string | null;
  creatorId: string | null;
  dateCreated: string | null;
};
