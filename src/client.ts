import axios, { Axios } from "axios";
import { ValidatedApiConfigs, ApiConfigs, validateConfigs } from "./config";
import { ApiHeader } from "./types";
import { ClientApiI } from "./model";
import Auth from "./auth";
import Customers from "./customers";
import { AccessTokenDto } from "./auth/types";
import Dashboards from "./dashboards";
import DashboardAccesses from "./dashboard-accesses";

export class AccountsApiClient implements ClientApiI
{
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
    axios.defaults.baseURL = 'http://' + this.configApi.host;
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

  async auth(): Promise<AccessTokenDto> {
    const access = this.configApi.credentials.apiToken ? await this.authentication.token(this.configApi.credentials.apiToken) : await this.authentication.signIn(this.configApi.credentials.signIn)
    this.client.defaults.headers.common[ApiHeader.Authorization] = `${access.token_type} ${access.access_token}`
    return access
  }

  async authRefresh(refreshToken?:string): Promise<AccessTokenDto> {
    const access = await this.authentication.refresh(refreshToken)
    this.client.defaults.headers.common[ApiHeader.Authorization] = `${access.token_type} ${access.access_token}`
    return access
  }
}