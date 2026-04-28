import { RestApiModuleI, ApiModule, queryParams, RemoveGQL, PaginatedDto, PaginatedGQL  } from "@maioradv/client-core";
import { ServiceTemplate, UpdateServiceTemplate } from "./types";

export default class ServiceTemplates extends ApiModule {
  findOne(id:number) {
    return this._call<ServiceTemplate>('get',`/service-templates/${id}`)
  }

  update(id:number,data:UpdateServiceTemplate) {
    return this._call<ServiceTemplate>('patch',`/service-templates/${id}`,data)
  }

  remove(id:number) {
    return this._call<ServiceTemplate>('delete',`/service-templates/${id}`)
  }
}