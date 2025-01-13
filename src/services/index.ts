import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule } from "../model";
import { Service, CreateService, UpdateService, QueryServiceDto, FindOneService } from "./types";

export default class Services extends ApiModule implements RestApiModuleI {
  create(data:CreateService) {
    return this._call<Service>('post','/services',data)
  }

  findAll(args:QueryServiceDto = {}) {
    return this._call<PaginatedDto<Service>>('get','/services',queryParams(args))
  } 

  findOne(id:number) {
    return this._call<FindOneService>('get',`/services/${id}`)
  }

  update(id:number,data:UpdateService) {
    return this._call<Service>('patch',`/services/${id}`,data)
  }

  remove(id:number) {
    return this._call<Service>('delete',`/services/${id}`)
  }
}