import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule } from "../model";
import { PaymentMethod, CreatePaymentMethod, UpdatePaymentMethod, QueryPaymentMethodDto } from "./types";

export default class PaymentMethods extends ApiModule implements RestApiModuleI {
  create(data:CreatePaymentMethod) {
    return this._call<PaymentMethod>('post','/payment-methods',data)
  }

  findAll(args:QueryPaymentMethodDto = {}) {
    return this._call<PaginatedDto<PaymentMethod>>('get','/payment-methods',queryParams(args))
  } 

  findOne(id:number) {
    return this._call<PaymentMethod>('get',`/payment-methods/${id}`)
  }

  update(id:number,data:UpdatePaymentMethod) {
    return this._call<PaymentMethod>('patch',`/payment-methods/${id}`,data)
  }

  remove(id:number) {
    return this._call<PaymentMethod>('delete',`/payment-methods/${id}`)
  }
}