import { ApiModule } from "../model";
import { AccessTokenDto, Jwt, SignInDto } from "./types";

export default class Auth extends ApiModule {
  signIn(data:SignInDto): Promise<AccessTokenDto> {
    return this._call<AccessTokenDto>('post','/auth/login',data)
  }

  refresh(): Promise<AccessTokenDto> {
    return this._call<AccessTokenDto>('post','/auth/refresh')
  }

  token(apiToken:string): Promise<AccessTokenDto> {
    return this._call<AccessTokenDto>('post',`/auth/token/${apiToken}`)
  }

  me(): Promise<Jwt> {
    return this._call<Jwt>('get',`/auth/me`)
  }
}