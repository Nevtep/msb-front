/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPlans
// ====================================================

export interface GetPlans_plans {
  __typename: "Plan";
  id: string | null;
  label: string | null;
  amount: number | null;
  role: string | null;
}

export interface GetPlans {
  plans: (GetPlans_plans | null)[] | null;
}
