/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SelectedUser
// ====================================================

export interface SelectedUser_selectedUser_subscriptions {
  __typename: "Service";
  id: string | null;
  startDate: any | null;
  endDate: any | null;
  name: string | null;
}

export interface SelectedUser_selectedUser {
  __typename: "User";
  id: string | null;
  subscriptions: (SelectedUser_selectedUser_subscriptions | null)[] | null;
  fullName: string | null;
  email: string | null;
}

export interface SelectedUser {
  selectedUser: SelectedUser_selectedUser | null;
}
