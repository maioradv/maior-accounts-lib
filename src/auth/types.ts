import { ApiToken } from "../apitokens/types";
import { Customer } from "../customers/types";
import { DashboardAccess } from "../dashboard-accesses/types";
import { Dashboard } from "../dashboards/types";

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
  apiToken = 'ApiToken'
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

export type Jwt = {
  payload:JwtPayload;
  Customer?:Customer & { DashboardAccess: (DashboardAccess & {Dashboard: Dashboard})[]};
  ApiToken?:ApiToken;
}

export enum Permission {
  read_customers = 'read_customers',
  write_customers = 'write_customers',
  read_dashboard = 'read_dashboard',
  write_dashboard = 'write_dashboard',
}