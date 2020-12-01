/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OperationType } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UploadSignals
// ====================================================

export interface UploadSignals_uploadSignals {
  __typename: "Signal";
  id: string | null;
  time: any | null;
  op: OperationType | null;
  pair: string | null;
}

export interface UploadSignals {
  uploadSignals: (UploadSignals_uploadSignals | null)[] | null;
}

export interface UploadSignalsVariables {
  file: any;
}
