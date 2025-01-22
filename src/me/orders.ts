import { Contract, QueryContractDto } from "../contracts/types";
import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { Invoice, QueryInvoiceDto } from "../invoices/types";
import { ApiModule } from "../model";
import { CreateOrderResponse, Order, OrderItem } from "../orders/types";
import { CreateOwnOrder, FindOneOwnOrderDto, QueryOwnOrderDto } from "./types";

export default class Orders extends ApiModule {
  create(data:CreateOwnOrder) {
    return this._call<CreateOrderResponse>('post',`/me/orders`,data)
  }

  capture(transactionId:string) {
    return this._call<CreateOrderResponse>('post',`/me/orders/${transactionId}/capture`)
  }

  findOne(id:number) {
    return this._call<FindOneOwnOrderDto>('get',`/me/orders/${id}`)
  } 

  findAll(args:QueryOwnOrderDto = {}) {
    return this._call<PaginatedDto<Order>>('get','/me/orders',queryParams(args))
  }   

  findAllItems(id:number) {
    return this._call<OrderItem[]>('get',`/me/orders/${id}/items`)
  }

  findAllInvoices(id:number,args:QueryInvoiceDto = {}) {
    return this._call<PaginatedDto<Invoice>>('get',`/me/orders/${id}/items`,queryParams(args))
  } 

  findAllContracts(id:number,args:QueryContractDto = {}) {
    return this._call<PaginatedDto<Contract>>('get',`/me/orders/${id}/contracts`,queryParams(args))
  } 
}