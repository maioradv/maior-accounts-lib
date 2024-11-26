import { BooleanClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { Translation, WithRequired } from "../types";

export enum RecurringInterval {
  none = 'none',
  day = 'day',
  week = 'week',
  month = 'month',
  year = 'year'
}

export type Product = {
  id: number;
  name: string;
  description: string|null;
  slug: string;
  price: number;
  recurringInterval: RecurringInterval;
  recurringCount: number;
  translations: Translation[];
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

type PartialProduct = Partial<Omit<Product,'id'|'createdAt'|'updatedAt'>>

export type CreateProduct = PartialProduct & WithRequired<PartialProduct,'name'|'slug'|'price'|'recurringInterval'>
export type UpdateProduct = Omit<PartialProduct,'recurringInterval'|'recurringCount'>

export type SortingProductDto = SortingParamsDto<{
  active?:Sorting,
  slug?:Sorting,
  price?:Sorting,
  name?:Sorting,
}>

export type ClausesProductDto = WhereClausesDto<{
  name?:StringClause,
  slug?:StringClause,
  active?:BooleanClause,
}>

export type QueryProductDto = QueryParamsDto<SortingProductDto,ClausesProductDto>