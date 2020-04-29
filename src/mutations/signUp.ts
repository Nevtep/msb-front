import gql from 'graphql-tag';

export const SIGNUP_MUTATION = gql`
  mutation Signup(
    $fullName: String!,
    $email: String!,
    $password: String!
  ) {
    signup(
      fullName: $fullName,
      email: $email,
      password: $password
    ) {
      user {
        id
        fullName
        email
      }
    }
  }
`;