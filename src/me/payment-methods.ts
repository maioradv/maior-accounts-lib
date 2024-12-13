import { PaymentMethod } from "../companies/types";
import { ApiModule } from "../model";
import { UpdateOwnPaymentMethod } from "./types";

export default class PaymentMethods extends ApiModule {
  update(id:number,data:UpdateOwnPaymentMethod) {
    return this._call<PaymentMethod>('patch',`/me/payment-methods/${id}`,data)
  }

  remove(id:number) {
    return this._call<PaymentMethod>('delete',`/me/payment-methods/${id}`)
  }
}