import { ApiModule } from "../model";
import { CompanyAddress, UpdateCompanyAddress } from "./types";

export default class CompanyAddresses extends ApiModule {
  update(id:number,data:UpdateCompanyAddress) {
    return this._call<CompanyAddress>('patch',`/company-addresses/${id}`,data)
  }

  remove(id:number) {
    return this._call<CompanyAddress>('delete',`/company-addresses/${id}`)
  }
}