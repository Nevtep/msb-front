/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Signup
// ====================================================

export interface Signup_signup_user {
  __typename: "User";
  id: string | null;
  fullName: string | null;
  email: string | null;
}

export interface Signup_signup {
  __typename: "AuthPayload";
  user: Signup_signup_user | null;
}

export interface Signup {
  signup: Signup_signup | null;
}

export interface SignupVariables {
  fullName: string;
  email: string;
  password: string;
}
