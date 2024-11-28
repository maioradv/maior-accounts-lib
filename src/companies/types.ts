import { StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { WithRequired } from "../types";

export type Company = {
  id: number;
  name: string; 
  vatNumber: string;
  sdi: string|null;
  pec: string|null;
  email: string|null;
  taxCode: string|null;
  billingAddressId: number|null;
  savedPaymentId: number|null;
  customerId: number|null;
  createdAt: Date;
  updatedAt: Date;
}

type PartialCompany = Partial<Omit<Company,'id'|'createdAt'|'updatedAt'>>

export type CreateCompany = PartialCompany & WithRequired<PartialCompany,'name'|'vatNumber'>
export type UpdateCompany = PartialCompany

export type SortingCompanyDto = SortingParamsDto<{
  name?:Sorting,
}>

export type ClausesCompanyrDto = WhereClausesDto<{
  name?:StringClause,
  vatNumber?:StringClause,
  sdi?:StringClause,
  pec?:StringClause,
  email?:StringClause,
  search?:StringClause,
}>

export type QueryCompanyDto = QueryParamsDto<SortingCompanyDto,ClausesCompanyrDto>

export type CompanyAddress = {
  id: number;
  name: string|null; 
  description: string|null;
  street: string;
  number: string; 
  extra: string|null; 
  city: string; 
  province: string; 
  zipCode: string; 
  country: string; 
  companyId: number; 
  createdAt: Date;
  updatedAt: Date;
}

type PartialCompanyAddress = Partial<Omit<CompanyAddress,'id'|'createdAt'|'updatedAt'>>

export type CreateCompanyAddress = PartialCompanyAddress & WithRequired<PartialCompanyAddress,'street'|'number'|'city'|'province'|'zipCode'|'country'|'companyId'>
export type UpdateCompanyAddress = PartialCompanyAddress

export type SavedPayment = {
  id: number;
  name: string; 
  type: string; 
  expireAt: Date|null; 
  companyId: number; 
  createdAt: Date;
  updatedAt: Date;
}

type PartialSavedPayment = Partial<Omit<SavedPayment,'id'|'createdAt'|'updatedAt'|'companyId'>>

export type CreateSavedPayment = PartialSavedPayment & WithRequired<PartialSavedPayment,'name'|'type'>
export type UpdateSavedPayment = Omit<CreateSavedPayment,'name'|'type'>