import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { Router } from "@reach/router"
import { CURRENT_USER_QUERY } from '../queries/currentUser';
import { AccountNav } from '../components/AccountNav';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Home } from '../components/Home';
import { Settings } from '../components/Settings';
import { Billing } from '../components/Subscriptions';
import { Academy } from '../components/Academy';
import { Signals } from '../components/Signals';
import { Invest } from '../components/Invest';
import SignupForm from '../components/SignUpForm';
import PrivateRoute from '../components/Admin/AdminRoute';
import { AdminSignals } from '../components/Admin/AdminSignals';
import { AdminUsers } from '../components/Admin/AdminUsers';
import { VipRoles, TraineeRoles, AdminRoles, InvestorRoles } from '../services/auth';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FAF78C',
    },
    secondary: {
      main: '#BB8644',
    },
  },
})

const App = ({ location }) => {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY);

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  const isLoggedIn = !!data.currentUser;

  if (isLoggedIn) {
    const userInitials = data.currentUser.fullName.split(' ').map((piece: string) => piece.substring(0,1)).join('').toUpperCase();
    return (
      <div className="account-main">
        <ThemeProvider theme={theme}>
          <AccountNav initials={userInitials} user={data.currentUser} />
          <Router>
            <Home path="/app" {...data.currentUser} />
            <Settings path="/app/settings" />
            <Billing path="/app/billing" user={data.currentUser} />
            <PrivateRoute
              allowed={TraineeRoles}
              user={data.currentUser}
              path="/app/academy/courses"
              location={location}
              component={Academy}
            />
            <PrivateRoute
              allowed={VipRoles}
              user={data.currentUser}
              path="/app/vip/signals"
              location={location}
              component={Signals}
            />
            <PrivateRoute
              allowed={InvestorRoles}
              user={data.currentUser}
              path="/app/invest/zone"
              location={location}
              component={Invest}
            />
            <PrivateRoute
              allowed={AdminRoles}
              user={data.currentUser}
              path="/app/admin/users"
              location={location}
              component={AdminUsers}
            />
            <PrivateRoute
              allowed={AdminRoles}
              user={data.currentUser}
              path="/app/admin/signals"
              location={location}
              component={AdminSignals}
            />
          </Router>
        </ThemeProvider>
      </div>
    );
  }

  // SIGNUP AND LOGIN GO HERE
  return <SignupForm />;
};

export default App;