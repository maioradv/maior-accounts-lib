import { Permission } from "../auth/types";
import { QueryParamsDto, Sorting, SortingParamsDto, BooleanClause, StringClause, WhereClausesDto, NumberClause } from "@maioradv/client-core";
import { Translation, WithRequired } from "@maioradv/types";

export type Operator = {
  id: number;
  email: string;
  password: string;
  name: string|null;
  active: boolean;
  operatorRoleId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type OperatorSession = {
  id: number;
  refreshToken: string;
  expireAt: Date;
  ip: string|null;
  userAgent: string|null;
  operatorId: number;
  createdAt: Date;
  updatedAt: Date;
}

type PartialOperator = Partial<Omit<Operator,'id'|'createdAt'|'updatedAt'>>

export type CreateOperator = PartialOperator & WithRequired<PartialOperator,'email'|'password'|'operatorRoleId'>
export type UpdateOperator = PartialOperator

export type SortingOperatorDto = SortingParamsDto<{
  active?:Sorting,
  email?:Sorting,
  name?:Sorting,
  operatorRoleId?:Sorting
}>

export type ClausesOperatorDto = WhereClausesDto<{
  email?:StringClause,
  active?:BooleanClause,
  operatorRoleId?:NumberClause,
  search?:StringClause
}>

export type QueryOperatorDto = QueryParamsDto<SortingOperatorDto,ClausesOperatorDto>

export type OperatorRole = {
  id: number;
  name: string;
  description: string|null;
  permissions: Permission[];
  translations: Translation[];
  createdAt: Date;
  updatedAt: Date;
}

type PartialOperatorRole = Partial<Omit<OperatorRole,'id'|'createdAt'|'updatedAt'>>

export type CreateOperatorRole = PartialOperatorRole & WithRequired<PartialOperatorRole,'name'|'permissions'>
export type UpdateOperatorRole = PartialOperatorRole

export type FindAllOperatorDto = Operator & {
  OperatorRole:OperatorRole
}

export type SortingOperatorRoleDto = SortingParamsDto<{
  name?:Sorting,
}>

export type ClausesOperatorRoleDto = WhereClausesDto<{
  name?:StringClause,
  description?:StringClause,
  search?:StringClause
}>

export type QueryOperatorRoleDto = QueryParamsDto<SortingOperatorRoleDto,ClausesOperatorRoleDto>