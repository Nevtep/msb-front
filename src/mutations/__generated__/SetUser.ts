/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: SetUser
// ====================================================

export interface SetUser_setUser_services {
  __typename: "Service";
  startDate: any | null;
  endDate: any | null;
  role: string | null;
}

export interface SetUser_setUser {
  __typename: "User";
  id: string | null;
  email: string | null;
  fullName: string | null;
  services: (SetUser_setUser_services | null)[] | null;
}

export interface SetUser {
  setUser: SetUser_setUser | null;
}

export interface SetUserVariables {
  user?: UserInput | null;
}
