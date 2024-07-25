export type TasksCreateInput = {
  taskBody?: string | null;
  creatorId?: string | null;
  dateToStart?: string | null;
  dateToFinish?: string | null;
  dateCreated?: string | null;
  uniqueId?: string | null;
  title?: string | null;
  category?: string | null;
  status?: boolean | null;
};
