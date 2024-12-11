import axios, { Axios } from "axios";
import { ValidatedApiConfigs, ApiConfigs, validateConfigs } from "./config";
import { ApiHeader } from "./types";
import { ClientApiI } from "./model";
import Auth from "./auth";
import Customers from "./customers";
import { AccessTokenDto } from "./auth/types";
import Dashboards from "./dashboards";
import DashboardAccesses from "./dashboards/accesses";
import { AuthError } from "./error";
import Operators from "./operators"
import OperatorRoles from "./operators/roles";
import Companies from "./companies";
import CompanyAddresses from "./companies/addresses";
import SavedPayments from "./companies/payments";
import Products from "./products";
import DashboardTypes from "./dashboards/dash-types";
import Services from "./services";
import Plans from "./plans";
import ScheduledPayments from "./scheduled-payments";
import OrderTemplates from "./order-templates";
import PaymentMethods from "./payment-methods";
import ActivityLogs from "./activitylogs";
import Invoices from "./invoices";
import Contracts from "./contracts";
import Orders from "./orders";
import OrderItems from "./orders/items";
import Me from "./me";
import ServiceTemplates from "./order-templates/service-templates";
import OrderItemTemplates from "./order-templates/item-templates";

export class AccountsApiClient implements ClientApiI
{
  protected SANDBOX_URL = 'http://localhost:3001'
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
  products:Products;
  dashboardTypes:DashboardTypes;
  services:Services;
  plans:Plans;
  scheduledPayments:ScheduledPayments;
  orderTemplates:OrderTemplates;
  serviceTemplates:ServiceTemplates;
  orderItemTemplates:OrderItemTemplates;
  paymentMethods:PaymentMethods;
  activityLogs:ActivityLogs;
  invoices:Invoices;
  contracts:Contracts;
  orders:Orders;
  orderItems:OrderItems;
  me:Me;

  constructor(protected config: ApiConfigs) {
    this.configApi = validateConfigs(this.config)
    this.client = this._initClient()
    this._initModules()
  }

  protected _initClient(): Axios {
    const client = axios.create()
    client.defaults.baseURL = this.configApi.sandbox ? this.SANDBOX_URL : this.PRODUCTION_URL;
    client.defaults.headers.common[ApiHeader.ApiVersion] = this.configApi.version
    client.defaults.headers.common['Content-Type'] = 'application/json'
    return client
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
    this.products = new Products(this.client)
    this.dashboardTypes = new DashboardTypes(this.client)
    this.services = new Services(this.client)
    this.plans = new Plans(this.client)
    this.scheduledPayments = new ScheduledPayments(this.client)
    this.orderTemplates = new OrderTemplates(this.client)
    this.serviceTemplates = new ServiceTemplates(this.client)
    this.orderItemTemplates = new OrderItemTemplates(this.client)
    this.paymentMethods = new PaymentMethods(this.client)
    this.activityLogs = new ActivityLogs(this.client)
    this.invoices = new Invoices(this.client)
    this.contracts = new Contracts(this.client)
    this.orders = new Orders(this.client)
    this.orderItems = new OrderItems(this.client)
    this.me = new Me(this.client)
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

  async authRefresh(refreshToken?:string,context:'customer'|'operator' = 'customer'): Promise<AccessTokenDto> {
    const access = 
      context == 'operator' ? await this.authentication.operator.refresh(refreshToken) : 
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