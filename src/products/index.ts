import { RestApiModuleI, ApiModule, queryParams, RemoveGQL, PaginatedDto, PaginatedGQL  } from "@maioradv/client-core";
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