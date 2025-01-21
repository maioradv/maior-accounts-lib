import { ActivityLog } from "../activitylogs/types";
import { BooleanClause, DateClause, EnumClause, NumberClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { Translation, WithRequired } from "../types";

export enum PaymentStatus {
  pending = 'pending',
  partiallyPaid = 'partiallyPaid',
  paid = 'paid',
  pastdue = 'pastdue',
  overdue = 'overdue',
  partiallyRefunded = 'partiallyRefunded',
  refunded = 'refunded',
  voided = 'voided',
  notPayable = 'notPayable',
}

export enum InvoiceStatus {
  pending = 'pending',
  issued = 'issued',
  sent = 'sent',
  invoiced = 'invoiced',
  canceled = 'canceled',
  notBillable = 'notBillable',
}

export type ScheduledPayment = {
  id: number;
  description: string; 
  date: Date; 
  amount: number|null; 
  notes: string|null;
  status: PaymentStatus;
  invoiceStatus: InvoiceStatus;
  serviceId: number; 
  translations: Translation[];
  createdAt: Date;
  updatedAt: Date;
}

type PartialScheduledPayment = Partial<Omit<ScheduledPayment,'id'|'createdAt'|'updatedAt'>>

export type CreateScheduledPayment = PartialScheduledPayment & WithRequired<PartialScheduledPayment,'description'|'date'|'serviceId'>
export type UpdateScheduledPayment = PartialScheduledPayment

export type FindOneScheduledPayment = ScheduledPayment & {
  ActivityLog:ActivityLog[]
}

export type SortingScheduledPaymentDto = SortingParamsDto<{
  date?:Sorting,
  amount?:Sorting,
}>

export type ClausesScheduledPaymentDto = WhereClausesDto<{
  amount?:NumberClause,
  serviceId?:NumberClause,
  date?:DateClause,
  from?:DateClause,
  to?:DateClause,
  notes?:StringClause,
  search?:StringClause,
  status?:EnumClause<PaymentStatus>,
  invoiceStatus?:EnumClause<InvoiceStatus>
}>

export type QueryScheduledPaymentDto = QueryParamsDto<SortingScheduledPaymentDto,ClausesScheduledPaymentDto>