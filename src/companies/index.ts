import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule } from "../model";
import { Company, CreateCompany, UpdateCompany, QueryCompanyDto, CompanyAddress, CreateCompanyAddress } from "./types";

export default class Companies extends ApiModule implements RestApiModuleI {
  create(data:CreateCompany) {
    return this._call<Company>('post','/companies',data)
  }

  findAll(args:QueryCompanyDto = {}) {
    return this._call<PaginatedDto<Company>>('get','/companies',queryParams(args))
  } 

  findOne(id:number) {
    return this._call<Company>('get',`/companies/${id}`)
  }

  update(id:number,data:UpdateCompany) {
    return this._call<Company>('patch',`/companies/${id}`,data)
  }

  remove(id:number) {
    return this._call<Company>('delete',`/companies/${id}`)
  }

  createAddress(id:number,data:CreateCompanyAddress) {
    return this._call<CompanyAddress>('post',`/companies/${id}/addresses`,data)
  }

  findAllAddresses(id:number) {
    return this._call<CompanyAddress[]>('get',`/companies/${id}/addresses`)
  }
}