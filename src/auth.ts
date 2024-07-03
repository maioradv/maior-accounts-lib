import { Axios } from "axios";
import { AuthError } from "./error";

export type AuthParams = {
  apiToken:string;
}

export class Auth {
  constructor(private client:Axios){}

  public async perform(params:AuthParams): Promise<AccessTokenDto> {
    return this.__AccessToken(params)
  }

  protected async __AccessToken(params:AuthParams): Promise<AccessTokenDto> {
    try {
      const response = await this.client.request({
        method:'POST',
        url:`/auth/token/${params.apiToken}`,
      })
      return response.data as AccessTokenDto
    }
    catch(error:any) {
      throw new AuthError(error)
    }
  }
}

export type AccessTokenDto = {
  access_token:string;
  token_type:string;
  expires_in:number;
  refresh_token?:string;
}