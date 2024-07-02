import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";

export const pagesResolvers:Resolvers<['pages'],['removePage']> = {
  query:{
    pages:{
      name:'pages',
      query: `query PageList($limit: Int, $after: Int, $before: Int){
        pages(limit: $limit, after: $after, before: $before){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            formatId
            slug
            title
            description
            published
            metafields {
              key
              value
            }
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
    removePage:{
      name:'removePage',
      query: `mutation PageDelete($id: [Int!]!){
        removePage(id: $id) {
          count
        }
      }`,
    },   
  }
}

export type QueryPageGQLDto = PaginatedGQLQueryDto