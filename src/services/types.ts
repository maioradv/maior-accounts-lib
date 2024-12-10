import { BooleanClause, DateClause, EnumClause, NumberClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
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
  productId: number; 
  orderId: number; 
  published: boolean; 
  translations: Translation[];
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

type PartialService = Partial<Omit<Service,'id'|'createdAt'|'updatedAt'|'status'>>

export type CreateService = PartialService & WithRequired<PartialService,'description'|'price'|'productId'|'orderId'>
export type UpdateService = Omit<PartialService,'startAt'|'quantity'|'productId'|'orderId'>

export type SortingServiceDto = SortingParamsDto<{
  published?:Sorting,
}>

export type ClausesServiceDto = WhereClausesDto<{
  search?:StringClause,
  price?:NumberClause,
  startAt?:DateClause,
  published?:BooleanClause,
  status?:EnumClause<ServiceStatus>
}>

export type QueryServiceDto = QueryParamsDto<SortingServiceDto,ClausesServiceDto>