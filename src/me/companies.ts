import { Company, CompanyAddress, SavedPayment } from "../companies/types";
import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule } from "../model";
import { CreateOwnCompany, UpdateOwnCompany, QueryOwnCompanyDto, CreateOwnCompanyAddress, CreateOwnSavedPayment } from "./types";

export default class Companies extends ApiModule implements RestApiModuleI {
  create(data:CreateOwnCompany) {
    return this._call<Company>('post','/me/companies',data)
  }

  findAll(args:QueryOwnCompanyDto = {}) {
    return this._call<PaginatedDto<Company>>('get','/me/companies',queryParams(args))
  } 

  findOne(id:number) {
    return this._call<Company>('get',`/me/companies/${id}`)
  }

  update(id:number,data:UpdateOwnCompany) {
    return this._call<Company>('patch',`/me/companies/${id}`,data)
  }

  remove(id:number) {
    return this._call<Company>('delete',`/me/companies/${id}`)
  }

  createAddress(id:number,data:CreateOwnCompanyAddress) {
    return this._call<CompanyAddress>('post',`/me/companies/${id}/addresses`,data)
  }

  findAllAddresses(id:number) {
    return this._call<CompanyAddress[]>('get',`/me/companies/${id}/addresses`)
  }

  savePayment(id:number,data:CreateOwnSavedPayment) {
    return this._call<SavedPayment>('post',`/me/companies/${id}/payments`,data)
  }

  findAllSavedPayments(id:number) {
    return this._call<SavedPayment[]>('get',`/me/companies/${id}/payments`)
  }
}