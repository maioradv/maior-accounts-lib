import { BooleanClause, NumberClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { Metafield, Translation, WithRequired } from "../types";

export type Page = {
  id: number;
  formatId: number;
  slug: string;
  title: string;
  description: string|null;
  metafields: Metafield[];
  published:boolean;
  translations: Translation[];
  createdAt: Date;
  updatedAt: Date;
}

type PartialPage = Partial<Omit<Page,'id'|'slug'|'createdAt'|'updatedAt'>>

export type CreatePage = PartialPage & WithRequired<PartialPage,'title'|'formatId'>
export type UpdatePage = PartialPage

export type SortingPageDto = SortingParamsDto<{
  title?:Sorting,
  formatId?:Sorting
}>

export type ClausesPageDto = WhereClausesDto<{
  slug?:StringClause,
  title?:StringClause,
  description?:StringClause,
  formatId?:NumberClause,
  published?:BooleanClause,
}>

export type QueryPageDto = QueryParamsDto<SortingPageDto,ClausesPageDto>