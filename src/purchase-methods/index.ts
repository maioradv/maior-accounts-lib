import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule } from "../model";
import { PurchaseMethod, CreatePurchaseMethod, UpdatePurchaseMethod, QueryPurchaseMethodDto } from "./types";

export default class PurchaseMethods extends ApiModule implements RestApiModuleI {
  create(data:CreatePurchaseMethod) {
    return this._call<PurchaseMethod>('post','/purchase-methods',data)
  }

  findAll(args:QueryPurchaseMethodDto = {}) {
    return this._call<PaginatedDto<PurchaseMethod>>('get','/purchase-methods',queryParams(args))
  } 

  findOne(id:number) {
    return this._call<PurchaseMethod>('get',`/purchase-methods/${id}`)
  }

  update(id:number,data:UpdatePurchaseMethod) {
    return this._call<PurchaseMethod>('patch',`/purchase-methods/${id}`,data)
  }

  remove(id:number) {
    return this._call<PurchaseMethod>('delete',`/purchase-methods/${id}`)
  }
}