import { RestApiModuleI, ApiModule, queryParams, RemoveGQL, PaginatedDto, PaginatedGQL  } from "@maioradv/client-core";
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

  cancel(id:number) {
    return this._call<Service>('post',`/services/${id}/cancel`)
  }

  remove(id:number) {
    return this._call<Service>('delete',`/services/${id}`)
  }
}