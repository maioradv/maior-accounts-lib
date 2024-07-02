import { AxiosError } from "axios";

export class RenovatioError extends Error {
  constructor(...args: any) {
    super(...args);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class ConfigError extends RenovatioError {}
export class RestApiError extends RenovatioError {
  constructor(e:Error|AxiosError) {
    let message = e.message
    if(e instanceof AxiosError) {
      message = e?.response?.data ? `${e.response.data?.message} [${e.response.data?.statusCode}]` : e.message
    }
    super(`Rest Api Error: ${message}`)
  }
}
export class GraphApiError extends RenovatioError {
  constructor(e:Error|AxiosError) {
    let message = e.message
    if(e instanceof AxiosError) {
      message = e?.response?.data ? `${e.response.data?.message} [${e.response.data?.statusCode}]` : e.message
    }
    super(`GraphQL Api Error: ${message}`)
  }
}