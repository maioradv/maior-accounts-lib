import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule } from "../model";
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
}