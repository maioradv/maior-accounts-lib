import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";

export const customersResolvers:Resolvers<['customers'],['removeCustomers']> = {
  query:{
    customers:{
      name:'customers',
      query: `query CustomerList($limit: Int, $after: Int, $before: Int){
        customers(limit: $limit, after: $after, before: $before){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            email
            password
            name
            active
            createdAt
            updatedAt
          }
          meta {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }`,
    },
  },
  mutation:{
    removeCustomers:{
      name:'removeCustomers',
      query: `mutation CustomerDelete($id: [Int!]!){
        removeCustomer(id: $id) {
          count
        }
      }`,
    },   
  }
}

export type QueryCustomerGQLDto = PaginatedGQLQueryDto