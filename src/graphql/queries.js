/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSwimmer = /* GraphQL */ `
  query GetSwimmer($id: ID!) {
    getSwimmer(id: $id) {
      id
      lname
      fname
      swimevent
      time
      date
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
        lname
        fname
        swimevent
        time
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
