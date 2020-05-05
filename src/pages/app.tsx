import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import "../assets/scss/main.scss";

import { Router } from "@reach/router"
import { Link } from "gatsby"
import { CURRENT_USER_QUERY } from '../queries/currentUser';
import LogoutButton from '../components/LogoutButton';

const Home = ({id, fullName, email}) => (<p>{id}
<br />
{fullName}
<br />
Welcome! {email}</p>)
const Settings = ({}) => <p>Settings</p>
const Billing = ({}) => <p>Billing</p>

const App = () => {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY);

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  const isLoggedIn = !!data.currentUser;

  if (isLoggedIn) {

    return (
      <>
        <nav>
            <Link to="/app">Home</Link>{" "}
            <Link to="/app/settings">Settings</Link>{" "}
            <Link to="/app/billing">Billing</Link>{" "}
            <LogoutButton />
        </nav>
        <Router>
            <Home path="/app" {...data.currentUser} />
            <Settings path="/app/settings" />
            <Billing path="/app/billing" />
        </Router>
      </>
    );
  }

  // SIGNUP AND LOGIN GO HERE
  return <div>User is not logged in</div>;
};

export default App;