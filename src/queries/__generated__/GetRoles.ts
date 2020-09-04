/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRoles
// ====================================================

export interface GetRoles_roles {
  __typename: "Role";
  id: string | null;
  name: string | null;
}

export interface GetRoles {
  roles: (GetRoles_roles | null)[] | null;
}
