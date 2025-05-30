import { CreateCompany, CreateCompanyAddress, CreatePaymentMethod, QueryCompanyDto, UpdatePaymentMethod } from "../companies/types";
import { QueryParamsDto } from "../core/utils/queryParams";
import { UpdateCustomer, UpdateCustomerProfile } from "../customers/types";
import { ClausesDashboardAccessDto, CreateDashboardAccess, Dashboard, DashboardAccess, SortingDashboardAccessDto } from "../dashboards/types";
import { FindOneOrderDto, OrderRequest, QueryOrderDto } from "../orders/types";

export type UpdateOwnCustomer = Omit<UpdateCustomer,'active'|'email'|'dashboards'>
export type UpdateOwnProfile = UpdateCustomerProfile

export type CreateOwnCompany = Omit<CreateCompany,'customerId'>
export type UpdateOwnCompany = Partial<Omit<CreateOwnCompany,'addresses'|'payments'>>
export type QueryOwnCompanyDto = QueryCompanyDto
export type CreateOwnCompanyAddress = CreateCompanyAddress
export type UpdateOwnCompanyAddress = Partial<CreateOwnCompanyAddress>
export type CreateOwnPaymentMethod = CreatePaymentMethod
export type UpdateOwnPaymentMethod = UpdatePaymentMethod
export type CreateOwnDashboardAccess = Omit<CreateDashboardAccess,'dashboardId'>
export type UpdateOwnDashboardAccess = Partial<Omit<CreateOwnDashboardAccess,'customerId'>>
export type QueryOwnDashboardAccessDto =  QueryParamsDto<Omit<SortingDashboardAccessDto,'customerId'>,Omit<ClausesDashboardAccessDto,'customerId'>>

export type FindAllOwnDashboardAccess = DashboardAccess & {
  Dashboard:Dashboard
}

export type FindOneOwnOrderDto = Omit<FindOneOrderDto,'OrderAdjustment'>
export type CreateOwnOrder = {
  request:OrderRequest,
  companyId:number,
  purchaseMethodId:number
}
export type QueryOwnOrderDto = QueryOrderDto