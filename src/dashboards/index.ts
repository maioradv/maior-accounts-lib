import { PaginatedDto, PaginatedGQL } from "../core/dto/pagination";
import { SlugCheck, SlugCheckResponse } from "../core/dto/slugger";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule, GraphApiModuleI } from "../model";
import { QueryDashboardGQLDto, dashboardsResolvers } from "./graphql";
import { Dashboard, CreateDashboard, UpdateDashboard, QueryDashboardDto, UpdateDashboardPlan } from "./types";

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
  
  list(args:QueryDashboardGQLDto = {}): Promise<PaginatedGQL<Dashboard>> {
    return this._graphql<PaginatedGQL<Dashboard>>(dashboardsResolvers.query.dashboards,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql<RemoveGQL>(dashboardsResolvers.mutation.removeDashboards,{
      id
    })
  }
}