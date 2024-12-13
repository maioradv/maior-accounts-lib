import { Axios } from "axios";
import { ApiModule } from "../model";
import Companies from "./companies";
import { Customer, CustomerProfile } from "../customers/types";
import { UpdateOwnCustomer, UpdateOwnProfile } from "./types";
import CompanyAddresses from "./company-addresses";
import PaymentMethods from "./payment-methods";
import Dashboards from "./dashboards";
import DashboardAccesses from "./dashboard-accesses";
import ScheduledPayments from "./scheduled-payments";

export default class Me extends ApiModule {
  readonly companies:Companies;
  readonly companyAddresses:CompanyAddresses;
  readonly paymentMethods:PaymentMethods;
  readonly dashboards:Dashboards;
  readonly dashboardAccesses:DashboardAccesses;
  readonly scheduledPayments:ScheduledPayments;

  constructor(client:Axios){
    super(client)
    this.companies = new Companies(client)
    this.companyAddresses = new CompanyAddresses(client)
    this.paymentMethods = new PaymentMethods(client)
    this.dashboards = new Dashboards(client)
    this.dashboardAccesses = new DashboardAccesses(client)
    this.scheduledPayments = new ScheduledPayments(client)
  }

  info() {
    return this._call<Customer>('get',`/me`)
  }

  update(data:UpdateOwnCustomer) {
    return this._call<Customer>('patch',`/me`,data)
  }

  remove() {
    return this._call<Customer>('delete',`/me`)
  }

  updateProfile(data:UpdateOwnProfile) {
    return this._call<CustomerProfile>('patch',`/me/profile`,data)
  }
}