import { UpdateCustomer, UpdateCustomerProfile } from "../customers/types";

export type UpdateOwnCustomer = Omit<UpdateCustomer,'active'|'email'|'dashboards'>
export type UpdateOwnProfile = UpdateCustomerProfile