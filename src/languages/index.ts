import { PaginatedDto, PaginatedGQL } from "../core/dto/pagination";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule, GraphApiModuleI } from "../model";
import { QueryLanguageGQLDto, languagesResolvers } from "./graphql";
import { Language, CreateLanguage, UpdateLanguage, QueryLanguageDto } from "./types";

export default class Languages extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(data:CreateLanguage): Promise<Language> {
    return this._call<Language>('post','/languages',data)
  }

  findAll(args:QueryLanguageDto = {}): Promise<PaginatedDto<Language>> {
    return this._call<PaginatedDto<Language>>('get','/languages',queryParams(args))
  } 

  findOne(id:number): Promise<Language|null> {
    return this._call<Language|null>('get',`/languages/${id}`)
  }

  update(id:number,data:UpdateLanguage): Promise<Language> {
    return this._call<Language>('patch',`/languages/${id}`,data)
  }

  remove(id:number): Promise<Language> {
    return this._call<Language>('delete',`/languages/${id}`)
  }
  
  list(args:QueryLanguageGQLDto = {}): Promise<PaginatedGQL<Language>> {
    return this._graphql<PaginatedGQL<Language>>(languagesResolvers.query.languages,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql<RemoveGQL>(languagesResolvers.mutation.removeLanguage,{
      id
    })
  }
}