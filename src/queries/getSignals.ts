import gql from 'graphql-tag';

export const GET_SIGNALS = gql`
  query GetSignals {
    signals {
        id
        op
        time
        pair
    }
  }
`;
