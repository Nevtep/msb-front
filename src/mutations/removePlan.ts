import gql from 'graphql-tag';

export const REMOVE_PLAN = gql`
mutation RemovePlan($id: ID) {
  removePlan(id: $id)
}
`;