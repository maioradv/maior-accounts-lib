import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { Dashboard, DashboardAccess, QueryDashboardDto, UpdateDashboardPlan } from "../dashboards/types";
import { ApiModule } from "../model";
import { CreateOwnDashboardAccess } from "./types";

export default class Dashboards extends ApiModule {
  findOne(id:number) {
    return this._call<Dashboard>('get',`/me/dashboards/${id}`)
  } 

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

  ownAccess(id:number) {
    return this._call<DashboardAccess>('get',`/me/dashboards/${id}/own-access`)
  }

  ownAccessBySlug(slug:string) {
    return this._call<DashboardAccess>('get',`/me/dashboards/${slug}/own-access-slug`)
  }

  updatePlan(id:number,data:UpdateDashboardPlan) {
    return this._call<void>('patch',`/me/dashboards/${id}/plan`,data)
  }
}