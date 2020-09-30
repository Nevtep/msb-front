import gql from 'graphql-tag';

export const SELECTED_USER = gql`
  query SelectedUser {
    selectedUser @client {
      id
      subscriptions {
        id
        startDate
        endDate
        name
      }
      fullName
      email
    }
  }
`;
