import { Axios } from "axios";
import { ApiModule } from "../model";
import { Jwt } from "./types";
import AuthApiToken from "./apitoken";
import { AuthCustomer } from "./customer";
import AuthOperator from "./operator";

export default class Auth extends ApiModule {
  readonly apitoken:AuthApiToken;
  readonly customer:AuthCustomer;
  readonly operator:AuthOperator;

  constructor(client:Axios){
    super(client)
    this.apitoken = new AuthApiToken(client)
    this.customer = new AuthCustomer(client)
    this.operator = new AuthOperator(client)
  }

  me<T = Jwt>() {
    return this._call<T>('get',`/auth/me`)
  }
}