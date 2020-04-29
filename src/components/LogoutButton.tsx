import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { navigate } from 'gatsby';

import { CURRENT_USER_QUERY } from '../queries/currentUser';
import { LOGOUT_MUTATION } from '../mutations/logout';

const LogoutButton = () => {
    const [logout] = useMutation(
      LOGOUT_MUTATION,
      {
        update: (cache) => cache.writeQuery({
          query: CURRENT_USER_QUERY,
          data: { currentUser: null },
        }),
        onCompleted: () => navigate('/')
      },
    );
  
    return (
      <button onClick={() => logout()}>
        Logout
      </button>
    );
  };
  
  export default LogoutButton;