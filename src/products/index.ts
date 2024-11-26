import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule } from "../model";
import { Product, CreateProduct, UpdateProduct, QueryProductDto } from "./types";

export default class Products extends ApiModule implements RestApiModuleI {
  create(data:CreateProduct) {
    return this._call<Product>('post','/products',data)
  }

  findAll(args:QueryProductDto = {}) {
    return this._call<PaginatedDto<Product>>('get','/products',queryParams(args))
  } 

  findOne(id:number) {
    return this._call<Product>('get',`/products/${id}`)
  }

  update(id:number,data:UpdateProduct) {
    return this._call<Product>('patch',`/products/${id}`,data)
  }

  remove(id:number) {
    return this._call<Product>('delete',`/products/${id}`)
  }
}