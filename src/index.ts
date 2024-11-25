import { AccountsApiClient } from "./client";
import { ApiConfigs } from "./config";

export { AccountsApiClient }
export type AccountsApiConfigs = ApiConfigs

export * from './types'
export * from './error'
export * from './auth/types'
export * from './customers/types'
export * from './dashboards/types'
export * from './dashboard-accesses/types'
export * from './operators/types'
export * from './companies/types'

export function accountsApiClient(opt:AccountsApiConfigs): AccountsApiClient {
  return new AccountsApiClient(opt)
}