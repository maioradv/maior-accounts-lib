import { PaginatedDto, PaginatedGQL } from "../core/dto/pagination";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule, GraphApiModuleI } from "../model";
import { QueryFormatGQLDto, formatsResolvers } from "./graphql";
import { Format, CreateFormat, UpdateFormat, QueryFormatDto } from "./types";

export default class Formats extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(data:CreateFormat): Promise<Format> {
    return this._call<Format>('post','/formats',data)
  }

  findAll(args:QueryFormatDto = {}): Promise<PaginatedDto<Format>> {
    return this._call<PaginatedDto<Format>>('get','/formats',queryParams(args))
  } 

  findOne(id:number): Promise<Format|null> {
    return this._call<Format|null>('get',`/formats/${id}`)
  }

  update(id:number,data:UpdateFormat): Promise<Format> {
    return this._call<Format>('patch',`/formats/${id}`,data)
  }

  remove(id:number): Promise<Format> {
    return this._call<Format>('delete',`/formats/${id}`)
  }

  list(args:QueryFormatGQLDto = {}): Promise<PaginatedGQL<Format>> {
    return this._graphql<PaginatedGQL<Format>>(formatsResolvers.query.formats,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql<RemoveGQL>(formatsResolvers.mutation.removeFormat,{
      id
    })
  }
}