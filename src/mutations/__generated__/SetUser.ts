/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: SetUser
// ====================================================

export interface SetUser_setUser_subscriptions {
  __typename: "Service";
  startDate: any | null;
  endDate: any | null;
  name: string | null;
}

export interface SetUser_setUser {
  __typename: "User";
  id: string | null;
  email: string | null;
  fullName: string | null;
  subscriptions: (SetUser_setUser_subscriptions | null)[] | null;
}

export interface SetUser {
  setUser: SetUser_setUser | null;
}

export interface SetUserVariables {
  user?: UserInput | null;
}
