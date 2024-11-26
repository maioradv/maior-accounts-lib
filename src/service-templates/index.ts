import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule } from "../model";
import { ServiceTemplate, CreateServiceTemplate, UpdateServiceTemplate, QueryServiceTemplateDto } from "./types";

export default class ServiceTemplates extends ApiModule implements RestApiModuleI {
  create(data:CreateServiceTemplate) {
    return this._call<ServiceTemplate>('post','/service-templates',data)
  }

  findAll(args:QueryServiceTemplateDto = {}) {
    return this._call<PaginatedDto<ServiceTemplate>>('get','/service-templates',queryParams(args))
  } 

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