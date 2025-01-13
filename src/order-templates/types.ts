import { BooleanClause, NumberClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { Translation, WithRequired } from "../types";

export type ServiceTemplate = {
  id: number;
  description: string|null;
  quantity: number|null;
  price: number|null;
  totalCycles:number|null;
  productId: number;
  orderTemplateId: number;
  translations: Translation[];
  createdAt: Date;
  updatedAt: Date;
}

export type OrderTemplate = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export type OrderItemTemplate = {
  id: number;
  quantity: number|null;
  price: number|null;
  productId: number;
  orderTemplateId: number;
  createdAt: Date;
  updatedAt: Date;
}

type PartialOrderTemplate = Partial<Omit<OrderTemplate,'id'|'createdAt'|'updatedAt'>>

export type CreateOrderTemplate = PartialOrderTemplate & WithRequired<PartialOrderTemplate,'name'>
export type UpdateOrderTemplate = PartialOrderTemplate

export type SortingOrderTemplateDto = SortingParamsDto<{
  name?:Sorting,
}>

export type ClausesOrderTemplateDto = WhereClausesDto<{
  search?:StringClause,
}>

export type QueryOrderTemplateDto = QueryParamsDto<SortingOrderTemplateDto,ClausesOrderTemplateDto>

export type FindOneOrderTemplate = OrderTemplate & {
  ServiceTemplate:ServiceTemplate[],
  OrderItemTemplate:OrderItemTemplate[]
}


type PartialServiceTemplate = Partial<Omit<ServiceTemplate,'id'|'createdAt'|'updatedAt'|'orderTemplateId'>>

export type CreateServiceTemplate = PartialServiceTemplate & WithRequired<PartialServiceTemplate,'productId'>
export type UpdateServiceTemplate = PartialServiceTemplate


type PartialOrderItemTemplate = Partial<Omit<OrderItemTemplate,'id'|'createdAt'|'updatedAt'|'orderTemplateId'>>

export type CreateOrderItemTemplate = PartialOrderItemTemplate & WithRequired<PartialOrderItemTemplate,'productId'>
export type UpdateOrderItemTemplate = PartialOrderItemTemplate