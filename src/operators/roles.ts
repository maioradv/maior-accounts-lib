import { RestApiModuleI, ApiModule, queryParams, RemoveGQL, PaginatedDto, PaginatedGQL  } from "@maioradv/client-core";
import { OperatorRole, CreateOperatorRole, UpdateOperatorRole, QueryOperatorRoleDto } from "./types";

export default class OperatorRoles extends ApiModule implements RestApiModuleI {
  create(data:CreateOperatorRole) {
    return this._call<OperatorRole>('post','/operator-roles',data)
  }

  findAll(args:QueryOperatorRoleDto = {}) {
    return this._call<PaginatedDto<OperatorRole>>('get','/operator-roles',queryParams(args))
  } 

  findOne(id:number) {
    return this._call<OperatorRole>('get',`/operator-roles/${id}`)
  }

  update(id:number,data:UpdateOperatorRole) {
    return this._call<OperatorRole>('patch',`/operator-roles/${id}`,data)
  }

  remove(id:number) {
    return this._call<OperatorRole>('delete',`/operator-roles/${id}`)
  }
}