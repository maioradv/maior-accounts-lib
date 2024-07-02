import { StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { Translation, WithRequired } from "../types";

export type Pageblock = {
  id: number;
  name: string;
  description: string|null;
  configs: Record<string,any>;
  translations: Translation[];
  createdAt: Date;
  updatedAt: Date;
}

type PartialPageblock = Partial<Omit<Pageblock,'id'|'createdAt'|'updatedAt'>>

export type CreatePageblock = PartialPageblock & WithRequired<PartialPageblock,'name'>
export type UpdatePageblock = PartialPageblock

export type SortingPageblockDto = SortingParamsDto<{
  name?:Sorting,
}>

export type ClausesPageblockDto = WhereClausesDto<{
  name?:StringClause,
  descriptionContains?:string|undefined,
}>

export type QueryPageblockDto = QueryParamsDto<SortingPageblockDto,ClausesPageblockDto>