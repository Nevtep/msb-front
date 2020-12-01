import gql from 'graphql-tag';

export const GET_PLANS = gql`
  query GetPlans {
    plans {
      id
      label
      amount
      duration
      role
    }
  }
`;
