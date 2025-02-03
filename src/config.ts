import { AxiosInstance } from "axios"
import { SignInDto } from "./auth/types"
import { ConfigError } from "./error"
import { ApiVersion, LATEST_API_VERSION, SUPPORTED_API_VERSIONS, WithRequired } from "./types"

export type ApiConfigs = {
  credentials?:{
    customer?:SignInDto,
    operator?:SignInDto,
    apiToken?:string
  },
  version?:ApiVersion,
  sandbox?:boolean,
  axios?:(axios:AxiosInstance) => AxiosInstance
}

export type ValidatedApiConfigs = ApiConfigs & WithRequired<ApiConfigs,'version'|'sandbox'>

export function validateConfigs(configs:ApiConfigs): ValidatedApiConfigs {
  if(configs.version && !SUPPORTED_API_VERSIONS.includes(configs.version)) throw new ConfigError(`Version ${configs.version} is not supported anymore`)
  if(configs.credentials && !configs.credentials.apiToken && !configs.credentials.customer && !configs.credentials.operator) throw new ConfigError(`Credentials are required`)

  return {
    ...configs,
    version: configs.version ?? LATEST_API_VERSION,
    sandbox: configs.sandbox ?? false
  }
}