import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule } from "../model";
import { DashboardType, CreateDashboardType, UpdateDashboardType, QueryDashboardTypeDto } from "./types";

export default class DashboardTypes extends ApiModule implements RestApiModuleI {
  create(data:CreateDashboardType) {
    return this._call<DashboardType>('post','/dashboard-types',data)
  }

  findAll(args:QueryDashboardTypeDto = {}) {
    return this._call<PaginatedDto<DashboardType>>('get','/dashboard-types',queryParams(args))
  } 

  findOne(id:number) {
    return this._call<DashboardType>('get',`/dashboard-types/${id}`)
  }

  update(id:number,data:UpdateDashboardType) {
    return this._call<DashboardType>('patch',`/dashboard-types/${id}`,data)
  }

  remove(id:number) {
    return this._call<DashboardType>('delete',`/dashboard-types/${id}`)
  }
}