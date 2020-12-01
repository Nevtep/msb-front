/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddRole
// ====================================================

export interface AddRole_addRole_subscriptions {
  __typename: "Service";
  id: string | null;
  startDate: any | null;
  endDate: any | null;
  name: string | null;
}

export interface AddRole_addRole {
  __typename: "User";
  id: string | null;
  email: string | null;
  fullName: string | null;
  subscriptions: (AddRole_addRole_subscriptions | null)[] | null;
}

export interface AddRole {
  addRole: AddRole_addRole | null;
}

export interface AddRoleVariables {
  userId?: string | null;
  name?: string | null;
  startDate?: any | null;
  endDate?: any | null;
}
