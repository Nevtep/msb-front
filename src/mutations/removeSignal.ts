import gql from 'graphql-tag';

export const REMOVE_SIGNAL = gql`
mutation RemoveSignal($id: ID) {
  removeSignal(id: $id)
}
`;