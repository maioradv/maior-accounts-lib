import { RestApiModuleI, ApiModule, queryParams, RemoveGQL, PaginatedDto, PaginatedGQL  } from "@maioradv/client-core";
import { PushSubscription } from "../pushSubscriptions/types";
import { PutOwnPushSubscriptionDto, QueryOwnPushSubscriptionDto, UpdateOwnPushSubscriptionDto } from "./types";

export default class PushSubscriptions extends ApiModule {
  put(data:PutOwnPushSubscriptionDto) {
    return this._call<PushSubscription>('put',`/me/push-subscriptions`,data)
  }

  findAll(args:QueryOwnPushSubscriptionDto = {}) {
    return this._call<PaginatedDto<PushSubscription>>('get','/me/push-subscriptions',queryParams(args))
  } 

  update(id:number,data:UpdateOwnPushSubscriptionDto) {
    return this._call<PushSubscription>('patch',`/me/push-subscriptions/${id}`,data)
  }
}