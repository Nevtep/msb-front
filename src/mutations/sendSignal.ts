import gql from 'graphql-tag';

export const SEND_SIGNAL = gql`
mutation SendSignal($vipMessage: String){
  sendSignal(text: $vipMessage) {
    text
    user {
      fullName
    }
  }
}
`;