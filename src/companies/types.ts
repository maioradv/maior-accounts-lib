import { BooleanClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
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
  paymentMethodId: number|null;
  customerId: number;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

type PartialCompany = Partial<Omit<Company,'id'|'createdAt'|'updatedAt'>>

export type CreateCompany = PartialCompany & WithRequired<PartialCompany,'name'|'vatNumber'|'customerId'> & {
  addresses?:CreateCompanyAddress[],
  //payments?:CreatePaymentMethod[]
}
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
  published?:BooleanClause
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

type PartialCompanyAddress = Partial<Omit<CompanyAddress,'id'|'createdAt'|'updatedAt'|'companyId'>>

export type CreateCompanyAddress = PartialCompanyAddress & WithRequired<PartialCompanyAddress,'street'|'number'|'city'|'province'|'zipCode'|'country'>
export type UpdateCompanyAddress = PartialCompanyAddress

export type PaymentMethod = {
  id: number;
  name: string; 
  type: string; 
  expireAt: Date|null; 
  companyId: number; 
  createdAt: Date;
  updatedAt: Date;
}

type PartialPaymentMethod = Partial<Omit<PaymentMethod,'id'|'createdAt'|'updatedAt'|'companyId'>>

export type UpdatePaymentMethod = Omit<PartialPaymentMethod,'expireAt'|'type'>

export enum PaymentMethodType {
  card = 'card',
  sepaDebit = 'sepa_debit'
}

export type CreateCardPaymentMethod = {
  type:'card',
  card:{
    number:string,
    exp_month:number,
    exp_year:number,
    cvc:string
  }
}
export type CreateSepaDebitPaymentMethod = {
  type:'sepa_debit',
  sepaDebit:{
    iban:string
  }
}

export type CreatePaymentMethod = (CreateCardPaymentMethod | CreateSepaDebitPaymentMethod) & {
  setDefault?:boolean
}