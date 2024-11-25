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
import Operators from "./operators"
import OperatorRoles from "./operators/roles";
import Companies from "./companies";
import CompanyAddresses from "./companies/addresses";
import SavedPayments from "./companies/payments";

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
  operators:Operators;
  operatorRoles:OperatorRoles;
  companies:Companies;
  companyAddresses:CompanyAddresses;
  savedPayments:SavedPayments;

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
    this.operators = new Operators(this.client)
    this.operatorRoles = new OperatorRoles(this.client)
    this.companies = new Companies(this.client)
    this.companyAddresses = new CompanyAddresses(this.client)
    this.savedPayments = new SavedPayments(this.client)
  }

  _setAccessToken(accessToken:string) {
    this.client.defaults.headers.common[ApiHeader.Authorization] = `Bearer ${accessToken}`
  }

  async auth(): Promise<AccessTokenDto> {
    if(!this.configApi.credentials) throw new AuthError('Missing credentials')
    const access = 
      this.configApi.credentials.apiToken ? await this.authentication.apitoken.token(this.configApi.credentials.apiToken) : 
      this.configApi.credentials.operator ? await this.authentication.operator.signIn(this.configApi.credentials.operator) :
      await this.authentication.customer.signIn(this.configApi.credentials.customer)
    this.client.defaults.headers.common[ApiHeader.Authorization] = `${access.token_type} ${access.access_token}`
    return access
  }

  async authRefresh(refreshToken?:string): Promise<AccessTokenDto> {
    const access = 
      this.configApi.credentials?.operator ? await this.authentication.operator.refresh(refreshToken) : 
      await this.authentication.customer.refresh(refreshToken)
    this.client.defaults.headers.common[ApiHeader.Authorization] = `${access.token_type} ${access.access_token}`
    return access
  }

  async authRecover(email:string,code:number): Promise<AccessTokenDto> {
    const access = await this.authentication.customer.code({email,code})
    this.client.defaults.headers.common[ApiHeader.Authorization] = `${access.token_type} ${access.access_token}`
    return access
  }
}