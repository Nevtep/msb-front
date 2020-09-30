import gql from 'graphql-tag';

export const REMOVE_ROLE = gql`
mutation RemoveRole($id: ID) {
  removeRole(id: $id)
}
`;