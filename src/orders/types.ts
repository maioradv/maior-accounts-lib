import { BooleanClause, EnumClause, NumberClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { WithRequired } from "../types";

export type Order = {
  id: number;
  paymentMethodId: number; 
  companyId: number|null;
  customerId: number|null; 
  createdAt: Date;
  updatedAt: Date;
}

export type OrderItem = {
  id: number;
  orderId: number; 
  serviceId: number; 
  contractId: number|null; 
  createdAt: Date;
  updatedAt: Date;
}

type PartialOrder = Partial<Omit<Order,'id'|'createdAt'|'updatedAt'>>

export type CreateOrder = PartialOrder & WithRequired<PartialOrder,'paymentMethodId'>
export type UpdateOrder = PartialOrder

export type SortingOrderDto = SortingParamsDto<{
  paymentMethodId?:Sorting,
  companyId?:Sorting,
  customerId?:Sorting,
}>

export type ClausesOrderDto = WhereClausesDto<{
  search?:StringClause,
  paymentMethodId?:NumberClause,
  companyId?:NumberClause,
  customerId?:NumberClause,
}>

export type QueryOrderDto = QueryParamsDto<SortingOrderDto,ClausesOrderDto>

type PartialOrderItem = Partial<Omit<OrderItem,'id'|'createdAt'|'updatedAt'|'orderId'>>

export type CreateOrderItem = PartialOrder & WithRequired<PartialOrderItem,'serviceId'>
export type UpdateOrderItem = PartialOrder