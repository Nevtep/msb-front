/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: VipMessages
// ====================================================

export interface VipMessages_vipMessage_user {
  __typename: "User";
  fullName: string | null;
}

export interface VipMessages_vipMessage {
  __typename: "Message";
  text: string;
  user: VipMessages_vipMessage_user | null;
}

export interface VipMessages {
  vipMessage: VipMessages_vipMessage | null;
}
