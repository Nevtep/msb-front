import gql from 'graphql-tag';

export const CONFIRM_SUBSCRIPTION = gql`
mutation ConfirmSubscription($purchaseID: ID!) {
  confirmSubscription(purchaseID: $purchaseID)
}
`;
