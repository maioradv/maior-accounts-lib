import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule } from "../model";
import { ScheduledPayment, CreateScheduledPayment, UpdateScheduledPayment, QueryScheduledPaymentDto } from "./types";

export default class ScheduledPayments extends ApiModule implements RestApiModuleI {
  create(data:CreateScheduledPayment) {
    return this._call<ScheduledPayment>('post','/scheduled-payments',data)
  }

  findAll(args:QueryScheduledPaymentDto = {}) {
    return this._call<PaginatedDto<ScheduledPayment>>('get','/scheduled-payments',queryParams(args))
  } 

  findOne(id:number) {
    return this._call<ScheduledPayment>('get',`/scheduled-payments/${id}`)
  }

  update(id:number,data:UpdateScheduledPayment) {
    return this._call<ScheduledPayment>('patch',`/scheduled-payments/${id}`,data)
  }

  remove(id:number) {
    return this._call<ScheduledPayment>('delete',`/scheduled-payments/${id}`)
  }
}