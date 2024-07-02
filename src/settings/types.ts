import { StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { Translation, WithRequired } from "../types";

export type Setting = {
  id: number;
  name: string;
  value: string|null;
  description: string|null;
  translations: Translation[];
  createdAt: Date;
  updatedAt: Date;
}

type PartialSetting = Partial<Omit<Setting,'id'|'createdAt'|'updatedAt'>>

export type CreateSetting = PartialSetting & WithRequired<PartialSetting,'name'>
export type UpdateSetting = PartialSetting

export type SortingSettingDto = SortingParamsDto<{
  name?:Sorting,
}>

export type ClausesSettingDto = WhereClausesDto<{
  name?:StringClause,
  nameContains?:string|undefined,
  value?:StringClause,
  descriptionContains?:string|undefined,
  valueContains?:string|undefined
}>

export type QuerySettingDto = QueryParamsDto<SortingSettingDto,ClausesSettingDto>