import axios, { Axios } from "axios";
import { ValidatedApiConfigs, ApiConfigs, validateConfigs } from "./config";
import { ApiHeader } from "./types";
import { ClientApiI } from "./model";
import Auth from "./auth";
import Customers from "./customers";

export class AccountsApiClient implements ClientApiI
{
  protected client:Axios;
  protected configApi:ValidatedApiConfigs;
  authentication:Auth;
  customers:Customers;

  constructor(protected config: ApiConfigs) {
    this.configApi = validateConfigs(this.config)
    this.client = this._initClient()
    this.authentication = new Auth(this.client)
    this._initModules()
  }

  protected _initClient(): Axios {
    axios.defaults.baseURL = 'http://' + this.configApi.host;
    axios.defaults.headers.common[ApiHeader.ApiVersion] = this.configApi.version
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    return axios
  }

  protected _initModules() {
    this.customers = new Customers(this.client)
  }

  async auth() {
    const access = this.configApi.credentials.apiToken ? await this.authentication.token(this.configApi.credentials.apiToken) : await this.authentication.signIn(this.configApi.credentials.signIn)
    this.client.defaults.headers.common[ApiHeader.Authorization] = `${access.token_type} ${access.access_token}`
    this._initModules()
  }
}