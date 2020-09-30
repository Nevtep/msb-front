import gql from 'graphql-tag';

export const ADD_SIGNAL = gql`
mutation AddSignal($time: Timestamp!, $pair: String!, $op: OperationType!) {
  addSignal(time: $time, pair: $pair, op: $op) {
    id
    op
    time
    pair
  }
}
`;
