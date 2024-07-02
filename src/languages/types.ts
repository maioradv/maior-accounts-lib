import { BooleanClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { Translation, WithRequired } from "../types";

export type Language = {
  id: number;
  name: string;
  locale: string;
  iso: string;
  active: boolean;
  published: boolean;
  translations: Translation[];
  createdAt: Date;
  updatedAt: Date;
}

type PartialLanguage = Partial<Omit<Language,'id'|'createdAt'|'updatedAt'>>

export type CreateLanguage = PartialLanguage & WithRequired<PartialLanguage,'name'|'locale'|'iso'>
export type UpdateLanguage = PartialLanguage

export type SortingLanguageDto = SortingParamsDto<{
  active?:Sorting,
  locale?:Sorting,
  name?:Sorting,
  published?:Sorting
}>

export type ClausesLanguageDto = WhereClausesDto<{
  name?:StringClause,
  iso?:StringClause,
  locale?:StringClause,
  active?:BooleanClause,
  published?:BooleanClause,
}>

export type QueryLanguageDto = QueryParamsDto<SortingLanguageDto,ClausesLanguageDto>