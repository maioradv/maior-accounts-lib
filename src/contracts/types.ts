import { BooleanClause, DateClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { Translation, WithRequired } from "../types";

export type Contract = {
  id: number;
  description: string|null;
  number: string;
  date: Date;
  translations: Translation[];
  createdAt: Date;
  updatedAt: Date;
}

type PartialContract = Partial<Omit<Contract,'id'|'createdAt'|'updatedAt'>>

export type CreateContract = PartialContract & WithRequired<PartialContract,'number'|'date'>
export type UpdateContract = PartialContract

export type SortingContractDto = SortingParamsDto<{
  date?:Sorting,
}>

export type ClausesContractDto = WhereClausesDto<{
  number?:StringClause,
  date?:DateClause,
  from?:DateClause,
  to?:DateClause,
}>

export type QueryContractDto = QueryParamsDto<SortingContractDto,ClausesContractDto>