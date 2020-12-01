/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: VipSignals
// ====================================================

export interface VipSignals_vipSignal_user {
  __typename: "User";
  fullName: string | null;
}

export interface VipSignals_vipSignal {
  __typename: "Message";
  text: string;
  user: VipSignals_vipSignal_user | null;
}

export interface VipSignals {
  vipSignal: VipSignals_vipSignal | null;
}
