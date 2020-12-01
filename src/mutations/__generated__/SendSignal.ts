/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendSignal
// ====================================================

export interface SendSignal_sendSignal_user {
  __typename: "User";
  fullName: string | null;
}

export interface SendSignal_sendSignal {
  __typename: "Message";
  text: string;
  user: SendSignal_sendSignal_user | null;
}

export interface SendSignal {
  sendSignal: SendSignal_sendSignal | null;
}

export interface SendSignalVariables {
  vipMessage?: string | null;
}
