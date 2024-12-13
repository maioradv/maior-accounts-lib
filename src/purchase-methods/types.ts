import { BooleanClause, DateClause, EnumClause, NumberClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { Translation, WithRequired } from "../types";

export enum PurchaseMethodType {
  stripe = 'stripe',
  paypal = 'paypal',
  manual = 'manual',
}
export type PurchaseMethod = {
  id: number;
  name: string; 
  type: PurchaseMethodType; 
  description: string|null;
  offline: boolean;
  position: number|null;
  active: boolean; 
  published: boolean; 
  translations: Translation[];
  createdAt: Date;
  updatedAt: Date;
}

type PartialPurchaseMethod = Partial<Omit<PurchaseMethod,'id'|'createdAt'|'updatedAt'>>

export type CreatePurchaseMethod = PartialPurchaseMethod & WithRequired<PartialPurchaseMethod,'name'|'type'>
export type UpdatePurchaseMethod = PartialPurchaseMethod

export type SortingPurchaseMethodDto = SortingParamsDto<{
  name?:Sorting,
  position?:Sorting,
  active?:Sorting,
  published?:Sorting,
  type?:Sorting,
}>

export type ClausesPurchaseMethodDto = WhereClausesDto<{
  position?:NumberClause,
  name?:StringClause,
  description?:StringClause,
  search?:StringClause,
  active?:BooleanClause,
  published?:BooleanClause,
  type?:EnumClause<PurchaseMethodType>,
}>

export type QueryPurchaseMethodDto = QueryParamsDto<SortingPurchaseMethodDto,ClausesPurchaseMethodDto>