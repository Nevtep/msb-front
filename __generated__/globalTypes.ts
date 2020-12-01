/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum OperationType {
  CALL = "CALL",
  PUT = "PUT",
}

export interface ServiceInput {
  id?: string | null;
  role?: string | null;
  startDate?: any | null;
  endDate?: any | null;
  invoice?: string | null;
}

export interface UserInput {
  id?: string | null;
  fullName?: string | null;
  email?: string | null;
  services?: (ServiceInput | null)[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
