import { CompanyAddress } from "../companies/types";
import { ApiModule } from "../model";
import { UpdateOwnCompanyAddress } from "./types";

export default class CompanyAddresses extends ApiModule {
  findOne(id:number) {
    return this._call<CompanyAddress>('get',`/me/company-addresses/${id}`)
  }

  update(id:number,data:UpdateOwnCompanyAddress) {
    return this._call<CompanyAddress>('patch',`/me/company-addresses/${id}`,data)
  }

  remove(id:number) {
    return this._call<CompanyAddress>('delete',`/me/company-addresses/${id}`)
  }
}