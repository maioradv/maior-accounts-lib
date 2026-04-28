import { RestApiModuleI, ApiModule, queryParams, RemoveGQL, PaginatedDto, PaginatedGQL, GraphApiModuleI  } from "@maioradv/client-core";
import { QueryDashboardGQLDto, dashboardsResolvers } from "./graphql";
import { Dashboard, CreateDashboard, UpdateDashboard, QueryDashboardDto, UpdateDashboardPlan, SlugCheck, SlugCheckResponse } from "./types";

export default class Dashboards extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(data:CreateDashboard): Promise<Dashboard> {
    return this._call<Dashboard>('post','/dashboards',data)
  }

  slugCheck(data:SlugCheck) {
    return this._call<SlugCheckResponse>('post','/dashboards/slug',data)
  }

  findAll(args:QueryDashboardDto = {}): Promise<PaginatedDto<Dashboard>> {
    return this._call<PaginatedDto<Dashboard>>('get','/dashboards',queryParams(args))
  } 

  findOne(id:number): Promise<Dashboard> {
    return this._call<Dashboard>('get',`/dashboards/${id}`)
  }

  update(id:number,data:UpdateDashboard): Promise<Dashboard> {
    return this._call<Dashboard>('patch',`/dashboards/${id}`,data)
  }

  updatePlan(id:number,data:UpdateDashboardPlan) {
    return this._call<void>('patch',`/dashboards/${id}/plan`,data)
  }

  remove(id:number): Promise<Dashboard> {
    return this._call<Dashboard>('delete',`/dashboards/${id}`)
  }

  syncPlan() {
    return this._call<void>('post','/dashboards/sync/plan')
  }

  syncPermissions() {
    return this._call<void>('post','/dashboards/sync/permissions')
  }
  
  list(args:QueryDashboardGQLDto = {}): Promise<PaginatedGQL<Dashboard>> {
    return this._graphql<PaginatedGQL<Dashboard>>(dashboardsResolvers.query.dashboards,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql<RemoveGQL>(dashboardsResolvers.mutation.removeDashboards,{
      id
    })
  }
}