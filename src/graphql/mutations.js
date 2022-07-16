/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSwimmer = /* GraphQL */ `
  mutation CreateSwimmer(
    $input: CreateSwimmerInput!
    $condition: ModelSwimmerConditionInput
  ) {
    createSwimmer(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateSwimmer = /* GraphQL */ `
  mutation UpdateSwimmer(
    $input: UpdateSwimmerInput!
    $condition: ModelSwimmerConditionInput
  ) {
    updateSwimmer(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteSwimmer = /* GraphQL */ `
  mutation DeleteSwimmer(
    $input: DeleteSwimmerInput!
    $condition: ModelSwimmerConditionInput
  ) {
    deleteSwimmer(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
