import { RestApiModuleI, ApiModule, queryParams, RemoveGQL, PaginatedDto, PaginatedGQL  } from "@maioradv/client-core";
import { Operator, CreateOperator, UpdateOperator, QueryOperatorDto, FindAllOperatorDto } from "./types";

export default class Operators extends ApiModule implements RestApiModuleI {
  create(data:CreateOperator) {
    return this._call<Operator>('post','/operators',data)
  }

  findAll(args:QueryOperatorDto = {}) {
    return this._call<PaginatedDto<FindAllOperatorDto>>('get','/operators',queryParams(args))
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