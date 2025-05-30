import { BooleanClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { CreateDashboardAccess } from "../dashboards/types";
import { WithRequired } from "../types";

export type Customer = {
  id: number;
  email: string;
  password: string;
  name: string|null;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type CustomerProfile = {
  id: number;
  language: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CustomerSession = {
  id: number;
  refreshToken: string;
  expireAt: Date;
  ip: string|null;
  userAgent: string|null;
  customerId: number;
  createdAt: Date;
  updatedAt: Date;
}

type PartialCustomer = Partial<Omit<Customer,'id'|'createdAt'|'updatedAt'>>
type PartialCustomerProfile = Partial<Omit<CustomerProfile,'id'|'createdAt'|'updatedAt'>>

export type CreateCustomerProfile = PartialCustomerProfile
export type UpdateCustomerProfile = PartialCustomerProfile
export type CreateCustomerDashboardAccess = Omit<CreateDashboardAccess,'customerId'>

export type CreateCustomer = PartialCustomer & WithRequired<PartialCustomer,'email'|'password'> & {
  dashboards?:CreateCustomerDashboardAccess[],
  profile?:CreateCustomerProfile
}
export type UpdateCustomer = PartialCustomer
export type RegisterCustomer = Omit<CreateCustomer,'active'|'dashboards'|'profile'>

export type SortingCustomerDto = SortingParamsDto<{
  active?:Sorting,
  email?:Sorting,
  name?:Sorting,
}>

export type ClausesCustomerDto = WhereClausesDto<{
  email?:StringClause,
  active?:BooleanClause,
  search?:StringClause,
}>

export type QueryCustomerDto = QueryParamsDto<SortingCustomerDto,ClausesCustomerDto>