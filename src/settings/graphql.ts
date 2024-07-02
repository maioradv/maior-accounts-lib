import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";

export const settingsResolvers:Resolvers<['settings'],['removeSetting']> = {
  query:{
    settings:{
      name:'settings',
      query: `query SettingList($limit: Int, $after: Int, $before: Int){
        settings(limit: $limit, after: $after, before: $before){
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
            value        
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
    removeSetting:{
      name:'removeSetting',
      query: `mutation SettingDelete($id: [Int!]!){
        removeSetting(id: $id) {
          count
        }
      }`,
    },   
  }
}

export type QuerySettingGQLDto = PaginatedGQLQueryDto