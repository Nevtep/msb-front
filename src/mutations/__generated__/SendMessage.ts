/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendMessage
// ====================================================

export interface SendMessage_sendMessage_user {
  __typename: "User";
  fullName: string | null;
}

export interface SendMessage_sendMessage {
  __typename: "Message";
  text: string;
  user: SendMessage_sendMessage_user | null;
}

export interface SendMessage {
  sendMessage: SendMessage_sendMessage | null;
}

export interface SendMessageVariables {
  message?: string | null;
}
