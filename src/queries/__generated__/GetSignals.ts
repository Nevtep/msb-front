/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OperationType } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetSignals
// ====================================================

export interface GetSignals_signals {
  __typename: "Signal";
  id: string | null;
  op: OperationType | null;
  time: any | null;
  pair: string | null;
}

export interface GetSignals {
  signals: (GetSignals_signals | null)[] | null;
}
