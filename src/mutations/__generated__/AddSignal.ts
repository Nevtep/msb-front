/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OperationType } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddSignal
// ====================================================

export interface AddSignal_addSignal {
  __typename: "Signal";
  id: string | null;
  op: OperationType | null;
  time: any | null;
  pair: string | null;
}

export interface AddSignal {
  addSignal: AddSignal_addSignal | null;
}

export interface AddSignalVariables {
  time: any;
  pair: string;
  op: OperationType;
}
