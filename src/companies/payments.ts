import { ApiModule } from "../model";
import { PaymentMethod, UpdatePaymentMethod } from "./types";

export default class PaymentMethods extends ApiModule {
  update(id:number,data:UpdatePaymentMethod) {
    return this._call<PaymentMethod>('patch',`/payment-methods/${id}`,data)
  }

  remove(id:number) {
    return this._call<PaymentMethod>('delete',`/payment-methods/${id}`)
  }
}