import gql from 'graphql-tag';

export const SELECT_USER = gql`
mutation SelectUser($user: UserInput) {
  selectUser(user: $user) @client {
    id
  }
}
`;