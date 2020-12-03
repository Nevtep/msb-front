import gql from 'graphql-tag';

export const SIGNUP_MUTATION = gql`
  mutation Signup(
    $fullName: String!,
    $email: String!,
    $password: String!,
    $token: String!
  ) {
    signup(
      fullName: $fullName,
      email: $email,
      password: $password,
      token: $token
    ) {
      user {
        id
        fullName
        email
      }
    }
  }
`;