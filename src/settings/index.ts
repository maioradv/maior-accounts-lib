import { PaginatedDto, PaginatedGQL } from "../core/dto/pagination";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule, GraphApiModuleI } from "../model";
import { QuerySettingGQLDto, settingsResolvers } from "./graphql";
import { Setting, CreateSetting, UpdateSetting, QuerySettingDto } from "./types";

export default class Settings extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(data:CreateSetting): Promise<Setting> {
    return this._call<Setting>('post','/settings',data)
  }

  findAll(args:QuerySettingDto = {}): Promise<PaginatedDto<Setting>> {
    return this._call<PaginatedDto<Setting>>('get','/settings',queryParams(args))
  } 

  findOne(id:number): Promise<Setting|null> {
    return this._call<Setting|null>('get',`/settings/${id}`)
  }

  update(id:number,data:UpdateSetting): Promise<Setting> {
    return this._call<Setting>('patch',`/settings/${id}`,data)
  }

  remove(id:number): Promise<Setting> {
    return this._call<Setting>('delete',`/settings/${id}`)
  }

  list(args:QuerySettingGQLDto = {}): Promise<PaginatedGQL<Setting>> {
    return this._graphql<PaginatedGQL<Setting>>(settingsResolvers.query.settings,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql<RemoveGQL>(settingsResolvers.mutation.removeSetting,{
      id
    })
  }
}