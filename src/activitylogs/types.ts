import { Translation } from "../types";

export type ActivityLog = {
  id: number;
  description: string;
  published: boolean;
  request: Record<string,any>;
  response: Record<string,any>;
  translations: Translation[];
  createdAt: Date;
  updatedAt: Date;
}