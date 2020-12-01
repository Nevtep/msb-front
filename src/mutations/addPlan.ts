import gql from 'graphql-tag';

export const ADD_PLAN = gql`
mutation AddPlan($plan: PlanInput) {
  addPlan(plan: $plan)  {
    id
    label
    amount
    duration
    role
  }
}
`;
