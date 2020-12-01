/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: SelectUser
// ====================================================

export interface SelectUser_selectUser {
  __typename: "User";
  id: string | null;
}

export interface SelectUser {
  selectUser: SelectUser_selectUser | null;
}

export interface SelectUserVariables {
  user?: UserInput | null;
}
