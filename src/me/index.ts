import { Axios } from "axios";
import { ApiModule } from "../model";
import Companies from "./companies";
import { Customer, CustomerProfile } from "../customers/types";
import { UpdateOwnCustomer, UpdateOwnProfile } from "./types";

export default class Me extends ApiModule {
  readonly companies:Companies;

  constructor(client:Axios){
    super(client)
    this.companies = new Companies(client)
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