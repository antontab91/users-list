import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import UserList from './user-list/UserList'
import User from './user/User'
import { ROUTES } from './constants'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.USER_LIST} exact={true} component={UserList} />
        <Route path={`${ROUTES.USER}:id`} component={User} />
        <Redirect to={ROUTES.USER_LIST} />
      </Switch>
    </Router>
  );
}

export default Routes