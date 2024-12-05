import { CompanyAddress } from "../companies/types";
import { ApiModule } from "../model";
import { UpdateOwnCompanyAddress } from "./types";

export default class CompanyAddresses extends ApiModule {
  update(id:number,data:UpdateOwnCompanyAddress) {
    return this._call<CompanyAddress>('patch',`/me/company-addresses/${id}`,data)
  }

  remove(id:number) {
    return this._call<CompanyAddress>('delete',`/me/company-addresses/${id}`)
  }
}