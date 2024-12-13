import { ActivityLog } from "../activitylogs/types";
import { Company } from "../companies/types";
import { BooleanClause, EnumClause, NumberClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { Service } from "../services/types";
import { Translation, WithRequired } from "../types";

export enum OrderStatus {
  preorder = 'preorder',
  created = 'created',
  completed = 'completed',
  canceled = 'canceled'
}

export enum OrderAdjustmentType {
  discount = 'discount',
  tax = 'tax',
  fee = 'fee',
  refund = 'refund',
  other = 'other',
}

export type Order = {
  id: number;
  status:OrderStatus;
  totalAmount:number;
  taxInclusive:boolean;
  taxPercentage:number;
  currency:string;
  transactionId:string;
  paymentMethodId: number; 
  companyId: number|null;
  customerId: number|null; 
  createdAt: Date;
  updatedAt: Date;
}

export type OrderItem = {
  id: number;
  amount: number;
  quantity: number;
  orderId: number; 
  productId: number; 
  createdAt: Date;
  updatedAt: Date;
}

export type OrderBreakdown = {
  id: number; 
  amount: number;
  quantity: number;
  description: string;
  orderId: number; 
  translations: Translation[];
  createdAt: Date; 
  updatedAt: Date;
}

export type OrderAdjustment = {
  id: number; 
  type: OrderAdjustmentType;
  amount: number;
  description: string;
  orderId: number; 
  translations: Translation[];
  createdAt: Date; 
  updatedAt: Date;
}

type PartialOrder = Partial<Omit<Order,'id'|'createdAt'|'updatedAt'>>

export type CreateOrder = PartialOrder & WithRequired<PartialOrder,'paymentMethodId'|'totalAmount'|'taxPercentage'>
export type UpdateOrder = Omit<PartialOrder,'totalAmount'|'taxInclusive'|'taxPercentage'|'currency'|'paymentMethodId'>

export type FindOneOrderDto = Order & {
  Company:Company,
  Service:Service[],
  OrderBreakdown:OrderBreakdown[],
  OrderAdjustment:OrderAdjustment[],
  ActivityLog:ActivityLog[]
}

export type SortingOrderDto = SortingParamsDto<{
  paymentMethodId?:Sorting,
  companyId?:Sorting,
  customerId?:Sorting,
  totalAmount?:Sorting,
  status?:Sorting,
}>

export type ClausesOrderDto = WhereClausesDto<{
  search?:StringClause,
  paymentMethodId?:NumberClause,
  companyId?:NumberClause,
  customerId?:NumberClause,
  status?:EnumClause<OrderStatus>
}>

export type QueryOrderDto = QueryParamsDto<SortingOrderDto,ClausesOrderDto>

type PartialOrderItem = Partial<Omit<OrderItem,'id'|'createdAt'|'updatedAt'|'orderId'>>

export type CreateOrderItem = PartialOrderItem & WithRequired<PartialOrderItem,'productId'>
export type UpdateOrderItem = Omit<PartialOrderItem,'productId'|'amount'|'quantity'>