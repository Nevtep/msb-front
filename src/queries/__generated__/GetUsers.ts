/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUsers
// ====================================================

export interface GetUsers_users_subscriptions {
  __typename: "Service";
  startDate: any | null;
  endDate: any | null;
  name: string | null;
  id: string | null;
}

export interface GetUsers_users {
  __typename: "User";
  id: string | null;
  subscriptions: (GetUsers_users_subscriptions | null)[] | null;
  fullName: string | null;
  email: string | null;
}

export interface GetUsers {
  users: (GetUsers_users | null)[] | null;
}
