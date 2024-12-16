import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule } from "../model";
import { TaxRate, CreateTaxRate, UpdateTaxRate, QueryTaxRateDto } from "./types";

export default class TaxRates extends ApiModule implements RestApiModuleI {
  create(data:CreateTaxRate) {
    return this._call<TaxRate>('post','/tax-rates',data)
  }

  findAll(args:QueryTaxRateDto = {}) {
    return this._call<PaginatedDto<TaxRate>>('get','/tax-rates',queryParams(args))
  } 

  findOne(id:number) {
    return this._call<TaxRate>('get',`/tax-rates/${id}`)
  }

  update(id:number,data:UpdateTaxRate) {
    return this._call<TaxRate>('patch',`/tax-rates/${id}`,data)
  }

  remove(id:number) {
    return this._call<TaxRate>('delete',`/tax-rates/${id}`)
  }
}