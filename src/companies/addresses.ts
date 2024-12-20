import { ApiModule } from "../model";
import { CompanyAddress, UpdateCompanyAddress } from "./types";

export default class CompanyAddresses extends ApiModule {
  findOne(id:number) {
    return this._call<CompanyAddress>('get',`/company-addresses/${id}`)
  }

  update(id:number,data:UpdateCompanyAddress) {
    return this._call<CompanyAddress>('patch',`/company-addresses/${id}`,data)
  }

  remove(id:number) {
    return this._call<CompanyAddress>('delete',`/company-addresses/${id}`)
  }
}