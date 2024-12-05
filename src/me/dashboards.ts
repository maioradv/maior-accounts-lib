import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { Dashboard, DashboardAccess, QueryDashboardDto } from "../dashboards/types";
import { ApiModule } from "../model";
import { CreateOwnDashboardAccess } from "./types";

export default class Dashboards extends ApiModule {
  findAll(args:QueryDashboardDto = {}) {
    return this._call<PaginatedDto<Dashboard>>('get','/me/dashboards',queryParams(args))
  } 

  remove(id:number) {
    return this._call<Dashboard>('delete',`/me/dashboards/${id}`)
  }

  createAccess(id:number,data:CreateOwnDashboardAccess) {
    return this._call<DashboardAccess>('post',`/me/companies/${id}/accesses`,data)
  }

  findAllAccesses(id:number) {
    return this._call<DashboardAccess[]>('get',`/me/dashboards/${id}/accesses`)
  }
}