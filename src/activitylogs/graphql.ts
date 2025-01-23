import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";

export const activityLogsResolvers:Resolvers<['activityLogs'],['removeActivityLogs']> = {
  query:{
    activityLogs:{
      name:'activityLogs',
      query: `query ActivityLogList($limit: Int, $after: Int, $before: Int, $sorting: String){
        activityLogs(limit: $limit, after: $after, before: $before, sorting: $sorting){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            jwtSubId
            description
            request
            response
            published
            translations {
              key
              locale
              value
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
    removeActivityLogs:{
      name:'removeActivityLogs',
      query: `mutation ActivityLogDelete($id: [Int!]!){
        removeActivityLogs(id: $id) {
          count
        }
      }`,
    },   
  }
}

export type QueryActivityLogGQLDto = PaginatedGQLQueryDto