import { BooleanClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import {  WithRequired } from "../types";

export type TaxRate = {
  id: number;
  name: string;
  country: string;
  inclusive: boolean;
  percentage: number;
  stripeId: string|null;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

type PartialTaxRate = Partial<Omit<TaxRate,'id'|'createdAt'|'updatedAt'>>

export type CreateTaxRate = PartialTaxRate & WithRequired<PartialTaxRate,'name'|'country'|'percentage'>
export type UpdateTaxRate = PartialTaxRate

export type SortingTaxRateDto = SortingParamsDto<{
  name?:Sorting,
  country?:Sorting,
  active?:Sorting,
  percentage?:Sorting,
}>

export type ClausesTaxRateDto = WhereClausesDto<{
  name?:StringClause,
  country?:StringClause,
  active?:BooleanClause,
}>

export type QueryTaxRateDto = QueryParamsDto<SortingTaxRateDto,ClausesTaxRateDto>