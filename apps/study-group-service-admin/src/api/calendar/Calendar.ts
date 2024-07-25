export type Calendar = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  start: Date | null;
  end: Date | null;
  description: string | null;
  color: string | null;
  icon: string | null;
};
