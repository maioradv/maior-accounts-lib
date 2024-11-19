import { BooleanClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { WithRequired } from "../types";

export type Dashboard = {
  id: number;
  status: DashboardStatus;
  slug: string;
  name: string;
  domain: string;
  api: string;
  plan: string;
  masterToken: string|null;
  dashboardTypeId: number;
  createdAt: Date;
  updatedAt: Date;
}

export enum DashboardStatus {
  installing = 'installing',
  removing = 'removing',
  suspended = 'suspended',
  online = 'online'
}

export type DashboardType = {
  id: number;
  slug: string;
  name: string;
  domain: string;
  createdAt: Date;
  updatedAt: Date;
}

type PartialDasboard = Partial<Omit<Dashboard,'id'|'createdAt'|'updatedAt'|'slug'|'api'|'domain'|'status'|'masterToken'>>

export type CreateDashboard = PartialDasboard & WithRequired<PartialDasboard,'name'|'plan'|'dashboardTypeId'>
export type UpdateDashboard = Partial<Omit<CreateDashboard,'dashboardTypeId'>>

export type SortingDashboardDto = SortingParamsDto<{
  plan?:Sorting,
  domain?:Sorting,
  name?:Sorting,
}>

export type ClausesDashboardDto = WhereClausesDto<{
  api?:StringClause,
  name?:StringClause,
  domain?:StringClause,
  plan?:StringClause,
}>

export type QueryDashboardDto = QueryParamsDto<SortingDashboardDto,ClausesDashboardDto>