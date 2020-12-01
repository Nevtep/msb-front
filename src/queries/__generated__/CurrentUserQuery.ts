/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CurrentUserQuery
// ====================================================

export interface CurrentUserQuery_currentUser_subscriptions {
  __typename: "Service";
  id: string | null;
  startDate: any | null;
  endDate: any | null;
  name: string | null;
}

export interface CurrentUserQuery_currentUser {
  __typename: "User";
  id: string | null;
  subscriptions: (CurrentUserQuery_currentUser_subscriptions | null)[] | null;
  fullName: string | null;
  email: string | null;
}

export interface CurrentUserQuery {
  currentUser: CurrentUserQuery_currentUser | null;
}
