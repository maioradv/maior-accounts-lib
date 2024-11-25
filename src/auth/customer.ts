import { ApiModule } from "../model";
import { AccessTokenDto, SignInDto } from "./types";

export class AuthCustomer extends ApiModule {
  signIn(data:SignInDto): Promise<AccessTokenDto> {
    return this._call<AccessTokenDto>('post','/auth/login',data)
  }

  refresh(refreshToken?:string): Promise<AccessTokenDto> {
    return this._call<AccessTokenDto>('post','/auth/refresh',{refreshToken})
  }

  recover(email:string): Promise<void> {
    return this._call<void>('post',`/auth/recover`,{email})
  }

  code({email,code}:{email:string,code:number}): Promise<AccessTokenDto> {
    return this._call<AccessTokenDto>('post',`/auth/code`,{email,code})
  }
}