import { AccountsApiClient } from "./client";
import { ApiConfigs } from "./config";

export { AccountsApiClient }
export type AccountsApiConfigs = ApiConfigs

export * from './types'
export * from './error'

export * from './activitylogs/types'
export * from './apitokens/types'
export * from './auth/types'
export * from './companies/types'
export * from './contracts/types'
export * from './customers/types'
export * from './dashboards/types'
export * from './invoices/types'
export * from './me/types'
export * from './operators/types'
export * from './orders/types'
export * from './payment-methods/types'
export * from './plans/types'
export * from './products/types'
export * from './scheduled-payments/types'
export * from './service-templates/types'
export * from './services/types'

export function accountsApiClient(opt:AccountsApiConfigs): AccountsApiClient {
  return new AccountsApiClient(opt)
}