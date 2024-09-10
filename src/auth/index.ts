import { Customer } from "../customers/types";
import { ApiModule } from "../model";
import { AccessTokenDto, Jwt, SignInDto, UpdateProfileDto } from "./types";

export default class Auth extends ApiModule {
  signIn(data:SignInDto): Promise<AccessTokenDto> {
    return this._call<AccessTokenDto>('post','/auth/login',data)
  }

  refresh(refreshToken?:string): Promise<AccessTokenDto> {
    return this._call<AccessTokenDto>('post','/auth/refresh',{refreshToken})
  }

  token(apiToken:string): Promise<AccessTokenDto> {
    return this._call<AccessTokenDto>('post',`/auth/token/${apiToken}`)
  }

  recover(email:string): Promise<void> {
    return this._call<void>('post',`/auth/recover`,{email})
  }

  code({email,code}:{email:string,code:number}): Promise<AccessTokenDto> {
    return this._call<AccessTokenDto>('post',`/auth/code`,{email,code})
  }

  me(): Promise<Jwt> {
    return this._call<Jwt>('get',`/auth/me`)
  }

  updateProfile(data:UpdateProfileDto): Promise<Customer> {
    return this._call<Customer>('patch',`/auth/me`,data)
  }
}