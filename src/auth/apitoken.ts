import { RestApiModuleI, ApiModule, queryParams, RemoveGQL, PaginatedDto, PaginatedGQL  } from "@maioradv/client-core";
import { AccessTokenDto } from "./types";

export default class AuthApiToken extends ApiModule {
  token(token:string): Promise<AccessTokenDto> {
    return this._call<AccessTokenDto>('post',`/auth/token`,{token})
  }
}