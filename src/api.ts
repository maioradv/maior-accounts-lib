export enum ApiVersion {
  July24 = '2024-07',
  Unstable = 'unstable'
}

export const LATEST_API_VERSION = ApiVersion.July24
export const SUPPORTED_API_VERSIONS = [
  LATEST_API_VERSION,
  ApiVersion.Unstable
]

export enum ApiHeader {
  Authorization = 'Authorization',
  ApiVersion = 'X-Api-Version'
}