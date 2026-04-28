import { RestApiModuleI, ApiModule, queryParams, RemoveGQL, PaginatedDto, PaginatedGQL  } from "@maioradv/client-core";
import { ScheduledPayment, CreateScheduledPayment, UpdateScheduledPayment, QueryScheduledPaymentDto, FindOneScheduledPayment } from "./types";

export default class ScheduledPayments extends ApiModule implements RestApiModuleI {
  create(data:CreateScheduledPayment) {
    return this._call<ScheduledPayment>('post','/scheduled-payments',data)
  }

  findAll(args:QueryScheduledPaymentDto = {}) {
    return this._call<PaginatedDto<ScheduledPayment>>('get','/scheduled-payments',queryParams(args))
  } 

  findOne(id:number) {
    return this._call<FindOneScheduledPayment>('get',`/scheduled-payments/${id}`)
  }

  update(id:number,data:UpdateScheduledPayment) {
    return this._call<ScheduledPayment>('patch',`/scheduled-payments/${id}`,data)
  }

  remove(id:number) {
    return this._call<ScheduledPayment>('delete',`/scheduled-payments/${id}`)
  }
}