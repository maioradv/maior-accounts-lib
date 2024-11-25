import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule } from "../model";
import { Operator, CreateOperator, UpdateOperator, QueryOperatorDto } from "./types";

export default class Operators extends ApiModule implements RestApiModuleI {
  create(data:CreateOperator) {
    return this._call<Operator>('post','/operators',data)
  }

  findAll(args:QueryOperatorDto = {}) {
    return this._call<PaginatedDto<Operator>>('get','/operators',queryParams(args))
  } 

  findOne(id:number) {
    return this._call<Operator>('get',`/operators/${id}`)
  }

  update(id:number,data:UpdateOperator) {
    return this._call<Operator>('patch',`/operators/${id}`,data)
  }

  remove(id:number) {
    return this._call<Operator>('delete',`/operators/${id}`)
  }
}