import { PaginatedGQLQueryDto, Resolvers } from "@maioradv/client-core";

export const customersResolvers:Resolvers<['customers'],['removeCustomers','pushCustomer']> = {
  query:{
    customers:{
      name:'customers',
      query: `query CustomerList($limit: Int, $after: Int, $before: Int, $sorting: String){
        customers(limit: $limit, after: $after, before: $before, sorting: $sorting){
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
    pushCustomer:{
      name:'pushCustomer',
      query: `mutation CustomerRegister($email: String!, $password: String!, $name: String){
        pushCustomer(email: $email, password: $password, name: $name) {
          id
          email
          password
          name
          active
          createdAt
          updatedAt
        }
      }`,
    },
  }
}

export type QueryCustomerGQLDto = PaginatedGQLQueryDto