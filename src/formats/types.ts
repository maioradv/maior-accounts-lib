import { StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { Translation, WithRequired } from "../types";

export type Format = {
  id: number;
  name: string;
  description: string|null;
  translations: Translation[];
  createdAt: Date;
  updatedAt: Date;
}

type PartialFormat = Partial<Omit<Format,'id'|'createdAt'|'updatedAt'>>

export type CreateFormat = PartialFormat & WithRequired<PartialFormat,'name'>
export type UpdateFormat = PartialFormat

export type SortingFormatDto = SortingParamsDto<{
  name?:Sorting,
}>

export type ClausesFormatDto = WhereClausesDto<{
  name?:StringClause,
}>

export type QueryFormatDto = QueryParamsDto<SortingFormatDto,ClausesFormatDto>