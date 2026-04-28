import { RestApiModuleI, ApiModule, queryParams, RemoveGQL, PaginatedDto, PaginatedGQL  } from "@maioradv/client-core";
import { Contract, CreateContract, UpdateContract, QueryContractDto } from "./types";

export default class Contracts extends ApiModule implements RestApiModuleI {
  create(data:CreateContract) {
    return this._call<Contract>('post','/contracts',data)
  }

  findAll(args:QueryContractDto = {}) {
    return this._call<PaginatedDto<Contract>>('get','/contracts',queryParams(args))
  } 

  findOne(id:number) {
    return this._call<Contract>('get',`/contracts/${id}`)
  }

  update(id:number,data:UpdateContract) {
    return this._call<Contract>('patch',`/contracts/${id}`,data)
  }

  remove(id:number) {
    return this._call<Contract>('delete',`/contracts/${id}`)
  }
}