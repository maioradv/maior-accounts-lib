import { SignInDto } from "./auth/types"
import { AuthError, ConfigError } from "./error"
import { ApiVersion, LATEST_API_VERSION, SUPPORTED_API_VERSIONS, WithRequired } from "./types"

export type ApiConfigs = {
  host:string,
  credentials:{
    signIn?:SignInDto,
    apiToken?:string
  },
  version?:ApiVersion
}

export type ValidatedApiConfigs = ApiConfigs & WithRequired<ApiConfigs,'version'>

export function validateConfigs(configs:ApiConfigs): ValidatedApiConfigs {
  if(!configs.host) throw new ConfigError(`Missing config param: host`)
  if(configs.version && !SUPPORTED_API_VERSIONS.includes(configs.version)) throw new ConfigError(`Version ${configs.version} is not supported anymore`)
  if(!configs.credentials.apiToken && !configs.credentials.signIn) throw new AuthError(`Credentials are required`)

  return {
    ...configs,
    version: configs.version ?? LATEST_API_VERSION
  }
}