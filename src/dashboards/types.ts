import { BooleanClause, EnumClause, NumberClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
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
  orderId: number|null;
  updatedPlanAt: Date;
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
  api: string;
  createdAt: Date;
  updatedAt: Date;
}

type PartialDasboard = Partial<Omit<Dashboard,'id'|'createdAt'|'updatedAt'|'api'|'domain'|'status'|'masterToken'|'updatedPlanAt'>>

export type CreateDashboard = PartialDasboard & WithRequired<PartialDasboard,'name'|'plan'|'dashboardTypeId'>
export type UpdateDashboard = Partial<Omit<CreateDashboard,'dashboardTypeId'|'slug'|'plan'>>

export type UpdateDashboardPlan = {
  plan:string
}

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
  status?:EnumClause<DashboardStatus>,
  search?:StringClause,
}>

export type QueryDashboardDto = QueryParamsDto<SortingDashboardDto,ClausesDashboardDto>


export type DashboardAccess = {
  id: number;
  customerId: number;
  dashboardId: number;
  roleId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateDashboardAccess = Omit<DashboardAccess,'id'|'createdAt'|'updatedAt'>
export type UpdateDashboardAccess = Partial<CreateDashboardAccess>

export type SortingDashboardAccessDto = SortingParamsDto<{
  customerId?:Sorting,
  dashboardId?:Sorting,
  roleId?:Sorting,
}>

export type ClausesDashboardAccessDto = WhereClausesDto<{
  customerId?:NumberClause,
  dashboardId?:NumberClause,
  roleId?:NumberClause,
}>

export type QueryDashboardAccessDto = QueryParamsDto<SortingDashboardAccessDto,ClausesDashboardAccessDto>


export type CreateDashboardType = Omit<DashboardType,'id'|'createdAt'|'updatedAt'>
export type UpdateDashboardType = Partial<Omit<CreateDashboardType,'slug'>>

export type SortingDashboardTypeDto = SortingParamsDto<{
  name?:Sorting,
}>

export type ClausesDashboardTypeDto = WhereClausesDto<{
  name?:StringClause
}>

export type QueryDashboardTypeDto = QueryParamsDto<SortingDashboardTypeDto,ClausesDashboardTypeDto>