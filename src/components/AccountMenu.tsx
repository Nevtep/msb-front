import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { navigate } from 'gatsby';

import { CURRENT_USER_QUERY } from '../queries/currentUser';
import { LOGOUT_MUTATION } from '../mutations/logout';
import MenuItem from '@material-ui/core/MenuItem';

const AccountMenu = ({closeMenu}) => {
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

    const handleLogout = () => {
      closeMenu();
      logout();
    }
  
    return (<>
      <MenuItem onClick={handleLogout}>
        Logout
      </MenuItem>
    </>);
  };
  
  export default AccountMenu;