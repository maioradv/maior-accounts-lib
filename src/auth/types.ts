import { ApiToken } from "../apitokens/types";
import { Customer } from "../customers/types";
import { Dashboard, DashboardAccess } from "../dashboards/types";
import { Operator } from "../operators/types";

export type SignInDto = {
  email:string;
  password:string;
}

export type AccessTokenDto = {
  access_token:string;
  token_type:string;
  expires_in:number;
  refresh_token?:string;
}

export enum JwtContextType {
  customer = 'Customer',
  apiToken = 'ApiToken',
  operator = 'Operator'
}

export type JwtPayloadContext = {
  type:JwtContextType;
  id:number;
  name:string;
}

export type JwtPayload = {
  sub: string;
  aud: string[];
  scope: string[];
  iat: number;
  exp: number;
  iss: string;
  context: JwtPayloadContext;
}

export type JwtContext = {
  Customer?:Customer & { DashboardAccess: (DashboardAccess & {Dashboard: Dashboard})[]};
  Operator?:Operator;
  ApiToken?:ApiToken;
}

export type Jwt = {
  payload:JwtPayload;
} & JwtContext

export type JwtWith<T extends keyof JwtContext> = {
  payload: JwtPayload;
} & Record<T, JwtContext[T]>

export enum Permission {
  read_customers = 'read_customers',
  write_customers = 'write_customers',
  read_dashboards = 'read_dashboards',
  write_dashboards = 'write_dashboards',
  read_operators = 'read_operators',
  write_operators = 'write_operators',
  read_operator_roles = 'read_operator_roles',
  write_operator_roles = 'write_operator_roles',
  manage_own_dashboards = 'manage_own_dashboards',
  manage_own_companies = 'manage_own_companies',
  manage_own_orders = 'manage_own_orders'
}