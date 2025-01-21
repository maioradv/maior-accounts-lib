import { ActivityLog } from "../activitylogs/types";
import { Company } from "../companies/types";
import { BooleanClause, EnumClause, NumberClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { CreateDashboard } from "../dashboards/types";
import { CreateService, Service } from "../services/types";
import { Metafield, Translation, WithRequired } from "../types";

export enum OrderStatus {
  created = 'created',
  completed = 'completed',
  canceled = 'canceled'
}

export enum OrderType {
  preorder = 'preorder',
  oneTime = 'oneTime',
  subscription = 'subscription',
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
  request:Record<string,any>|null,
  status:OrderStatus;
  type:OrderType;
  totalAmount:number;
  taxRateId:number,
  currency:string;
  transactionId:string;
  purchaseMethodId: number; 
  companyId: number|null;
  customerId: number|null; 
  metafields:Metafield[];
  createdAt: Date;
  updatedAt: Date;
}

export type OrderItem = {
  id: number;
  description: string;
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

export type OrderDetails = {
  id: number; 
  customerEmail: string;
  customerName: string|null;
  name: string|null;
  vatNumber: string|null;
  sdi: string|null;
  pec: string|null;
  email: string|null;
  taxCode: string|null;
  street: string|null;
  number: string|null;
  extra: string|null;
  city: string|null;
  province: string|null;
  zipCode: string|null;
  country: string|null;
  orderId: number; 
  createdAt: Date; 
  updatedAt: Date;
}

type PartialOrder = Partial<Omit<Order,'id'|'createdAt'|'updatedAt'>>

export type CreateOrder = {
  request?:OrderRequest,
  customerId:number,
  companyId?:number,
  purchaseMethodId:number,
  items?:CreateOrderItem[],
  services?:CreateOrderService[],
  adjustments?:CreateOrderAdjustment[]
}
export type UpdateOrder = Pick<PartialOrder,'status'|'metafields'>

export type FindOneOrderDto = Order & {
  Company:Company,
  Service:Service[],
  OrderDetails:OrderDetails,
  OrderBreakdown:OrderBreakdown[],
  OrderAdjustment:OrderAdjustment[],
  ActivityLog:ActivityLog[]
}

export type SortingOrderDto = SortingParamsDto<{
  purchaseMethodId?:Sorting,
  companyId?:Sorting,
  customerId?:Sorting,
  totalAmount?:Sorting,
  status?:Sorting,
}>

export type ClausesOrderDto = WhereClausesDto<{
  search?:StringClause,
  purchaseMethodId?:NumberClause,
  companyId?:NumberClause,
  customerId?:NumberClause,
  status?:EnumClause<OrderStatus>,
  type?:EnumClause<OrderType>
}>

export type QueryOrderDto = QueryParamsDto<SortingOrderDto,ClausesOrderDto>

type PartialOrderItem = Partial<Omit<OrderItem,'id'|'createdAt'|'updatedAt'|'orderId'>>

export type CreateOrderItem = PartialOrderItem & WithRequired<PartialOrderItem,'productId'|'amount'|'description'>
export type UpdateOrderItem = Omit<PartialOrderItem,'productId'|'amount'|'quantity'>

type PartialOrderAdjustment = Partial<Omit<OrderAdjustment,'id'|'createdAt'|'updatedAt'|'orderId'>>
export type CreateOrderAdjustment = WithRequired<PartialOrderAdjustment,'amount'|'description'|'type'>

export type CreateOrderResponse = {
  sdkJsId?:string,
  redirectUrl?:string,
  order: Order
}

export type CreateDashboardRequest = {
  type:'CreateDashboard',
  dashboard:Omit<CreateDashboard,'dashboardTypeId'|'plan'|'orderId'> & {
    planId:number;
  }
}
export type OrderRequest = CreateDashboardRequest

export type CreateOrderService = Omit<CreateService,'orderId'|'gateway'>