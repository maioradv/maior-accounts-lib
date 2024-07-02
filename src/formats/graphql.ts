import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";

export const formatsResolvers:Resolvers<['formats'],['removeFormat']> = {
  query:{
    formats:{
      name:'formats',
      query: `query FormatList($limit: Int, $after: Int, $before: Int){
        formats(limit: $limit, after: $after, before: $before){
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
    removeFormat:{
      name:'removeFormat',
      query: `mutation FormatDelete($id: [Int!]!){
        removeFormat(id: $id) {
          count
        }
      }`,
    },   
  }
}

export type QueryFormatGQLDto = PaginatedGQLQueryDto