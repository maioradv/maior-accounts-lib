import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule } from "../model";
import { Plan, CreatePlan, UpdatePlan, QueryPlanDto, FindAllPlanDto, FindOnePlanDto } from "./types";

export default class Plans extends ApiModule implements RestApiModuleI {
  create(data:CreatePlan) {
    return this._call<Plan>('post','/plans',data)
  }

  findAll(args:QueryPlanDto = {}) {
    return this._call<PaginatedDto<FindAllPlanDto>>('get','/plans',queryParams(args))
  } 

  findOne(id:number) {
    return this._call<FindOnePlanDto>('get',`/plans/${id}`)
  }

  update(id:number,data:UpdatePlan) {
    return this._call<Plan>('patch',`/plans/${id}`,data)
  }

  remove(id:number) {
    return this._call<Plan>('delete',`/plans/${id}`)
  }
}