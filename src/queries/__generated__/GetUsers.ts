/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUsers
// ====================================================

export interface GetUsers_users_services {
  __typename: "Service";
  startDate: any | null;
  endDate: any | null;
  role: string | null;
}

export interface GetUsers_users {
  __typename: "User";
  id: string | null;
  services: (GetUsers_users_services | null)[] | null;
  fullName: string | null;
  email: string | null;
}

export interface GetUsers {
  users: (GetUsers_users | null)[] | null;
}
