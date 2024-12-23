import { BooleanClause, DateClause, EnumClause, NumberClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { PurchaseMethodType } from "../purchase-methods/types";
import { Translation, WithRequired } from "../types";

export enum ServiceStatus {
  pending = 'pending',
  active = 'active',
  unpaid = 'unpaid',
  suspended = 'suspended',
  expired = 'expired',
  canceled = 'canceled',
  completed = 'completed',
}

export type Service = {
  id: number;
  description: string; 
  quantity: number; 
  price: number; 
  startAt: Date; 
  cancelAt: Date|null; 
  status: ServiceStatus;
  gateway: PurchaseMethodType;
  productId: number; 
  orderId: number; 
  published: boolean; 
  translations: Translation[];
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

type PartialService = Partial<Omit<Service,'id'|'createdAt'|'updatedAt'|'status'>>

export type CreateService = PartialService & WithRequired<PartialService,'description'|'price'|'productId'|'orderId'|'gateway'>
export type UpdateService = Omit<PartialService,'startAt'|'quantity'|'productId'|'orderId'|'gateway'>

export type SortingServiceDto = SortingParamsDto<{
  published?:Sorting,
  gateway?:Sorting,
  status?:Sorting,
  price?:Sorting,
  startAt?:Sorting
}>

export type ClausesServiceDto = WhereClausesDto<{
  search?:StringClause,
  price?:NumberClause,
  startAt?:DateClause,
  from?:DateClause,
  to?:DateClause,
  published?:BooleanClause,
  status?:EnumClause<ServiceStatus>
  gateway?:EnumClause<PurchaseMethodType>
}>

export type QueryServiceDto = QueryParamsDto<SortingServiceDto,ClausesServiceDto>