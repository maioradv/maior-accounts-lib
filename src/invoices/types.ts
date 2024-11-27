import { BooleanClause, DateClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { Translation, WithRequired } from "../types";

export type Invoice = {
  id: number;
  description: string|null;
  number: string;
  date: Date;
  orderItemId: number;
  translations: Translation[];
  createdAt: Date;
  updatedAt: Date;
}

type PartialInvoice = Partial<Omit<Invoice,'id'|'createdAt'|'updatedAt'>>

export type CreateInvoice = PartialInvoice & WithRequired<PartialInvoice,'number'|'date'|'orderItemId'>
export type UpdateInvoice = Omit<PartialInvoice,'orderItemId'>

export type SortingInvoiceDto = SortingParamsDto<{
  date?:Sorting,
}>

export type ClausesInvoiceDto = WhereClausesDto<{
  number?:StringClause,
  date?:DateClause,
  from?:DateClause,
  to?:DateClause,
}>

export type QueryInvoiceDto = QueryParamsDto<SortingInvoiceDto,ClausesInvoiceDto>