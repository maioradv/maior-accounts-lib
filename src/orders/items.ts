import { ApiModule } from "../model";
import { OrderItem, UpdateOrderItem } from "./types";

export default class OrderItems extends ApiModule {
  update(id:number,data:UpdateOrderItem) {
    return this._call<OrderItem>('patch',`/order-items/${id}`,data)
  }

  remove(id:number) {
    return this._call<OrderItem>('delete',`/order-items/${id}`)
  }
}