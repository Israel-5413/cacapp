export type Resource = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  file: string | null;
  creatorId: string | null;
  dateCreated: string | null;
  status: boolean | null;
};
