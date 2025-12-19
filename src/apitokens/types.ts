import { Permission } from "../auth/types";

export type ApiToken = {
  id: number;
  name: string;
  uuid: string;
  permissions: Permission[];
  createdAt: Date;
  updatedAt: Date;
}