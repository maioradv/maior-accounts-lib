import { ApiModule } from "../model";
import { AccessTokenDto } from "./types";

export default class AuthApiToken extends ApiModule {
  token(apiToken:string): Promise<AccessTokenDto> {
    return this._call<AccessTokenDto>('post',`/auth/token/${apiToken}`)
  }
}