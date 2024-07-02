import { AccountsApiClient } from "./client";
import { ApiConfigs } from "./config";

export * from './types'
export * from './error'

export type AccountsApiOptions = ApiConfigs

export function accountsApiClient(opt:AccountsApiOptions): AccountsApiClient {
  return new AccountsApiClient(opt)
}