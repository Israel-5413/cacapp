import { JsonValue } from "type-fest";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  contact: string | null;
  status: boolean | null;
  uniqueId: string | null;
  profileImage: string | null;
  dateJoined: string | null;
};
