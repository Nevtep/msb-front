/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ConfirmSubscription
// ====================================================

export interface ConfirmSubscription_confirmSubscription_subscriptions {
  __typename: "Service";
  id: string | null;
  name: string | null;
  startDate: any | null;
  endDate: any | null;
  paymentRef: string | null;
}

export interface ConfirmSubscription_confirmSubscription {
  __typename: "User";
  id: string | null;
  subscriptions: (ConfirmSubscription_confirmSubscription_subscriptions | null)[] | null;
}

export interface ConfirmSubscription {
  confirmSubscription: ConfirmSubscription_confirmSubscription | null;
}

export interface ConfirmSubscriptionVariables {
  purchaseId: string;
}
