import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { DashboardAccess } from "../dashboards/types";
import { ApiModule } from "../model";
import { QueryOwnDashboardAccessDto, UpdateOwnDashboardAccess, FindAllOwnDashboardAccess } from "./types";

export default class DashboardAccesses extends ApiModule {
  findAll(args:QueryOwnDashboardAccessDto = {}) {
    return this._call<PaginatedDto<FindAllOwnDashboardAccess>>('get','/me/dashboard-accesses',queryParams(args))
  } 

  update(id:number,data:UpdateOwnDashboardAccess) {
    return this._call<DashboardAccess>('patch',`/me/dashboard-accesses/${id}`,data)
  }

  remove(id:number) {
    return this._call<DashboardAccess>('delete',`/me/dashboard-accesses/${id}`)
  }
}