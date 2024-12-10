import { ApiModule } from "../model";
import { OrderItemTemplate, UpdateOrderItemTemplate } from "./types";

export default class OrderItemTemplates extends ApiModule {
  update(id:number,data:UpdateOrderItemTemplate) {
    return this._call<OrderItemTemplate>('patch',`/order-item-templates/${id}`,data)
  }

  remove(id:number) {
    return this._call<OrderItemTemplate>('delete',`/order-item-templates/${id}`)
  }
}