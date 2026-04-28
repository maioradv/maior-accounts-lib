import { QueryParamsDto, Sorting, SortingParamsDto, BooleanClause, StringClause, WhereClausesDto, DateClause } from "@maioradv/client-core";
import { WithRequired, Translation } from "@maioradv/types";

export type Invoice = {
  id: number;
  description: string|null;
  number: string;
  date: Date;
  orderId: number;
  translations: Translation[];
  createdAt: Date;
  updatedAt: Date;
}

type PartialInvoice = Partial<Omit<Invoice,'id'|'createdAt'|'updatedAt'>>

export type CreateInvoice = PartialInvoice & WithRequired<PartialInvoice,'number'|'date'|'orderId'>
export type UpdateInvoice = Omit<PartialInvoice,'orderId'>

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