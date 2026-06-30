import { BooleanClause, StringClause, WhereClausesDto, Sorting, SortingParamsDto, QueryParamsDto, NumberClause, ObjectClause, DateClause, EnumClause } from "@maioradv/client-core";
import { Metafield, OmitRequire, Translation, WithRelation, WithRelations } from "@maioradv/types";

export type PushSubscription = {
  id: number;
  name: string|null;
  dashboardId: number;
  customerId: number;
  token: string;
  deviceId: string;
  platform: string;
  locale: string;
  timezone: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type CreatePushSubscriptionDto = OmitRequire<PushSubscription,'id'|'createdAt'|'updatedAt','customerId'|'token'|'deviceId'|'platform'|'dashboardId'>
export type UpdatePushSubscriptionDto = Partial<CreatePushSubscriptionDto>

export type SortingPushSubscriptionDto = SortingParamsDto<{
  dashboardId?:Sorting,
  customerId?:Sorting,
  platform?: Sorting;
  locale?: Sorting;
  active?: Sorting;
  name?: Sorting;
}>

export type ClausesPushSubscriptionDto = WhereClausesDto<{
  search?:StringClause,
  dashboardId?:NumberClause,
  customerId?:NumberClause,
  token?:StringClause,
  ddeviceId?:StringClause,
  platform?:StringClause|StringClause[],
  locale?:StringClause|StringClause[],
  timezone?:StringClause,
  active?:BooleanClause,
}>

export type QueryPushSubscriptionDto = QueryParamsDto<SortingPushSubscriptionDto,ClausesPushSubscriptionDto>
