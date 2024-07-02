import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";

export const layoutsResolvers:Resolvers<['layouts'],['removeLayout']> = {
  query:{
    layouts:{
      name:'layouts',
      query: `query LayoutList($limit: Int, $after: Int, $before: Int){
        layouts(limit: $limit, after: $after, before: $before){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            target
            position
            formatId
            pageblockId
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
    removeLayout:{
      name:'removeLayout',
      query: `mutation LayoutDelete($id: [Int!]!){
        removeLayout(id: $id) {
          count
        }
      }`,
    },   
  }
}

export type QueryLayoutGQLDto = PaginatedGQLQueryDto