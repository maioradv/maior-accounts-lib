import { ApiModule } from "../model";
import { Service } from "../services/types";

export default class Services extends ApiModule {
  findOne(id:number) {
    return this._call<Service>('get',`/me/services/${id}`)
  }

  cancel(id:number) {
    return this._call<Service>('post',`/me/services/${id}/cancel`)
  }
}