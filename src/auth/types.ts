import { ApiToken } from "../apitokens/types";
import { Customer } from "../customers/types";
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
  Customer?:Customer;
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
  read_products = 'read_products',
  write_products = 'write_products',
  read_plans = 'read_plans',
  write_plans = 'write_plans',
  read_contracts = 'read_contracts',
  write_contracts = 'write_contracts',
  read_invoices = 'read_invoices',
  write_invoices = 'write_invoices',
  read_activity_logs = 'read_activity_logs',
  write_activity_logs = 'write_activity_logs',
  read_service_templates = 'read_service_templates',
  write_service_templates = 'write_service_templates',
  read_operator_roles = 'read_operator_roles',
  write_operator_roles = 'write_operator_roles',
  read_companies = 'read_companies',
  write_companies = 'write_companies',
  read_services = 'read_services',
  write_services = 'write_services',
  read_scheduled_payments = 'read_scheduled_payments',
  write_scheduled_payments = 'write_scheduled_payments',
  read_payment_methods = 'read_payment_methods',
  write_payment_methods = 'write_payment_methods',
  read_orders = 'read_orders',
  write_orders = 'write_orders',
  manage_own_dashboards = 'manage_own_dashboards',
  manage_own_companies = 'manage_own_companies',
  manage_own_orders = 'manage_own_orders',
  register_customer = 'register_customer'
}