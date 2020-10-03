import gql from 'graphql-tag';

export const LOGIN_MUTATION = gql`
  mutation Login(
    $email: String!,
    $password: String!
  ) {
    login(
      email: $email,
      password: $password
    ) {
      user {
        id
        fullName
        email
        subscriptions {
          id
          startDate
          endDate
          name
        }
      }
    }
  }
`;