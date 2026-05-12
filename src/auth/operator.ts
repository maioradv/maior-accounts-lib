import { RestApiModuleI, ApiModule, queryParams, RemoveGQL, PaginatedDto, PaginatedGQL  } from "@maioradv/client-core";
import { AccessTokenDto, SignInDto } from "./types";
import { OperatorSession } from "../operators/types";

export default class AuthOperator extends ApiModule {
  signIn(data:SignInDto): Promise<AccessTokenDto> {
    return this._call<AccessTokenDto>('post','/auth/operator/login',data)
  }

  refresh(refreshToken?:string): Promise<AccessTokenDto> {
    return this._call<AccessTokenDto>('post','/auth/operator/refresh',{refreshToken})
  }

  sessions() {
    return this._call<OperatorSession[]>('get',`/auth/operator/sessions`)
  }
}