import { ApiModule } from "../model";
import { SavedPayment, UpdateSavedPayment } from "./types";

export default class SavedPayments extends ApiModule {
  update(id:number,data:UpdateSavedPayment) {
    return this._call<SavedPayment>('patch',`/saved-payments/${id}`,data)
  }

  remove(id:number) {
    return this._call<SavedPayment>('delete',`/saved-payments/${id}`)
  }
}