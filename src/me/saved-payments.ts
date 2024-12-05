import { SavedPayment } from "../companies/types";
import { ApiModule } from "../model";
import { UpdateOwnSavedPayment } from "./types";

export default class SavedPayments extends ApiModule {
  update(id:number,data:UpdateOwnSavedPayment) {
    return this._call<SavedPayment>('patch',`/me/saved-payments/${id}`,data)
  }

  remove(id:number) {
    return this._call<SavedPayment>('delete',`/me/saved-payments/${id}`)
  }
}