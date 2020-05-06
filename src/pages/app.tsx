import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import "../assets/scss/main.scss";

import { Router } from "@reach/router"
import { CURRENT_USER_QUERY } from '../queries/currentUser';
import { AccountNav } from '../components/AccountNav';
import { Home } from '../components/Home';
import { Settings } from '../components/Settings';
import { Billing } from '../components/Subscriptions';

const App = () => {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY);

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  const isLoggedIn = !!data.currentUser;

  if (isLoggedIn) {
    const userInitials = data.currentUser.fullName.split(' ').map((piece: string) => piece.substring(0,1)).join('').toUpperCase();
    return (
      <div className="account-main">
        <AccountNav initials={userInitials} />
        <Router>
            <Home path="/app" {...data.currentUser} />
            <Settings path="/app/settings" />
            <Billing path="/app/billing" />
        </Router>
      </div>
    );
  }

  // SIGNUP AND LOGIN GO HERE
  return <div>User is not logged in</div>;
};

export default App;