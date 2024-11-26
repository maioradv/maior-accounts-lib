import { BooleanClause, DateClause, EnumClause, NumberClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { Translation, WithRequired } from "../types";

export enum PaymentMethodType {
  stripe = 'stripe',
  paypal = 'paypal',
  manual = 'manual',
}
export type PaymentMethod = {
  id: number;
  name: string; 
  type: PaymentMethodType; 
  description: string|null;
  offline: boolean;
  position: number|null;
  active: boolean; 
  published: boolean; 
  translations: Translation[];
  createdAt: Date;
  updatedAt: Date;
}

type PartialPaymentMethod = Partial<Omit<PaymentMethod,'id'|'createdAt'|'updatedAt'>>

export type CreatePaymentMethod = PartialPaymentMethod & WithRequired<PartialPaymentMethod,'name'|'type'>
export type UpdatePaymentMethod = PartialPaymentMethod

export type SortingPaymentMethodDto = SortingParamsDto<{
  name?:Sorting,
  position?:Sorting,
  active?:Sorting,
  published?:Sorting,
  type?:Sorting,
}>

export type ClausesPaymentMethodDto = WhereClausesDto<{
  position?:NumberClause,
  name?:StringClause,
  description?:StringClause,
  search?:StringClause,
  active?:BooleanClause,
  published?:BooleanClause,
  type?:EnumClause<PaymentMethodType>,
}>

export type QueryPaymentMethodDto = QueryParamsDto<SortingPaymentMethodDto,ClausesPaymentMethodDto>