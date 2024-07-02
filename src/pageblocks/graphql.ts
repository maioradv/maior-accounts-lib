import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";

export const pageblocksResolvers:Resolvers<['pageblocks'],['removePageblock']> = {
  query:{
    pageblocks:{
      name:'pageblocks',
      query: `query PageblockList($limit: Int, $after: Int, $before: Int){
        pageblocks(limit: $limit, after: $after, before: $before){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            name
            description
            configs        
            translations {
              key
              value
              locale
            }
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
    removePageblock:{
      name:'removePageblock',
      query: `mutation PageblockDelete($id: [Int!]!){
        removePageblock(id: $id) {
          count
        }
      }`,
    },   
  }
}

export type QueryPageblockGQLDto = PaginatedGQLQueryDto