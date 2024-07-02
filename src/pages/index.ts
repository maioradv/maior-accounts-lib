import { PaginatedDto, PaginatedGQL } from "../core/dto/pagination";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule, GraphApiModuleI } from "../model";
import { QueryPageGQLDto, pagesResolvers } from "./graphql";
import { Page, CreatePage, UpdatePage, QueryPageDto } from "./types";

export default class Pages extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(data:CreatePage): Promise<Page> {
    return this._call<Page>('post','/pages',data)
  }

  findAll(args:QueryPageDto = {}): Promise<PaginatedDto<Page>> {
    return this._call<PaginatedDto<Page>>('get','/pages',queryParams(args))
  } 

  findOne(id:number): Promise<Page|null> {
    return this._call<Page|null>('get',`/pages/${id}`)
  }

  update(id:number,data:UpdatePage): Promise<Page> {
    return this._call<Page>('patch',`/pages/${id}`,data)
  }

  remove(id:number): Promise<Page> {
    return this._call<Page>('delete',`/pages/${id}`)
  }

  list(args:QueryPageGQLDto = {}): Promise<PaginatedGQL<Page>> {
    return this._graphql<PaginatedGQL<Page>>(pagesResolvers.query.pages,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql<RemoveGQL>(pagesResolvers.mutation.removePage,{
      id
    })
  }
}