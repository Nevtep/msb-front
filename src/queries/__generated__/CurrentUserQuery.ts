/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CurrentUserQuery
// ====================================================

export interface CurrentUserQuery_currentUser_services {
  __typename: "Service";
  startDate: any | null;
  endDate: any | null;
  role: string | null;
}

export interface CurrentUserQuery_currentUser {
  __typename: "User";
  id: string | null;
  services: (CurrentUserQuery_currentUser_services | null)[] | null;
  fullName: string | null;
  email: string | null;
}

export interface CurrentUserQuery {
  currentUser: CurrentUserQuery_currentUser | null;
}
