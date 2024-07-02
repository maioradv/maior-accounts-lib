import { EnumClause, NumberClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { WithRequired } from "../types";

export enum LayoutTarget {
  main = 'main',
  top = 'top',
  bot = 'bot',
  right = 'right',
  left = 'left'
}

export type Layout = {
  id: number;
  target: LayoutTarget;
  position: number;
  formatId: number;
  pageblockId: number;
  createdAt: Date;
  updatedAt: Date;
}

type PartialLayout = Partial<Omit<Layout,'id'|'createdAt'|'updatedAt'>>

export type CreateLayout = PartialLayout & WithRequired<PartialLayout,'target'|'formatId'|'pageblockId'>
export type UpdateLayout = PartialLayout

export type SortingLayoutDto = SortingParamsDto<{
  target?:Sorting,
  position?:Sorting,
  pageblockId?:Sorting,
  formatId?:Sorting,
}>

export type ClausesLayoutDto = WhereClausesDto<{
  target?:EnumClause<LayoutTarget>,
  position?:NumberClause,
  pageblockId?:NumberClause,
  formatId?:NumberClause,
}>

export type QueryLayoutDto = QueryParamsDto<SortingLayoutDto,ClausesLayoutDto>