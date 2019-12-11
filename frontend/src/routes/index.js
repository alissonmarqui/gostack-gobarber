import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dasboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dasboard} isPrivate />
      <Route path="/profile" ecomponent={Profile} isPrivate />
    </Switch>
  );
}
