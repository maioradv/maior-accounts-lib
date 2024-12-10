import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule } from "../model";
import { OrderTemplate, CreateOrderTemplate, UpdateOrderTemplate, QueryOrderTemplateDto, OrderItemTemplate, CreateOrderItemTemplate, ServiceTemplate, CreateServiceTemplate, FindOneOrderTemplate } from "./types";

export default class OrderTemplates extends ApiModule implements RestApiModuleI {
  create(data:CreateOrderTemplate) {
    return this._call<OrderTemplate>('post','/order-templates',data)
  }

  findAll(args:QueryOrderTemplateDto = {}) {
    return this._call<PaginatedDto<OrderTemplate>>('get','/order-templates',queryParams(args))
  } 

  findOne(id:number) {
    return this._call<FindOneOrderTemplate>('get',`/order-templates/${id}`)
  }

  update(id:number,data:UpdateOrderTemplate) {
    return this._call<OrderTemplate>('patch',`/order-templates/${id}`,data)
  }

  remove(id:number) {
    return this._call<OrderTemplate>('delete',`/order-templates/${id}`)
  }

  createServiceTemplate(id:number,data:CreateServiceTemplate) {
    return this._call<ServiceTemplate>('post',`/order-templates/${id}/service-templates`,data)
  }

  findAllServiceTemplates(id:number) {
    return this._call<ServiceTemplate[]>('get',`/order-templates/${id}/service-templates`)
  }

  createItemTemplate(id:number,data:CreateOrderItemTemplate) {
    return this._call<OrderItemTemplate>('post',`/order-templates/${id}/item-templates`,data)
  }

  findAllItemTemplates(id:number) {
    return this._call<OrderItemTemplate[]>('get',`/order-templates/${id}/item-templates`)
  }
}