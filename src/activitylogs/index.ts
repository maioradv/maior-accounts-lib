import { PaginatedDto, PaginatedGQL } from "../core/dto/pagination";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule } from "../model";
import { activityLogsResolvers, QueryActivityLogGQLDto } from "./graphql";
import { ActivityLog, CreateActivityLog, UpdateActivityLog, QueryActivityLogDto } from "./types";

export default class ActivityLogs extends ApiModule implements RestApiModuleI {
  create(data:CreateActivityLog) {
    return this._call<ActivityLog>('post','/activity-logs',data)
  }

  findAll(args:QueryActivityLogDto = {}) {
    return this._call<PaginatedDto<ActivityLog>>('get','/activity-logs',queryParams(args))
  } 

  findOne(id:number) {
    return this._call<ActivityLog>('get',`/activity-logs/${id}`)
  }

  update(id:number,data:UpdateActivityLog) {
    return this._call<ActivityLog>('patch',`/activity-logs/${id}`,data)
  }

  remove(id:number) {
    return this._call<ActivityLog>('delete',`/activity-logs/${id}`)
  }

  list(args:QueryActivityLogGQLDto = {}) {
    return this._graphql<PaginatedGQL<ActivityLog>>(activityLogsResolvers.query.activityLogs,args)
  }

  removeMany(id:number|number[]) {
    return this._graphql<RemoveGQL>(activityLogsResolvers.mutation.removeActivityLogs,{
      id
    })
  }
}