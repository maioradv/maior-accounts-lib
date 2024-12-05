import { CreateCompany, CreateCompanyAddress, CreateSavedPayment, QueryCompanyDto, SortingCompanyDto } from "../companies/types";
import { UpdateCustomer, UpdateCustomerProfile } from "../customers/types";
import { CreateDashboardAccess } from "../dashboards/types";

export type UpdateOwnCustomer = Omit<UpdateCustomer,'active'|'email'|'dashboards'>
export type UpdateOwnProfile = UpdateCustomerProfile

export type CreateOwnCompany = Omit<CreateCompany,'customerId'>
export type UpdateOwnCompany = Partial<Omit<CreateOwnCompany,'addresses'|'payments'>>
export type SortingOwnCompanyDto = SortingCompanyDto
export type QueryOwnCompanyDto = QueryCompanyDto
export type CreateOwnCompanyAddress = CreateCompanyAddress
export type UpdateOwnCompanyAddress = Partial<CreateOwnCompanyAddress>
export type CreateOwnSavedPayment = CreateSavedPayment
export type UpdateOwnSavedPayment = Partial<CreateOwnSavedPayment>
export type CreateOwnDashboardAccess = Omit<CreateDashboardAccess,'dashboardId'>
export type UpdateOwnDashboardAccess = Partial<Omit<CreateOwnDashboardAccess,'customerId'>>