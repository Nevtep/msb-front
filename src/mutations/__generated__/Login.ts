/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login_user_subscriptions {
  __typename: "Service";
  id: string | null;
  startDate: any | null;
  endDate: any | null;
  name: string | null;
}

export interface Login_login_user {
  __typename: "User";
  id: string | null;
  fullName: string | null;
  email: string | null;
  subscriptions: (Login_login_user_subscriptions | null)[] | null;
}

export interface Login_login {
  __typename: "AuthPayload";
  user: Login_login_user | null;
}

export interface Login {
  login: Login_login | null;
}

export interface LoginVariables {
  email: string;
  password: string;
}
