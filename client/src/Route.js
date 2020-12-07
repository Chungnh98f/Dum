import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthPage from "./views/pages/Authentication";

const AppRoute = () => {
  return (
    <Switch>
      <Route path="/auth" component={AuthPage} />
    </Switch>
  );
};

export default AppRoute;
