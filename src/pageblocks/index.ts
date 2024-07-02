import { PaginatedDto, PaginatedGQL } from "../core/dto/pagination";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule, GraphApiModuleI } from "../model";
import { QueryPageblockGQLDto, pageblocksResolvers } from "./graphql";
import { Pageblock, CreatePageblock, UpdatePageblock, QueryPageblockDto } from "./types";

export default class Pageblocks extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(data:CreatePageblock): Promise<Pageblock> {
    return this._call<Pageblock>('post','/pageblocks',data)
  }

  findAll(args:QueryPageblockDto = {}): Promise<PaginatedDto<Pageblock>> {
    return this._call<PaginatedDto<Pageblock>>('get','/pageblocks',queryParams(args))
  } 

  findOne(id:number): Promise<Pageblock|null> {
    return this._call<Pageblock|null>('get',`/pageblocks/${id}`)
  }

  update(id:number,data:UpdatePageblock): Promise<Pageblock> {
    return this._call<Pageblock>('patch',`/pageblocks/${id}`,data)
  }

  remove(id:number): Promise<Pageblock> {
    return this._call<Pageblock>('delete',`/pageblocks/${id}`)
  }

  list(args:QueryPageblockGQLDto = {}): Promise<PaginatedGQL<Pageblock>> {
    return this._graphql<PaginatedGQL<Pageblock>>(pageblocksResolvers.query.pageblocks,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql<RemoveGQL>(pageblocksResolvers.mutation.removePageblock,{
      id
    })
  }
}