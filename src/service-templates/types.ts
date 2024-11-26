import { BooleanClause, NumberClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { Translation, WithRequired } from "../types";

export type ServiceTemplate = {
  id: number;
  description: string;
  quantity: number|null;
  price: number|null;
  productId: number;
  planId: number;
  translations: Translation[];
  createdAt: Date;
  updatedAt: Date;
}

type PartialServiceTemplate = Partial<Omit<ServiceTemplate,'id'|'createdAt'|'updatedAt'>>

export type CreateServiceTemplate = PartialServiceTemplate & WithRequired<PartialServiceTemplate,'description'|'productId'|'planId'>
export type UpdateServiceTemplate = PartialServiceTemplate

export type SortingServiceTemplateDto = SortingParamsDto<{
  description?:Sorting,
}>

export type ClausesServiceTemplateDto = WhereClausesDto<{
  search?:StringClause,
  planId?:NumberClause,
  productId?:NumberClause,
}>

export type QueryServiceTemplateDto = QueryParamsDto<SortingServiceTemplateDto,ClausesServiceTemplateDto>