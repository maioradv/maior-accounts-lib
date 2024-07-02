import { PaginatedDto, PaginatedGQL } from "../core/dto/pagination";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule, GraphApiModuleI } from "../model";
import { QueryLayoutGQLDto, layoutsResolvers } from "./graphql";
import { Layout, CreateLayout, UpdateLayout, QueryLayoutDto } from "./types";

export default class Layouts extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(data:CreateLayout): Promise<Layout> {
    return this._call<Layout>('post','/layouts',data)
  }

  findAll(args:QueryLayoutDto = {}): Promise<PaginatedDto<Layout>> {
    return this._call<PaginatedDto<Layout>>('get','/layouts',queryParams(args))
  } 

  findOne(id:number): Promise<Layout|null> {
    return this._call<Layout|null>('get',`/layouts/${id}`)
  }

  update(id:number,data:UpdateLayout): Promise<Layout> {
    return this._call<Layout>('patch',`/layouts/${id}`,data)
  }

  remove(id:number): Promise<Layout> {
    return this._call<Layout>('delete',`/layouts/${id}`)
  }

  list(args:QueryLayoutGQLDto = {}): Promise<PaginatedGQL<Layout>> {
    return this._graphql<PaginatedGQL<Layout>>(layoutsResolvers.query.layouts,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql<RemoveGQL>(layoutsResolvers.mutation.removeLayout,{
      id
    })
  }
}