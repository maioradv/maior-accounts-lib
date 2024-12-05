import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { ApiModule } from "../model";
import { QueryScheduledPaymentDto, ScheduledPayment } from "../scheduled-payments/types";

export default class ScheduledPayments extends ApiModule {
  findAll(args:QueryScheduledPaymentDto = {}) {
    return this._call<PaginatedDto<ScheduledPayment>>('get','/me/scheduled-payments',queryParams(args))
  } 
}