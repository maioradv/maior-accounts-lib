import { QueryParamsDto, Sorting, SortingParamsDto, BooleanClause, StringClause, WhereClausesDto } from "@maioradv/client-core";
import { Translation, WithRequired } from "@maioradv/types";

export type ActivityLog = {
  id: number;
  description: string;
  published: boolean;
  request: Record<string,any>|null;
  response: Record<string,any>|null;
  jwtSubId: string|null;
  translations: Translation[];
  createdAt: Date;
  updatedAt: Date;
}

type PartialActivityLog = Partial<Omit<ActivityLog,'id'|'createdAt'|'updatedAt'>>

export type CreateActivityLog = PartialActivityLog & WithRequired<PartialActivityLog,'description'>
export type UpdateActivityLog = PartialActivityLog

export type SortingActivityLogDto = SortingParamsDto<{
  description?:Sorting,
}>

export type ClausesActivityLogDto = WhereClausesDto<{
  search?:StringClause,
  published?:BooleanClause,
}>

export type QueryActivityLogDto = QueryParamsDto<SortingActivityLogDto,ClausesActivityLogDto>