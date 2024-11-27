import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule } from "../model";
import { Order, CreateOrder, UpdateOrder, QueryOrderDto, OrderItem, CreateOrderItem } from "./types";

export default class Orders extends ApiModule implements RestApiModuleI {
  create(data:CreateOrder) {
    return this._call<Order>('post','/orders',data)
  }

  findAll(args:QueryOrderDto = {}) {
    return this._call<PaginatedDto<Order>>('get','/orders',queryParams(args))
  } 

  findOne(id:number) {
    return this._call<Order>('get',`/orders/${id}`)
  }

  update(id:number,data:UpdateOrder) {
    return this._call<Order>('patch',`/orders/${id}`,data)
  }

  remove(id:number) {
    return this._call<Order>('delete',`/orders/${id}`)
  }

  createItem(id:number,data:CreateOrderItem) {
    return this._call<OrderItem>('post',`/orders/${id}/items`,data)
  }

  findAllItems(id:number) {
    return this._call<OrderItem[]>('get',`/orders/${id}/items`)
  }
}