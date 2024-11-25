import { ApiModule } from "../model";
import { AccessTokenDto, SignInDto } from "./types";

export default class AuthOperator extends ApiModule {
  signIn(data:SignInDto): Promise<AccessTokenDto> {
    return this._call<AccessTokenDto>('post','/auth/operator/login',data)
  }

  refresh(refreshToken?:string): Promise<AccessTokenDto> {
    return this._call<AccessTokenDto>('post','/auth/operator/refresh',{refreshToken})
  }
}