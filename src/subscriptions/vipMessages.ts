import gql from 'graphql-tag';

export const VIP_MESSAGES = gql`
subscription VipMessages{
  vipMessage {
    text
    user {
      fullName
    }
  }
}
`;
