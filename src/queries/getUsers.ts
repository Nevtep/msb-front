import gql from 'graphql-tag';

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      subscriptions {
        startDate
        endDate
        name
        id
      }
      fullName
      email
    }
  }
`;