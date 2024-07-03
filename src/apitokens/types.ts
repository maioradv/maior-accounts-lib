import { Permission } from "../auth/types";

export type ApiToken = {
  id: number;
  name: string;
  uuid: string;
  permissions: Permission[];
  dashboardId: number|null;
  createdAt: Date;
  updatedAt: Date;
}