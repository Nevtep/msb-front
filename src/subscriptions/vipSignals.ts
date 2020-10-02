import gql from 'graphql-tag';

export const VIP_SIGNALS = gql`
subscription VipSignals {
  vipSignal{
    text
    user {
      fullName
    }
  }
}
`;
