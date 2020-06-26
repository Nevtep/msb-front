import gql from 'graphql-tag';

export const CURRENT_USER_QUERY = gql`
  query CurrentUserQuery {
    currentUser {
      id
      services {
        startDate
        endDate
        role
      }
      fullName
      email
    }
  }
`;