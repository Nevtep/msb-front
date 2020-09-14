import gql from 'graphql-tag';

export const CONFIRM_SUBSCRIPTION = gql`
mutation ConfirmSubscription($purchaseId: String!) {
  confirmSubscription(purchaseId: $purchaseId) {
    id
    subscriptions {
      id
      name
      startDate
      endDate
      paymentRef
    }
  }
}
`;
