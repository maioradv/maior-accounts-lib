import { BooleanClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { Translation, WithRequired } from "../types";

export type Plan = {
  id: number;
  name: string;
  description: string|null;
  tier: number;
  slug: string;
  dashboardTypeId: number;
  orderTemplateId: number|null;
  position: number|null;
  translations: Translation[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

type PartialPlan = Partial<Omit<Plan,'id'|'createdAt'|'updatedAt'>>

export type CreatePlan = PartialPlan & WithRequired<PartialPlan,'name'|'slug'|'dashboardTypeId'|'tier'>
export type UpdatePlan = PartialPlan

export type SortingPlanDto = SortingParamsDto<{
  name?:Sorting,
  tier?:Sorting
}>

export type ClausesPlanDto = WhereClausesDto<{
  name?:StringClause,
  slug?:StringClause,
  published?:BooleanClause,
}>

export type QueryPlanDto = QueryParamsDto<SortingPlanDto,ClausesPlanDto>