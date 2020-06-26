import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { Router } from "@reach/router"
import { AdminUsers } from './AdminUsers';
import { AdminSignals } from './AdminSignals';

export const Admin = ({ location, user }) => {
    const userInitials = user.fullName.split(' ')
    .map((piece: string) => piece.substring(0,1))
    .join('').toUpperCase();
    return (
      <div className="admin-main">
        <Router>
            <AdminUsers path="users" />
            <AdminSignals path="signals" />
        </Router>
      </div>
    );
};

export default Admin;