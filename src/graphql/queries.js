/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSwimmer = /* GraphQL */ `
  query GetSwimmer($id: ID!) {
    getSwimmer(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listSwimmers = /* GraphQL */ `
  query ListSwimmers(
    $filter: ModelSwimmerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSwimmers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
