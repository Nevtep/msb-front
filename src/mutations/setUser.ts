import gql from 'graphql-tag';

export const SET_USER = gql`
mutation SetUser($user: UserInput) {
  setUser(user: $user) {
    id
    email
    fullName
    subscriptions{
      startDate
      endDate
      name
    }
  }
}
`;
