import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";

export const languagesResolvers:Resolvers<['languages'],['removeLanguage']> = {
  query:{
    languages:{
      name:'languages',
      query: `query LanguageList($limit: Int, $after: Int, $before: Int){
        languages(limit: $limit, after: $after, before: $before){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            name
            locale
            iso
            active
            published
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
    removeLanguage:{
      name:'removeLanguage',
      query: `mutation LanguageDelete($id: [Int!]!){
        removeLanguage(id: $id) {
          count
        }
      }`,
    },   
  }
}

export type QueryLanguageGQLDto = PaginatedGQLQueryDto