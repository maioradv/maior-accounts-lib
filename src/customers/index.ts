import { PaginatedDto, PaginatedGQL } from "../core/dto/pagination";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule, GraphApiModuleI } from "../model";
import { QueryCustomerGQLDto, customersResolvers } from "./graphql";
import { Customer, CreateCustomer, UpdateCustomer, QueryCustomerDto, RegisterCustomer, CustomerProfile, UpdateCustomerProfile } from "./types";

export default class Customers extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(data:CreateCustomer): Promise<Customer> {
    return this._call<Customer>('post','/customers',data)
  }

  findAll(args:QueryCustomerDto = {}): Promise<PaginatedDto<Customer>> {
    return this._call<PaginatedDto<Customer>>('get','/customers',queryParams(args))
  } 

  findOne(id:number): Promise<Customer> {
    return this._call<Customer>('get',`/customers/${id}`)
  }

  update(id:number,data:UpdateCustomer): Promise<Customer> {
    return this._call<Customer>('patch',`/customers/${id}`,data)
  }

  remove(id:number): Promise<Customer> {
    return this._call<Customer>('delete',`/customers/${id}`)
  }

  findProfile(id:number) {
    return this._call<CustomerProfile>('get',`/customers/${id}/profile`)
  }

  updateProfile(id:number,data:UpdateCustomerProfile) {
    return this._call<CustomerProfile>('patch',`/customers/${id}/profile`,data)
  }

  register(data:RegisterCustomer) {
    return this._graphql<Customer>(customersResolvers.mutation.registerCustomer,data)
  }
  
  list(args:QueryCustomerGQLDto = {}): Promise<PaginatedGQL<Customer>> {
    return this._graphql<PaginatedGQL<Customer>>(customersResolvers.query.customers,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql<RemoveGQL>(customersResolvers.mutation.removeCustomers,{
      id
    })
  }
}