import axios, { Axios } from "axios";
import { ValidatedApiConfigs, ApiConfigs, validateConfigs } from "./config";
import { ApiHeader } from "./types";
import { ClientApiI } from "./model";
import Auth from "./auth";
import Customers from "./customers";
import { AccessTokenDto } from "./auth/types";
import Dashboards from "./dashboards";
import DashboardAccesses from "./dashboard-accesses";
import { AuthError } from "./error";

export class AccountsApiClient implements ClientApiI
{
  protected SANDBOX_URL = 'http://localhost:3000'
  protected PRODUCTION_URL = 'https://api.accounts.maior.cloud'
  protected client:Axios;
  protected configApi:ValidatedApiConfigs;
  authentication:Auth;
  customers:Customers;
  dashboards:Dashboards;
  dashboardAccesses:DashboardAccesses;

  constructor(protected config: ApiConfigs) {
    this.configApi = validateConfigs(this.config)
    this.client = this._initClient()
    this._initModules()
  }

  protected _initClient(): Axios {
    axios.defaults.baseURL = this.configApi.sandbox ? this.SANDBOX_URL : this.PRODUCTION_URL;
    axios.defaults.headers.common[ApiHeader.ApiVersion] = this.configApi.version
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    return axios
  }

  protected _initModules() {
    this.authentication = new Auth(this.client)
    this.customers = new Customers(this.client)
    this.dashboards = new Dashboards(this.client)
    this.dashboardAccesses = new DashboardAccesses(this.client)
  }

  _setAccessToken(accessToken:string) {
    this.client.defaults.headers.common[ApiHeader.Authorization] = `Bearer ${accessToken}`
  }

  async auth(): Promise<AccessTokenDto> {
    if(!this.configApi.credentials) throw new AuthError('Missing credentials')
    const access = this.configApi.credentials.apiToken ? await this.authentication.token(this.configApi.credentials.apiToken) : await this.authentication.signIn(this.configApi.credentials.signIn)
    this.client.defaults.headers.common[ApiHeader.Authorization] = `${access.token_type} ${access.access_token}`
    return access
  }

  async authRefresh(refreshToken?:string): Promise<AccessTokenDto> {
    const access = await this.authentication.refresh(refreshToken)
    this.client.defaults.headers.common[ApiHeader.Authorization] = `${access.token_type} ${access.access_token}`
    return access
  }

  async authRecover(email:string,code:number): Promise<AccessTokenDto> {
    const access = await this.authentication.code({email,code})
    this.client.defaults.headers.common[ApiHeader.Authorization] = `${access.token_type} ${access.access_token}`
    return access
  }
}