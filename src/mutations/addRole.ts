import gql from 'graphql-tag';

export const ADD_ROLE = gql`
mutation AddRole($userId: ID, $name: String, $startDate: Date, $endDate: Date) {
  addRole(userId: $userId, name: $name, startDate: $startDate ,endDate: $endDate) {
    id
    email
    fullName
    subscriptions{
      id
      startDate
      endDate
      name
    }
  }
}
`;
