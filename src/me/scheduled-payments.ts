import { RestApiModuleI, ApiModule, queryParams, RemoveGQL, PaginatedDto, PaginatedGQL  } from "@maioradv/client-core";
import { QueryScheduledPaymentDto, ScheduledPayment } from "../scheduled-payments/types";

export default class ScheduledPayments extends ApiModule {
  findAll(args:QueryScheduledPaymentDto = {}) {
    return this._call<PaginatedDto<ScheduledPayment>>('get','/me/scheduled-payments',queryParams(args))
  } 
}