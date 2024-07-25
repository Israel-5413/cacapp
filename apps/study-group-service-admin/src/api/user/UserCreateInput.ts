import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  contact?: string | null;
  status?: boolean | null;
  uniqueId?: string | null;
  profileImage?: string | null;
  dateJoined?: string | null;
};
